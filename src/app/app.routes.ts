import { Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/core/theme/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'home',
        loadChildren:()=> import('../app/modules/home/home.module').then((m)=>m.HomeModule)
      }
    ]
  }
];
