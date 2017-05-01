import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponent } from './email';
import { FolderItemComponent } from './folder-item';
import { FolderListComponent } from './folder-list';
import { MessageBodyComponent } from './message-body';
import { MessageDisplayComponent } from './message-display';
import { MessageHeaderComponent } from './message-header';

const routes: Routes = [
  { path: '', component: EmailComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EmailComponent,
    FolderItemComponent,
    FolderListComponent,
    MessageBodyComponent,
    MessageDisplayComponent,
    MessageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailModule { }
