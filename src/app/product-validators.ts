import { AbstractControl, ValidationErrors,Validators, AsyncValidatorFn  } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

export class ProductValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static isUniqueByObservable(c: AbstractControl): Observable<ValidationErrors | null> {
        console.log(c.value);
        return (c.value as string) === 'P123' ?  Observable.of({ 'isUnique': false }) : Observable.of(null);
    }

    static isUniqueByPromise(c: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if ((<string>c.value) === 'P123') {
                resolve({ 'isUnique': false });
            }
            else {
                resolve(null);
            }
        });
    }
}
