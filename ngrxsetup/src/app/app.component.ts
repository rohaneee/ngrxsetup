import { Component } from '@angular/core';

import { TestAction } from './store/actions/test.action';
import { Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<any>){}
  title = 'setupNgrx';

  testAction(event: any){
    this.store.dispatch(new TestAction());
  }
}
