import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Screen2Service } from '../service/screen2.service';
@Component({
  selector: 'app-page2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
  dataDialog;
  dataMapdetail;
  constructor(dataService : Screen2Service) {
      this.dataDialog = dataService.getDataMap();
      // console.log(this.dataDialog);
   }
  formGroup : FormGroup;
  dateModel: Date = new Date();

  stringDateModel: string = new Date().toString();
  ngOnInit() {
    this.formGroup = new FormGroup({
      activeEndDate:  new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]})
    }, { updateOn: 'change' });
  }
}
export const DateTimeValidator = (fc: FormControl) => {
  const date = new Date(fc.value);
  const isValid = !isNaN(date.valueOf());
  return isValid ? null : {
      isValid: {
          valid: false
      }
  };
};
