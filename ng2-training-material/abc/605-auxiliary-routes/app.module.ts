import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {PageComponent} from './page';
import {NameComponent, HomeComponent, BlueBoxComponent, ChatComponent, TaskComponent} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'hello/:name', component: NameComponent },
  { path: 'blue', component: BlueBoxComponent },

  { path: 'chat', component: ChatComponent, outlet: 'side' },
  { path: 'task', component: TaskComponent, outlet: 'side' }
];

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NameComponent,
    BlueBoxComponent,
    ChatComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
