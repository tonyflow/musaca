import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  public signUpForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    // this.email = "an_email@gmail.com";
    // this.password = "an_password@gmail.com";
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""],
      username: [""],
      name: [""],
      surname: [""],
    })
  }

  onSignup() {
    const {email, password, username, name, surname} = this.signUpForm.value;

    console.log(email, password, username, name, surname)
    this.http.post('http://localhost:8000/users', {
      email: email,
      password: password,
      username: username,
      name: name,
      surname: surname
    }).subscribe(
      {
        next: (response) => {
          this.router.navigate(["login"]).then((result: boolean) => {
            alert('User creation was successful. Try logging in');
          });
        },
        error: error => {
          console.error(error);
        }
      }
    );

  }

  backToLogin(): void {
    this.router.navigate(["login"]).then((result: boolean) => {
      console.log('Back to login...')
    });
  }
}


