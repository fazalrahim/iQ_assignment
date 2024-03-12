import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root' // In this type, it'll create an object which is used within the application.
})
export class HomeService {
  infoObjEndPoint = 'infoObj';

  constructor(private httpClient: HttpClient) { }

  getInfoCards(): Observable<any> {
    const url = environment.liveApiUrl;
    return this.httpClient.get(`${url}/${this.infoObjEndPoint}`)
      .pipe(map((data: any) => data));
  }
}
