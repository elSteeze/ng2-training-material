import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: NameComponent }
];

export const APP_ROUTER_MODULE =
  RouterModule.forRoot(routes,
    { useHash: true });

export const ROUTED_COMPONENTS = [
  HomeComponent,
  NameComponent
];
