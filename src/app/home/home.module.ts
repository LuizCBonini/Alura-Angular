import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { VMesssageModule } from '../shared/components/card/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        VMesssageModule,
        RouterModule
    ]
})
export class HomeModule {}