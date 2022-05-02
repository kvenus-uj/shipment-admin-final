import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { languages } from '../../../shared/shared.data';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupName,
} from '@angular/forms';

import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { ValidationFormsService } from './validation-forms.service';

/** passwords must match - custom validator */
export const confirmPasswordValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value
    ? null
    : { passwordMismatch: true };
};

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [ValidationFormsService],
})

export class AddCustomerComponent implements OnInit {
  @ViewChild("fileupload", {static: false}) fileUpload: ElementRef;

  simpleForm: FormGroup;
  submitted = false;
  formErrors: any;

  genPass:string = "";

  file:File = null;
  fileName:any = "";

  confirmed:any = false;
  //budles
  bundles:any = [{sku:"",quentity:1}];

  carCheck:any = false;
  recCheck:any = false;
  shiCheck:any = false;
  invAddr:string = "";
  invPcode:string = "";
  invCity:string = "";
  invCountry:string = "";
  carAddr:string = "";
  carPcode:string = "";
  carCity:string = "";
  carCountry:string = "";
  recAddr:string = "";
  recPcode:string = "";
  recCity:string = "";
  recCountry:string = "";
  shiAddr:string = "";
  shiPcode:string = "";
  shiCity:string = "";
  shiCountry:string = "";

  constructor(private translate:TranslateService,private fb: FormBuilder, public vf: ValidationFormsService) {
    var lang:any = localStorage.getItem("lang");
    this.formErrors = this.vf.errorMessages;
    this.createForm();
    if(lang != null)
    {
      translate.use(lang);
    }
    else{
      translate.use(languages[0]);
    }
   }
   createForm() {
    this.simpleForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.usernameMin),
            Validators.pattern(this.vf.formRules.nonEmpty),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.passwordMin),
            Validators.pattern(this.vf.formRules.passwordPattern),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        accept: [false, [Validators.requiredTrue]],
      },
      { validator: confirmPasswordValidator }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.simpleForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }
  genPassword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 13; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    this.genPass = text;
  }
  carCheckChange() {
    var checked = this.carCheck;
    if(checked){
      this.carAddr = this.invAddr;
      this.carPcode = this.invPcode;
      this.carCity = this.invCity;
      this.carCountry = this.invCountry;
    }else{
      this.carAddr = "";
      this.carPcode = "";
      this.carCity = "";
      this.carCountry = "";
    }
  }
  recCheckChange() {
    var checked = this.recCheck;
    if(checked){
      this.recAddr = this.invAddr;
      this.recPcode = this.invPcode;
      this.recCity = this.invCity;
      this.recCountry = this.invCountry;
    }else{
      this.recAddr = "";
      this.recPcode = "";
      this.recCity = "";
      this.recCountry = "";
    }
  }
  shiCheckChange() {
    var checked = this.shiCheck;
    if(checked){
      this.shiAddr = this.invAddr;
      this.shiPcode = this.invPcode;
      this.shiCity = this.invCity;
      this.shiCountry = this.invCountry;
    }else{
      this.shiAddr = "";
      this.shiPcode = "";
      this.shiCity = "";
      this.shiCountry = "";
    }
  }
  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.simpleForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Use EventEmitter with form value
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }
  ngOnInit(): void {
  }
  addBundle()
  {
    var bundle={sku:"",quentity:1};
    this.bundles.push(bundle);
  }
  deleteBundle(i:number)
  {
    this.bundles.splice(i,1);
  }
  createBundle()
  {
    alert("create bundle");
  }
  public handleFileInput(files:any)
  {
    this.file= files[0];   
    this.fileName = this.file.name;  
  }
  confirmStep1()
  {
    this.confirmed = true;
  }
  confrimStep2()
  {
    
  }
}
