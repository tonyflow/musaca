import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private http: HttpClient, private router: Router) {
  }

  onLogout() {
    this.router.navigate(["login"]).then((result) => {
      console.log("Login Successful");
    })
  }

}
