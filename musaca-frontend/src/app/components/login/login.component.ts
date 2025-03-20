import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup
  public email: string | undefined = undefined;
  public password: string | undefined = undefined;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }

  login() {
    alert('Login Successful');
    this.loginForm.reset()
    this.router.navigate(["home"]).then((result) => {
      alert("Login Successful");
    })
  }

  signUp() {
    this.router.navigate(["signup"]).then((result) => {
      alert("Redirect to the sign-up page");
    })
  }
}
