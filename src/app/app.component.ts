import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddPlayer, RemovePlayer } from './actions/player.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  players$: Observable<any>;
  msg: string;

  constructor(private store: Store) {
    this.players$ = this.store.select((state) => state.players.players)
  }

  addPlayer(name, age) {
    this.store
      .dispatch(new AddPlayer({ name: name, age: age }))
      .subscribe(() => this.msg = name + " added ");
  }

  deletePlayer(name) {
    this.store
      .dispatch(new RemovePlayer(name))
      .subscribe(() => this.msg = name + " added ");
  }
}
