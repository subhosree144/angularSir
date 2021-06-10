import { Component, OnInit } from '@angular/core';;
import { User } from '../model/user'

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  public userInfo: User = new User("Subhosree", 22);

  constructor() { }

  ngOnInit(): void {
  }
}
