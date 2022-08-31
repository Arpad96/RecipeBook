import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user: any = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user =>
      {
        this.user = user;
      })
  }

}
