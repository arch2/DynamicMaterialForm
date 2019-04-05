import { HomeComponent } from './components';
import { Routes } from '@angular/router';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'mpev',
        loadChildren: '../+mpev-form/mpev-form.module#MpevFormModule'
    },
    {
        path: 'violations',
        loadChildren: '../+violations-form/violations-form.module#ViolationsFormModule'
    }
];
