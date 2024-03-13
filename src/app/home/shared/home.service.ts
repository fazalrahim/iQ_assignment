import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';
import { InfoModel } from '@app/home/shared/home.model';

@Injectable({
  providedIn: 'root' // In this type, it'll create an object which is used within the application.
})
export class HomeService {
  infoObjEndPoint = 'infoObj';

  constructor(private httpClient: HttpClient) { } 

  getInfoCards(): Observable<InfoModel> {
    const url = environment.liveApiUrl; // this is the global variable inside the environment.ts document. In which we can set liveAPI URL
    return this.httpClient.get(`${url}/${this.infoObjEndPoint}`)
      .pipe(map((data: any) => data));
  }
}
