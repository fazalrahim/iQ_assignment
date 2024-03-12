import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  @Input() heading !: string;
  @Input() subDetails !: string;
  @Input() tabularIcons: boolean = false;
  
  @Output() gridToggle = new EventEmitter<boolean>();
  isGrid: boolean = true;

  toggle(flag: boolean) {
    this.isGrid = flag;
    this.gridToggle.emit(this.isGrid);
  }
}
