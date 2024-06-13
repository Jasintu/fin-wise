import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  validateEmail(control: any) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (emailPattern.test(control.value) && control.value.includes('.com')) {
      return null;
    } else {
      return { 'invalidEmail': true };
    }
  }

  validatePassword(control: any) {
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    
    if (passwordPattern.test(control.value)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  mostrarDiv1: boolean = true;
  mostrarDiv2: boolean = false;

  alternarDivs() {
    this.mostrarDiv1 = !this.mostrarDiv1;
    this.mostrarDiv2 = !this.mostrarDiv2;
  }
  
  beforeLeft: number = 0;
  FormLeft: string = '0';
  
  change_rigth() {
    this.beforeLeft += 50;
    this.FormLeft = '-420px';
  }
  change_left() {
    this.beforeLeft += -50;
    this.FormLeft = '0px';
  }
  
  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, this.validateEmail]),
      password: new FormControl("", [Validators.required]),
    })
  }
  
  ngOnInit(): void {
    this.saveItem()
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      label.addEventListener('click', this.disableClickEvent);
    });
  }

  disableClickEvent(event: Event): void {
    event.preventDefault();
  }

  submitRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  
  submitLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
  saveItem(): void {
    localStorage.setItem('key', 'value');
  }
  
}
