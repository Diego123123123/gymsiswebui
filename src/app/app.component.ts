import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisweb-frontend';

  constructor(private router: Router) { }

  redirectSignUp() {
    this.router.navigate(['signup']);
  }
}
