import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Angular App";

  archives = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3}
  ]
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
