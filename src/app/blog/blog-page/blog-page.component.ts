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
  isShow: boolean = false;

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

  toggleDesc(idx: number) {
    const ele: any = document.getElementById('desc' + idx);
    ele.classList.add('show');
    const eleBtn: any = document.getElementById('btn' + idx);
    eleBtn.style.display = 'none';
  }

}
