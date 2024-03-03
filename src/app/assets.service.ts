import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get('/assets/cards.json');
  }

  getSkills(): Observable<any> {
    return this.http.get('/assets/skills.json');
  }

  getQualifications(): Observable<any> {
    return this.http.get('/assets/qualifications.json');
  }
}