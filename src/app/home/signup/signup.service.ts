import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NewUser } from './newUser';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable()

export class SignupService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {
        return this.http.get(API + '/user/exists/' + userName);
    }

    signup(newUser: NewUser) {
        return this.http.post(API + '/user/signup', newUser)
    }
}