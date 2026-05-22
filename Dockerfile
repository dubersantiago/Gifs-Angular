# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

ARG GIPHY_API_KEY
ARG API_URL=https://api.giphy.com/v1

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Generar environment.ts con los valores recibidos como ARG
RUN mkdir -p src/environments && printf "export const environment = {\n\
    Name: \"Gifs\",\n\
    subName: \"App\",\n\
    Slogan: \"Maneja tus Gifs\",\n\
    giphy_api: '%s',\n\
    api_url: '%s'\n\
};\n" "$GIPHY_API_KEY" "$API_URL" > src/environments/environment.ts

RUN npm run build

# ─── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/dist/gifs-app/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
