import { State, Selector, Action, StateContext } from '@ngxs/store';

import { Player } from '../models/player.model';
import { AddPlayer, RemovePlayer } from './../actions/player.actions';

export class PlayerStateModel {
  players: Player[]
}

@State<PlayerStateModel>({
  name: 'players',
  defaults: {
    players: []
  }
})

export class PlayerState {

  @Selector()
  static getCars(state: PlayerStateModel) {
    return state.players;
  }

  @Action(AddPlayer)
  add(
    { getState, patchState }: StateContext<PlayerStateModel>,
    { payload }: AddPlayer
  ) {
    //debugger
    const state = getState();
    patchState({
      players: [...state.players, payload]
    })
  }


  @Action(RemovePlayer)
  remove(
    { getState, patchState }: StateContext<PlayerStateModel>,
    { payload }: RemovePlayer
  ) {
    // debugger
    patchState({
      players: getState().players.filter(a => a.name !== payload)
    })
  }
}
































