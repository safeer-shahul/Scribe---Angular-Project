import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  myForm: FormGroup;
  message: string = "";
  userError: any;
  
  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })
   }

   checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }

    }
  }
 
   onSubmit(signupForm :any){
    let email: string = signupForm.value.email;
    let password: string = signupForm.value.password;
    let firstName: string = signupForm.value.firstName;
    let lastName: string = signupForm.value.lastName;

    this.authService.signup(email, password, firstName, lastName)
    .then((user: any) => {

      firebase.firestore().collection('users').doc(user.uid).set({
        firstName: signupForm.value.firstName,
        lastName: signupForm.value.lastName,
        email: signupForm.value.email,
        photoURL: user.photoURL,
        interests:'',
        bio:'',
        hobbies:''
      }).then(() => {
        this.message = "You have been signed up successfully. please login."
      // this.userError = null;
        // this.router.navigate(['/myblogs'])
      })
      
      
    }).catch((error) => {
      console.log(error);
      this.userError = error;
      
    })
  }

  ngOnInit(): void {
  }

}
