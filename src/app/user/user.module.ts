import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserRoutingModule } from './user-routing.module';
import { RegisterContainerComponent } from './register-container.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UserRoutingModule
  ],
  declarations: [RegisterContainerComponent, RegisterComponent]
})
export class UserModule { }
