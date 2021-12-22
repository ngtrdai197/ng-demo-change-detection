import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'demo-change-detection-a-com',
  templateUrl: './a-com.component.html',
  styles: []
})
export class AComComponent implements OnInit {
  private stream = new BehaviorSubject<IUser>({ name: 'A' });
  public user: Observable<IUser> = this.stream.asObservable();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeName(): void {
    this.stream.next({ name: 'B' });
  }

}
