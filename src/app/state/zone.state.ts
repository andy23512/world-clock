import { State, Action, StateContext } from '@ngxs/store';
import { AddZone } from './zone.actions';

export interface Zone {
  name: string;
}

export type ZoneStateModel = Zone[];

@State<ZoneStateModel>({
  name: 'zone',
  defaults: [{ name: 'Local' }, { name: 'Europe/Stockholm' }]
})
export class ZoneState {
  @Action(AddZone)
  AddZone(ctx: StateContext<ZoneStateModel>, { name }: AddZone) {
    const zones = ctx.getState();
    ctx.setState([...zones, { name }]);
  }
}
