import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPageComponent } from './delivery.page.component';
import { DeliveryHomeComponent } from './composents/delivery-home/delivery-home.component';
import { DeliveryPointComponent } from './composents/delivery-point/delivery-point.component';
import { DeliveryPointSellerComponent } from './composents/delivery-point-seller/delivery-point-seller.component';



@NgModule({
  declarations: [
    DeliveryPageComponent,
    DeliveryHomeComponent,
    DeliveryPointComponent,
    DeliveryPointSellerComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports:[
    DeliveryPageComponent,
    DeliveryHomeComponent,
  ],
  providers:[],
})
export class DeliveryPageModule { }
