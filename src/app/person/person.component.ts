import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input('person') person: any;
  @Output('personClicked') personClicked = new 
  EventEmitter();

  constructor() { }

  getTextSize(person: any){
    if(person.country == "IN"){
      return '24px';
    }else if(person.country =="US"){
      return '20px';
    }
    return '18px';
  }

  ngOnInit(): void {
    console.log(this.person)
  }

  onClick(){
    this.personClicked.emit();
  }

}
