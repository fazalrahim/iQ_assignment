import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { BlogModel } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  heading: string = 'Blogs';
  subDetails: string = 'Blog Page Description';
  headingHome: string = 'Recent Blogs';
  blogObj: BlogModel[] = [];
  destroyRef = inject(DestroyRef);
  @Input() isHome: boolean = false;

  constructor(
    private blogService: BlogService
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
    this.blogService.getBlogInfo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data: any) => {
          this.blogObj = data;
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
