import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrdermodalComponent } from './order/ordermodal/ordermodal.component';

import { Routes, RouterModule } from '@angular/router';
import { OrderdeletemodalComponent } from './order/orderdeletemodal/orderdeletemodal.component';

const Route: Routes=[
 {path:'',component:LoginComponent} ,
  { path:'orders',component:OrderComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    OrdermodalComponent,
    OrderdeletemodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Route)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ OrdermodalComponent,  OrderdeletemodalComponent ]
})
export class AppModule { }
