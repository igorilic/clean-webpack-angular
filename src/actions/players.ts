import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Player } from '../models';

@Injectable()
export class PlayerActions {
    static ADD_TO_TEAM = '[Player] Add to Team';
    addToTeam(player: Player): Action {
        return {
            type: PlayerActions.ADD_TO_TEAM,
            payload: player
        };
    }

    static REMOVE_FROM_TEAM = '[Player] Remove from Team';
    removeFromTeam(player: Player): Action {
        return {
            type: PlayerActions.REMOVE_FROM_TEAM,
            payload: player
        };
    }

    static REMOVE_FROM_TEAM_SUCCESS = '[Player] Remove from Team Success';
    removeFromTeamSuccess(player: Player): Action {
        return {
            type: PlayerActions.REMOVE_FROM_TEAM_SUCCESS,
            payload: player
        };
    }

    static LOAD_TEAM = '[Player] Load Team';
    loadTeam(): Action {
        return {
            type: PlayerActions.LOAD_TEAM
        };
    }
    static LOAD_TEAM_SUCCESS = '[Player] Load Team Success';
    loadTeamSuccess(players: Player[]): Action {
        return {
            type: PlayerActions.LOAD_TEAM_SUCCESS,
            payload: players
        };
    }

    static LOAD_PLAYER = '[Player] Load Player';
    loadPlayer(player: Player): Action {
        return {
            type: PlayerActions.LOAD_PLAYER,
            payload: player
        };
    }
}