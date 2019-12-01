import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { Answer } from 'src/app/_models';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getByPublicationId(publicationId: string) {
    return this.http.get<Answer[]>(`${this.config.apiURL}/answers/${publicationId}`);
  }
}
