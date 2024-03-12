import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';
import { UserModel } from '@app/user/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userObjEndPoint = 'userObj';

  constructor(private httpClient: HttpClient) { } // Http Client is used to call api under HTTP protocols, this service inject into the constructor, example of Dependency injection 

  getUserData(): Observable<UserModel> {
    const url = environment.liveApiUrl; // this is the global variable inside the environment.ts document. In which we can set liveAPI URL
    return this.httpClient.get(`${url}/${this.userObjEndPoint}`)
      .pipe(map((data: any) => data));
  }
}
