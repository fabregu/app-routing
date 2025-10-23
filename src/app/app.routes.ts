import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: 'layout', pathMatch: 'full'},
    {path: 'layout', component: LayoutComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: 'layout', pathMatch: 'full'},
];
