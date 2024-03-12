import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  events: string[] = [];
  opened: boolean = true;
 
  toggle(){
    this.opened = !this.opened;
  }
}
