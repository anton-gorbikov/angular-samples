import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tree',
  template: `
    <div *ngIf="data | async as data">{{data.title}}: {{data.value}}</div>
    <ng-container *ngIf="data | async as data">
      <ng-container *ngIf="data.items">
        <app-tree *ngFor="let item of data.items; index as i" [data]="getSubtree(i)"></app-tree>
      </ng-container>
    </ng-container>
  `
})
export class TreeComponent {
  @Input() data: Observable<any>;

  getSubtree(i: number) {
    return this.data.pipe(
      map((data) => data.items[i])
    );
  }
}
