import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  public isDisplay: boolean = false;
  constructor(private _fb: FormBuilder) {}
  public myForm = this._fb.group({
    userName: ['', Validators.required],
    fatherName: ['', Validators.required],
    address: ['', Validators.required],
  });
  ngOnInit() {}

  onSubmit() {
    this.isDisplay = true;
  }
  onReset() {
    this.isDisplay = false;
    this.myForm.reset();
  }
}
