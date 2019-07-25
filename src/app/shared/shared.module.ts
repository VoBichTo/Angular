import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm-infor/confirm.component';
import { MenubarComponent } from 'src/app/shared/menubar/menubar/menubar.component';

@NgModule({
  declarations: [
    ConfirmComponent,
    MenubarComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
