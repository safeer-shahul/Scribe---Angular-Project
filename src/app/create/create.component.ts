import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title: String = '';
  content: any;

  @Output('PostCreated') postCreated = new EventEmitter();

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    placeholder: 'Enter text here...',
    showToolbar:false,
    enableToolbar:true
  };
  constructor() { }

  ngOnInit(): void {
  }

  createPost(){

  
    firebase.firestore().collection('posts').add({
      title: this.title,
      content: this.content,
      owner: firebase.auth().currentUser?.uid,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      console.log(data);
      this.postCreated.emit();
    }).catch((error) => {
      console.log(error);
    })
  }
}
