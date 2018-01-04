import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarInfoPage } from './registrar-info';

@NgModule({
  declarations: [
    RegistrarInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarInfoPage),
  ],
})
export class RegistrarInfoPageModule {}
