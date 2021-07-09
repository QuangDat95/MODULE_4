import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-v-data-driven-builder',
  templateUrl: './v-data-driven-builder.component.html',
  styleUrls: ['./v-data-driven-builder.component.css']
})
export class VDataDrivenBuilderComponent implements OnInit {
  formProfile!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formProfile = this._formBuilder.group({
      'username': ['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      'email': ['',[
        Validators.required,
        Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
      ]],
      'phone': this._formBuilder.group({
        'phone': [],
        'mobile': []
      })
    });
  }
  onSubmitForm(){
    console.log(this.formProfile.value);
  }
}
