import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Player } from '../models';
import { PlayerActions } from '../actions';

export interface PlayersState {
    ids: string[];
    entities: { [id: string]: Player};
};

const initialState: PlayersState = {
    ids: [],
    entities: {}
};

export default function(state = initialState, action: Action): PlayersState {
    switch(action.type) {
        case PlayerActions.LOAD_PLAYER: {
            const player: Player = action.payload;

            if (state.ids.includes(player.id)) {
                return state;
            }

            return {
                ids: [ ...state.ids, player.id],
                entities: Object.assign({}, state.entities, {
                    [player.id]: player
                })
            };
        }

        default:
            return state;
    }
}