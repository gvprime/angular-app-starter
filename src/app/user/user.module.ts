import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterContainerComponent } from './register-container.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    UserRoutingModule
  ],
  declarations: [RegisterContainerComponent, RegisterComponent]
})
export class UserModule { }
