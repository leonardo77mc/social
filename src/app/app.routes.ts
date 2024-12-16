import { Routes } from '@angular/router';
import {INSTRAGRAM_ROUTES} from "./pages/instagram/instragram.router";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.routes').then(r => r.PAGES_ROUTES)
  },
  {
    path: 'tiktok',
    loadChildren: () => import('./pages/tiktok/tiktok.routes').then(r => r.TIKTOK_ROUTES)
  },
  {
    path: 'instagram',
    loadChildren: () => import('./pages/instagram/instragram.router').then(r => r.INSTRAGRAM_ROUTES)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
