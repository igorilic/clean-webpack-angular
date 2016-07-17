import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Player } from '../models';
import { PlayerActions } from '../actions';

export interface TeamsState {
    loaded: boolean;
    loading: boolean;
    ids: string[];
};

const initialState: TeamsState = {
    loaded: false,
    loading: false,
    ids: []
};

export default function(state = initialState, action: Action): TeamsState {
    switch (action.type) {
        case PlayerActions.LOAD_TEAM: {
            return Object.assign({}, state, {loading: true});
        }
        case PlayerActions.LOAD_TEAM_SUCCESS: {
            const players: Player[] = action.payload;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                ids: players.map(player => player.id)
            });
        }

        case PlayerActions.ADD_TO_TEAM: {
            const player: Player = action.payload;
            if (state.ids.includes(player.id)) {
                return state;
            }

            return Object.assign({}, state, {
                ids: [ ...state.ids, player.id ]
            });
        }
        case PlayerActions.REMOVE_FROM_TEAM: {
            const player: Player = action.payload;

            if (!state.ids.includes(player.id)) {
                return state;
            }

            return Object.assign({}, state, {
                loading: true,
                loaded: true,
                ids: state.ids.filter(id => id !== player.id)
            });
        }
        // case PlayerActions.REMOVE_FROM_TEAM_SUCCESS: {
        //     const player: Player = action.payload;

        //     if (state.ids) {
                
        //     }
        // }
        default: 
            return state;
    }

    

}

export function getLoaded() {
        return (state$: Observable<TeamsState>) => state$
            .select(s => s.loaded);
    }
