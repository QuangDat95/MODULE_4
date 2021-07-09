import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-v-data-driven',
  templateUrl: './v-data-driven.component.html',
  //styleUrls: ['./v-data-driven.component.css']
})
export class VDataDrivenComponent implements OnInit {
  formProfile!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formProfile = new FormGroup({
      'username': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
      ]),
      'phone': new FormGroup({
        'phone': new FormControl(),
        'mobile': new FormControl()
      })
    })
  }
  onSubmitForm(){
    console.log(this.formProfile.value);
  }
}
