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
  subDetails: string = 'Home Description here';
  
  infoObj: InfoModel[] = [];
  destroyRef = inject(DestroyRef)

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
       Just add it to the pipe without passing anything, and it will automatically pick up the right
        OnDestroy for the current context — using injectable OnDestroy.

        Note: This takeUntilDestroyed is working only v16 or latest
        For more details: https://angular.io/api/core/rxjs-interop/takeUntilDestroyed

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

  /**
    Now no need to use ngDestory
    Note: This takeUntilDestroyed is working only v16 or latest

    For more details: https://angular.io/api/core/rxjs-interop/takeUntilDestroyed
   */

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

}
