import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
    
    return {lowerCase: true}
    return null;
}