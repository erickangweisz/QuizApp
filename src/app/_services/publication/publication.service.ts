import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { Publication } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  save(publication: Publication) {
    return this.http.post(`${this.config.apiURL}/publication`, publication);
  }

  getAll() {
    return this.http.get<Publication[]>(`${this.config.apiURL}/publications`);
  }

  getById(id: string) {
    return this.http.get<Publication>(`${this.config.apiURL}/publication/${id}`);
  }

  update(publication: Publication) {
    return this.http.put(`${this.config.apiURL}/publication`, publication);
  }

  delete(id: string) {
    return this.http.delete(`${this.config.apiURL}/publication/${id}`);
  }
}
