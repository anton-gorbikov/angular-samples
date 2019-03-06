import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<app-tree [data]="data"></app-tree>'
})
export class AppComponent {
  data = of({
    title: 'aaa',
    value: 2,
    items: [
      {
        title: 'bbb',
        value: 4
      }, {
        title: 'ccc',
        value: 6
      }, {
        title: 'ddd',
        value: 8
      }
    ]
  }).pipe(
    map((data) => {
      console.warn('Do some lightweight operation');

      return data;
    })
  );
}
