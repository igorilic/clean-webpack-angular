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
        case PlayerActions.LOAD_TEAM_SUCCESS :{
            const players: Player[] = action.payload;
            const newPlayers = players
                    .filter(player => !state.entities[player.id]);             
            const newPlayerIds = newPlayers
                    .map(player => player.id);
            const newPlayerEntities = newPlayers
                    .reduce(
                        (entities: {[id: string]: Player}, player: Player) => {
                            return Object.assign(entities, {
                                [player.id]: player
                            });
                        }, {}
                    );
            return {
                ids: [ ...state.ids, ...newPlayerIds ],
                entities: Object.assign({}, state.entities, newPlayerEntities)
            };
        }

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

export function getPlayerEntities() {
    return (state$: Observable<PlayersState>) => state$
        .select(s => s.entities);
}

export function getPlayer(id:string) {
    return (state$: Observable<PlayersState>) => state$
        .select(s => s.entities[id]);
}

export function getPlayers(playerIds:string[]) {
    return (state$: Observable<PlayersState>) => state$
        .let(getPlayerEntities())
        .map(entities => playerIds.map(id => entities[id]));
}

export function hasPlayer(id:string) {
    return(state$: Observable<PlayersState>) => state$
        .select(s => s.ids.includes(id));
}