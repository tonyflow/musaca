import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup
  public email: string | undefined = undefined;
  public password: string | undefined = undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }

  login() {
    this.loginForm.reset()
    this.router.navigate(["home"]).then((result) => {
      console.log("Login Successful");
    })
  }

  signUp() {
    this.router.navigate(["signup"]).then((result) => {
      console.log("Redirect to the sign-up page");
    })
  }
}
