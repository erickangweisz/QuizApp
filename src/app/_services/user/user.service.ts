import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { User } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.currentUserSubject =
      new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getAll() {
    return this.http.get<User[]>(`${this.config.apiURL}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.config.apiURL}/user/${id}`);
  }

  update(user: User) {
    return this.http.put(`${this.config.apiURL}/user`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.config.apiURL}/users/${id}`);
  }
}
