import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {private dataSource = new BehaviorSubject({
  title: '',
  artist: '',
  label: '',
  genre: '',
  yearReleased: '',
  catalogNumber: '',
});

currentData = this.dataSource.asObservable();
  
constructor() { }

changeData(data: any) {
  this.dataSource.next(data);
  }
}