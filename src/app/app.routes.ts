import { Routes } from '@angular/router';
import { DashboardPageComponent } from './gifs/pages/dashboard-page.component/dashboard-page.component';

export const routes: Routes = [
    {
        path:"dashboard",
        loadComponent: ()=>import('./gifs/pages/dashboard-page.component/dashboard-page.component').then(c=>c.DashboardPageComponent)
    },
    {
        path:"trending",
        loadComponent: ()=>import('./gifs/pages/trendingPage.component/trendingPage.component').then(c=>c.TrendingPageComponent)
    },
    {
        path:"search",
        loadComponent: ()=>import('./gifs/pages/searchPage.component/searchPage.component').then(c=>c.SearchPageComponent)
    },
    {
        path:"**",
        redirectTo:"dashboard"
    }
];
