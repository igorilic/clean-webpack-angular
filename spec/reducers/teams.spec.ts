import 'rxjs/add/operator/let';
import { of } from 'rxjs/observable/of';
import { PlayerActions } from '../../src/actions';
import { Player } from '../../src/models';
import teamsReducer, * as fromTeams from '../../src/reducers/teams';
import { TestPlayer } from '../fixtures/players'; 

describe('Teams', () => {
    const playerActions = new PlayerActions();

    describe('Reducer', () => {
        it('should have an empty initial state', () => {
            const initialState = teamsReducer(undefined, { type: 'test-action'});

            expect(initialState.ids).toEqual([]);
            expect(initialState.loaded).toBe(false);
            expect(initialState.loading).toBe(false);
        });

        it('should load a team with loading true value', () => {
            const player: Player = TestPlayer;
            const state: fromTeams.TeamsState = {
                loaded: false,
                loading: false,
                ids: [TestPlayer.id]
            }
            const action = playerActions.loadTeam();

            expect(state.)
            
        });
    })
})