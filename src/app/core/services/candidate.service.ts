import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) {
  }

  getId() {
    return this.http.get(`${url}`);
  }

  getAll() {
    return this.http.get(`${url}`);
  }

  getByAttr(category: string) {
    return this.http.get(`${url}/${category}`)
  }
}
