import { Player } from './../models/player.model';


export class AddPlayer {
  static readonly type = "[Team] AddPlayer";
  constructor(public payload: Player) { }
}

export class RemovePlayer {
  static readonly type = "[Team] RemovePlayer";
  constructor(public payload: string) { }
}