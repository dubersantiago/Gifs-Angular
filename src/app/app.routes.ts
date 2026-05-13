import { Routes } from '@angular/router';
import { DashboardPageComponent } from './gifs/pages/dashboard-page.component/dashboard-page.component';

export const routes: Routes = [
    {
        path:"dashboard",
        loadComponent: ()=>import('./gifs/pages/dashboard-page.component/dashboard-page.component').then(c=>c.DashboardPageComponent),
        children:[
            {
                path:"trending",
                loadComponent: ()=>import('./gifs/pages/trendingPage.component/trendingPage.component').then(c=>c.TrendingPageComponent)
            },
            {
                path:"search",
                loadComponent: ()=>import('./gifs/pages/searchPage.component/searchPage.component').then(c=>c.SearchPageComponent)
            },
            {
                path:"history/:query",
                loadComponent: ()=>import('./gifs/pages/gif-history/gif-history').then(c=>c.GifHistory)
            },
            {
                path:"**",
                redirectTo:"trending"
            }
        ]
    },
    {
        path:"**",
        redirectTo:"dashboard"
    }
];
