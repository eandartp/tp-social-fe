import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const url = 'notify';

@Injectable({
  providedIn: 'root'
})
export class NotifyEventService {

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
