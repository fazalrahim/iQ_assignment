import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogObjEndPoint = 'blogObj';

  constructor(private httpClient: HttpClient) { } // Http Client is used to call api under HTTP protocols, this service inject into the constructor, example of Dependency injection 

  getBlogInfo(): Observable<any> {
    const url = environment.liveApiUrl; // this is the global variable inside the environment.ts document. In which we can set liveAPI URL
    return this.httpClient.get(`${url}/${this.blogObjEndPoint}`)
      .pipe(map((data: any) => data));
  }
}
