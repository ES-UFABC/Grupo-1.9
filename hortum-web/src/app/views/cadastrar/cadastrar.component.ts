import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  hide = true;
  user: User = {
    name: '',
    email: '',
    password: '',
    phone: null,
    location: ''
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    // this.loginService.showMessage('As senhas não conferem');
    this.loginService.newAccount(this.user).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }
}
