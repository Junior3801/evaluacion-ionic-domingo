import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio', // <-- CAMBIA ESTO DE 'folder/inbox' A 'folder/Inicio'
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then((m) => m.ContactoPage),
  },
];