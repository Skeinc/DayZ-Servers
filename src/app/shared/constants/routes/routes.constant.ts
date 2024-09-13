import { Routes } from "@angular/router";
import { OverviewComponent } from "@modules/overview/overview.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: OverviewComponent,
        pathMatch: 'full',
    },
    {
        path: 'overview',
        component: OverviewComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: ''
    }
];