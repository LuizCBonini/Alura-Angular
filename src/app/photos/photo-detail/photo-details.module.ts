import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-loged.module';
import { PhotoOwnerOnlyDirective } from './photo-comments/photo-owner-only/photo-owner-only.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponents } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponents,
        PhotoOwnerOnlyDirective
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponents,
    ],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowIfLoggedModule
    ]
})
export class PhotoDetailsModule {}