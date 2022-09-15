import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
    { path:'', component: SignInComponent },
    { 
        path:'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver,
        }
     },
    { path:'p/add', component: PhotoFormComponent },
    { path:'**', component: NotFoundComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule] 

})

export class AppRoutingModule {

}