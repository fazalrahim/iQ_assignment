import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  heading: string = 'Home';
  subdetails: string = 'Home Description';
  tabularIcons: boolean = true;

  infoObj: any = [
    {
      icon: 'shopping_cart',
      title: '345',
      subtitle: 'Total Orders'
    },
    {
      icon: 'wallet',
      title: '345',
      subtitle: 'Total Expense'
    }
  ]
}
