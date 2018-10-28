import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes:Routes = [
  {
    path:'',
    component:AppShellComponent,
    children:[
      {path:'', component: MainContentComponent}
    ]
  },
  {
    path:'**', redirectTo: ''
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolbarComponent, SidenavComponent, MainContentComponent, AppShellComponent]
})
export class MainUiModule { }
