import { AbstractControl } from '@angular/forms';
import { Injectable } from "@angular/core";
import { SignupService } from "./signup.service";

import { debounceTime, map, switchMap, first } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

    constructor (private signUpService: SignupService) {}

    checkUserNameTaken() {
        
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signUpService.checkUserNameTaken(userName);
                }))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
                .pipe(first());
        }
    }
}