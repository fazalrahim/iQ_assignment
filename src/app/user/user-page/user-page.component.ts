import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { UserModel } from '@app/user/shared/user.model';
import { UserService } from '../shared/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  heading: string = 'User';
  subDetails: string = 'User Page Description';
  tabularIcons: boolean = true;
  isGrid: boolean = true;
  userObj: UserModel[] = [];
  destroyRef = inject(DestroyRef);

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.bindData();
  }

  gridToggle($event: boolean) {
    this.isGrid = $event;
  }

  bindData() {
    /**
           takeUntilDestroyed operator, which is super convenient
          This helps to prevent memory leaks and ensures that resources are released properly.
    
         */
    this.userService.getUserData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data: any) => {
          this.userObj = data;
        },
        error: (error) => {
          console.log('catch error', error);
        }
      });
  }

}
