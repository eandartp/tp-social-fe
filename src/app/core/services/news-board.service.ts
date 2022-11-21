import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const url = 'api/news/'


@Injectable({
  providedIn: 'root'
})
export class NewsBoardService {

  constructor(private http: HttpClient) {}

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
