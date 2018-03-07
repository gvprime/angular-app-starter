import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxPageComponent } from './box-page/box-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoxPageComponent],
  exports: [BoxPageComponent, CommonModule]
})
export class SharedModule { }
