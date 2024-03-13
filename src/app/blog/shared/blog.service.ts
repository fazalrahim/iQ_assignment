import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';
import { BlogModel } from '@app/blog/shared/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogObjEndPoint = 'blogObj';

  constructor(private httpClient: HttpClient) { } 

  getBlogInfo(): Observable<BlogModel> {
    const url = environment.liveApiUrl; // this is the global variable inside the environment.ts document. In which we can set liveAPI URL
    return this.httpClient.get(`${url}/${this.blogObjEndPoint}`)
      .pipe(map((data: any) => data));
  }
}
