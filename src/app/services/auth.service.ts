import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { stringLength } from '@firebase/util';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rememberMe: string = "session";

  constructor(private afAuth: AngularFireAuth) { }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  login(email: string, password: string) {
    return this.afAuth.setPersistence(this.rememberMe).then(() => {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    });
  }

  logout() {
    return this.afAuth.signOut();
  }

  setRememberMe() {
    this.rememberMe = firebase.auth.Auth.Persistence.LOCAL
  }

  signup(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signinwithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
