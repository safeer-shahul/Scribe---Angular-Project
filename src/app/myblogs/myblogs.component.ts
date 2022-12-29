import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user: any = {};
  posts: any[] = [];
  constructor() { 
    this.user = firebase.auth().currentUser;
    console.log(this.user)
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(){
    firebase.firestore().collection("posts")
    .orderBy("created", "desc")
    .limit(100)
    .get().then((querySnapshot) => {

      console.log(querySnapshot.docs);
      this.posts = querySnapshot.docs;

    }).catch((err) => {
      console.log(err);
    })
  }

  onPostCreated(){
    this.posts = [];
    this.getPosts();
  }

  onDelete(){
    this.posts = [];
    this.getPosts();
  }
}
