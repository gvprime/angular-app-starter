import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from "@angular/material";

import { RegisterContainerComponent } from './register-container.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    UserRoutingModule
  ],
  declarations: [RegisterContainerComponent, RegisterComponent]
})
export class UserModule { }
