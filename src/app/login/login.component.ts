import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { config } from '../config/config';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}
}
