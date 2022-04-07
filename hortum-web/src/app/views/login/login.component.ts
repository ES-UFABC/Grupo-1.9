import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = {
    email: '',
    password: ''
  }
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  getLogin(): void {
    this.loginService.getAccount().subscribe(account => {
      if(this.user.email == account[0].email){
        if(this.user.password == account[0].password){
          this.router.navigate(['/home']);
        }
        else{
          this.loginService.showMessage('Senha inválida');
        }
      }
      else {
        this.loginService.showMessage('Email inválido');
      }
     
    });
  }

}
