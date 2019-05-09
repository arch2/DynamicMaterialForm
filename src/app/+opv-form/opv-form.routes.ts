import { Routes } from '@angular/router';
import { OpvFormComponent } from './components';

export const OpvRoutes: Routes = [
    {
        path: '',
        component: OpvFormComponent
    },
    {
        path:':id',
        component:OpvFormComponent
    }
];