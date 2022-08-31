import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user => {
      this.user = user;
    })
  }

  logout(){
    this.authService.logout();
    this.toastr.info("Now you are logged out");
    this.router.navigate(["/login"]);
  }

}
