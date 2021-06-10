import { Component, OnInit } from '@angular/core';
import { User2 } from '../model/user'

@Component({
  selector: 'app-twoway2',
  templateUrl: './twoway2.component.html',
  styleUrls: ['./twoway2.component.css']
})
export class Twoway2Component implements OnInit {
  userInfo: User2 = new User2('', null, '', '', false);
  cities = [ "kolkata", "delhi", "mumbai" ];
  constructor() { }

  ngOnInit(): void {
  }
}