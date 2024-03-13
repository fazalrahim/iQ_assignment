import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { InfoModel } from '@app/home/shared/home.model';
import { HomeService } from '../shared/home.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heading: string = 'Home';
  subDetails: string = 'Home Page Description';

  infoObj: InfoModel[] = [];
  destroyRef = inject(DestroyRef);

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.bindData();
  }

  bindData() {
    /**
      takeUntilDestroyed operator, which is super convenient
      This helps to prevent memory leaks and ensures that resources are released properly.
     */
    this.homeService.getInfoCards()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data: any) => {
          this.infoObj = data;
        },
        error: (error) => {
          console.log('catch error', error);
        }
      });
  }

}
