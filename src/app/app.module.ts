import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import firebase from 'firebase/app';
import 'firebase/auth';
import { HomeComponent } from "./home/home.component";
import {CapitalizePipe} from './capitalize.pipe'
import { LoginComponent } from "./login/login.component";
import { AuthService } from './auth.service';
import { MenuComponent } from "./menu/menu.component";
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let firebaseConfig = {
    apiKey: "AIzaSyCcQ0bCgHkipGGfxxBuSJ9Pvc42lXxWgRo",
    authDomain: "testangular-a8ff8.firebaseapp.com",
    projectId: "testangular-a8ff8",
    storageBucket: "testangular-a8ff8.appspot.com",
    messagingSenderId: "374315450281",
    appId: "1:374315450281:web:21760a1f30abc627840eb8",
    measurementId: "G-MGSF2PCQK0"
  };

firebase.initializeApp(firebaseConfig);

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        HomeComponent,
        CapitalizePipe,
        LoginComponent,
        MenuComponent,
        MyblogsComponent,
        ProfileComponent,
        CreateComponent,
        PostComponent,
        ViewComponent,
        CommentsComponent,
        EditProfileComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularEditorModule      
    ]
})
export class AppModule { }
