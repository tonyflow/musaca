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
  public email: string | undefined;
  public password: string | undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    // this.email = "an_email@gmail.com";
    // this.password = "an_password@gmail.com";
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  onSignup() {
    this.signUpForm.reset();
    this.router.navigate(["login"]).then((result: boolean) => {
      alert('SIGN-IN SUCCESSFUL');
    });
  }
}


