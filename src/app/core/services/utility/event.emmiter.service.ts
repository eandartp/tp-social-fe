import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventEmiterService {

  dataStr = new EventEmitter();

  constructor() { }

  emit(data: string) {
    this.dataStr.emit(data);
  }
}
