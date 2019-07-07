import { State, Action, StateContext } from '@ngxs/store';
import { ZoneAction } from './zone.actions';

export class ZoneStateModel {
  public items: string[];
}

@State<ZoneStateModel>({
  name: 'zone',
  defaults: {
    items: []
  }
})
export class ZoneState {
  @Action(ZoneAction)
  add(ctx: StateContext<ZoneStateModel>, action: ZoneAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
