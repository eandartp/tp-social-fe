import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getById() {
    return this.http.get(`${url}`);
  }

  getAll() {
    return this.http.get(`${url}`);
  }

  getByAttr(category: string) {
    return this.http.get(`${url}/${category}`)
  }

}
