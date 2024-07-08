import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MobileSidebarComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MobileSidebarComponent
  ]
})
export class SharedModule { }
