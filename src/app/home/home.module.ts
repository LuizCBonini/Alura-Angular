import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { VMesssageModule } from '../shared/components/card/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignupComponent,
        HomeComponent
    ],
    imports: [ 
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VMesssageModule,
        RouterModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}