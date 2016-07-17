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

    describe('Selectors', function() {
        describe('getPlayerEntities', function() {
            it('should get the entities table out of the players state', function() {
                const state = playersReducer(undefined, {type: 'test-action'});

                of(state).let(fromPlayers.getPlayerEntities())
                         .subscribe(entities => expect(entities).toBe(state.entities));

            });
        });

        describe('getPlayer', () => {
            it('should get a selected player out of the players state', () => {
                const state: fromPlayers.PlayersState = {
                    entities: {
                        [TestPlayer.id]: TestPlayer,
                    },
                    ids: [TestPlayer.id]
                };

                of(state).let(fromPlayers.getPlayer(TestPlayer.id)).subscribe(player => {
                    expect(player).toBe(TestPlayer);
                });
            });
        });

        describe('getPlayers', () => {
            it('should retrun all of the players in an array for a given list of ids', () => {
                const state: fromPlayers.PlayersState = {
                    entities: {
                        [TestPlayer.id]: TestPlayer
                    },
                    ids: [TestPlayer.id]
                };

                of(state).let(fromPlayers.getPlayers([TestPlayer.id])).subscribe(players => {
                    expect(players).toEqual([TestPlayer]);
                });
            });
        });

        describe('hasPlayer', () => {
            it('should return true if player is in players state', () => {
                const state: fromPlayers.PlayersState = {
                    entities: {
                        [TestPlayer.id]: TestPlayer
                    },
                    ids: [TestPlayer.id]
                };

                of(state).let(fromPlayers.hasPlayer(TestPlayer.id)).subscribe(value => {
                    expect(value).toBe(true);
                })
            })
        })
        
    });
});
