import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from 'src/app/shared/menubar/menubar/menubar.component';

@NgModule({
  declarations: [
    MenubarComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
