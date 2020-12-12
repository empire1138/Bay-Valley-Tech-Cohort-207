import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public readonly userChoice: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.userChoice = this.fb.group({
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthday: [null, [Validators.required, Validators.min(1900), Validators.max(2000)]],
      videoGame: [null, [Validators.required]]

    });
  }

  ngOnInit(): void{

    const currentYear = new Date().getFullYear;





}

  handleSubmitClick(): any {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        email: this.userChoice.value.email,
        firstName: this.userChoice.value.firstName,
        lastName: this.userChoice.value.lastName,
        birthday: this.userChoice.value.birthday,
        videoGame: this.userChoice.value.videoGame
      }
    };
    this.router.navigate(['confirmPage'], navigationExtras);
 }


}
