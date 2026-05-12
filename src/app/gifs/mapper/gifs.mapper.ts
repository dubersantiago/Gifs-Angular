import { gif } from "../interfaces/gif.interface";
import { GhiphyItem } from "../interfaces/giphy.interface";

export class gifMapper {
    static mapGhiphyItemTogif(item: GhiphyItem):gif{
        return {
            id: item. id,
            title: item. title,
            url: item.images.original.url
        }
    }

    static mapGhiphyItemsTogifArrays(items: GhiphyItem[]):gif[]{
        return items.map(this.mapGhiphyItemTogif)
    }
}