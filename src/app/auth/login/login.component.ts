import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginUser } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: 'demo@miniasp.com',
    password: ''
  };

  constructor(private router: Router, private authSerice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authSerice.login(this.user).subscribe(
      {
        next: (user: LoginUser) => {
          localStorage.setItem('userToken', user.user.token);
          this.router.navigateByUrl('/');
        },
        error: () => {
          alert('登入失敗');
        }
      }
    )
  }

}
