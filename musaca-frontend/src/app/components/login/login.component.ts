import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {

    const {username, password} = this.loginForm.value;

    console.log(`Username and password: ${password} and ${username}`);

    this.http.post('http://localhost:8000/users/login', {username: username, password: password}).subscribe({
        next: (authenticated) => {
          if (authenticated) {
            this.router.navigate(["home"]).then((result) => {
              console.log("Redirect to the sign-up page");
            })
          } else {
            this.loginForm.reset()
            alert('User could not be authenticated')
            this.router.navigate(["login"]).then((result) => {
              console.log("Redirect to the sign-up page");
            })
          }
        },
        error: (error) => {
          console.error(error);
          alert("User could not be authenticated")
        }
      });
  }

  signUp() {
    this.router.navigate(["signup"]).then((result) => {
      console.log("Redirect to the sign-up page");
    })
  }
}
