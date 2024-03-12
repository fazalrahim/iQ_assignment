import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  @Input() heading !: string;
  @Input() subDetails !: string;
  @Input() tabularIcons: boolean = false;

}
