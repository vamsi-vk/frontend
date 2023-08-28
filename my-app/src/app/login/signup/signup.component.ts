import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide1: boolean = false;
  hide2:boolean=false;


  ngOnInit() {}

  private email:string =''
  private  password:string =''
  signupForm: FormGroup;
  emailControl: AbstractControl | null;
  passwordControl: AbstractControl | null;
  rpasswordControl: AbstractControl | null;
  constructor(private fb: FormBuilder,
  ) {
    
    this.signupForm = this.fb.group({
        email: ['', 
        [
          Validators.required,

        ]
      ],
      password: ['', 
        [
        Validators.required,
        Validators.minLength(8),
        this.passwordComplexityValidator
        ]
      ],
      rpassword: ['',
    Validators.required,
  this.passwordMatchValidator],
    });

    this.emailControl = this.signupForm.get('email');
    this.passwordControl = this.signupForm.get('password');
    this.rpasswordControl = this.signupForm.get('rpassword');

    this.signupForm.setValidators(this.passwordMatchValidator);
  }
  passwordComplexityValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
  
    // Define the regular expression to enforce password complexity
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/@_])[A-Za-z\d/@_]{8,}$/    ;
  
    if (!regex.test(value)) {
      return { passwordComplexity: true };
    }
  
    return null;
  };
  

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const rpassword = control.get('rpassword');

    if (password && rpassword && password.value !== rpassword.value) {
      rpassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      rpassword?.setErrors(null);
      return null;
    }
  };

  onLogin() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log(this.signupForm.value);
  }
}
