import 'rxjs/add/operator/let';
import { of } from 'rxjs/observable/of';
import { PlayerActions } from '../../src/actions';
import playersReducer, * as fromPlayers from '../../src/reducers/players';
import { TestPlayer } from '../fixtures/players';

describe('Players', function() {
    const playerActions = new PlayerActions();

    describe('Reducer', function() {
        it('should have an empty initial state', function(){
            const initialState = playersReducer(undefined, { type: 'test-action'});

            expect(initialState.ids).toEqual([]);
            expect(initialState.entities).toEqual({});
        });

        it('should add a player to the entities table and its ID to the IDs list', () => {
            const action = playerActions.loadPlayer(TestPlayer);
            const state = playersReducer(undefined, action);

            expect(state.ids).toEqual([TestPlayer.id]);
            expect(state.entities[TestPlayer.id]).toBe(TestPlayer);
        });
    });
});
