import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pctLogoData } from '../image-data';

@Component({
  selector: 'app-pct-login',
  templateUrl: './pct-login.component.html',
  styleUrls: ['./pct-login.component.css'],
})
export class PctLoginComponent implements OnInit {
  // This is how you can add images in stackblitz: Put the data url into a separate code file, then make it a field on your component
  // then use the field in your html img tag, as you can see in pct-login
  pctlogo = pctLogoData;

  userName = '';
  constructor(private router: Router) {}

  ngOnInit() {
    // TODO check if there is a "current-user" stored in localStorage
    // if yes, navigate to the main menu using this.navigateToMainMenu()
  }

  loginHandler() {
    if (this.userName.length > 0) {
      localStorage['current-user'] = this.userName;
      this.router.navigate(['/']);
    } else {
      alert('Bitte gebe einen Namen ein!');
    }
  }
}
