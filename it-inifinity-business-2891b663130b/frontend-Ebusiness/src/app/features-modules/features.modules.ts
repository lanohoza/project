import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material-module';
import {PaymentPageModule} from './payment.page/payment.page.module'
import {DeliveryPageModule} from './delivery.page/delivery.page.module'
import { OrderPageModule } from './order.page/order.page.module';
@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    PaymentPageModule,
    DeliveryPageModule,
    OrderPageModule
   
  ],
  exports:[
    MaterialModule,
    PaymentPageModule,
    DeliveryPageModule,
    OrderPageModule
    
  ],
  providers: [],
})
export class FeaturesModule { }
