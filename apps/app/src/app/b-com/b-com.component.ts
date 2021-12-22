import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-change-detection-b-com',
  templateUrl: './b-com.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComComponent implements OnInit, DoCheck {

  @Input('user') user$!: Observable<IUser>;
  public user?: IUser | null;
  // private preUserName = '';

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (!this.user || this.user.name !== user.name) {
        this.user = user;
        console.log({ user: this.user });
        this.cdr.markForCheck();
      }
    });
  }

  ngDoCheck(): void {
    // if (this.preUserName !== this.user.name) {
    //   this.preUserName = this.user.name;
    //   this.cdr.markForCheck();
    // }
  }
}
