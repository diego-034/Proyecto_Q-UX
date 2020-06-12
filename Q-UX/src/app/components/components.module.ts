import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductComponent,
    ClientComponent  ],
  exports: [ // esto es para exportar los componentes que aquí tenemos
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    ProductComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
