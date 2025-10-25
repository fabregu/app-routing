import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUsuariosComponent } from './components/dashboard/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';

export const routes: Routes = [
    {path: '', redirectTo: 'layout', pathMatch: 'full'},
    {path: 'layout', component: LayoutComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
        {path: '', component: ListUsuariosComponent},
        {path: 'usuario/:id', component: UsuarioComponent}, 
    ]},
    {path: '**', redirectTo: 'layout', pathMatch: 'full'},
];
