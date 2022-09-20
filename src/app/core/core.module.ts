import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent]
})
export class CoreModule {}