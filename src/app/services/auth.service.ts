import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .map(response => {
                let result = response.json();
                if(result && result.token) {
                  localStorage.setItem('token', result.token);
                  return true;
                } else {
                  return false;
                }
            })
  }

  logout() { 

    localStorage.removeItem('token');
    
  }

  isLoggedIn() { 

    return tokenNotExpired('token');
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');

    // if(!token) return false;

    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);
    // console.log("Expiration", expirationDate);
    // console.log("IsExpired", isExpired);

    // return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');

    if(!token) return null;

    let jwt = new JwtHelper();
    return jwt.decodeToken(localStorage.getItem('token'));
  }

}
