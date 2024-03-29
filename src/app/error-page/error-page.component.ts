import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  standalone: true
})
export class ErrorPageComponent {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/', 'main', 'home']);
  }
}