/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './features-modules/order.page/order.page.component';
import { PaymentPageComponent } from './features-modules/payment.page/payment.page.component';
import {DeliveryPageComponent}from './features-modules/delivery.page/delivery.page.component';
const routes: Routes = [
 
  {
    path: '',
    component: OrderPageComponent,
  },
  {
    path: 'delivery',
    component: DeliveryPageComponent,
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
