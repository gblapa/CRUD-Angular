import { Component, OnInit } from '@angular/core';
import { login } from '../login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }


  login: login = {
    email: '',
    user: '',
    senha: ''
  }
  ngOnInit(): void {
  }

}
