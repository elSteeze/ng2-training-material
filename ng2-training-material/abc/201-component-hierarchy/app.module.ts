import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';

const appRoutes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'help', loadChildren: './help/help.module#HelpModule' },
  { path: 'hello', loadChildren: './email/email.module#EmailModule' }
];

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
