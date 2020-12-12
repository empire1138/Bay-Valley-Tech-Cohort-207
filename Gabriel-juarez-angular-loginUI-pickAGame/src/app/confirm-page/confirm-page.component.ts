import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {
  userEntires: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userEntires = params;
    });
   }

  ngOnInit(): void {
  }

}
