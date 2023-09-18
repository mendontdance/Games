import {
    GAME_START,
    GAME_OVER,
    WIN_FIRST_PLAYER,
    WIN_SECOND_PLAYER,
    SET_FIRST_PLAYER,
    SET_SECOND_PLAYER,
    INITIAL_STATE,
    FIRST_PLAYER_STATUS,
    SECOND_PLAYER_STATUS,
    RESTART_GAME,
    REDIRECT_TO_INPUT_MENU,
    SET_BOT_NAME,
    SET_BOT_PLAYER,
    WIN_BOT_PLAYER,
    GAME_OVER_BOT,
    SET_PLAYER,
    GAME_IS_PLAYING,
    DRAW,
    BACK_TO_INITIAL_BOT_GAME
} from '../actions/ticTacToeAction.jsx';

const initialState = {
    gameStart: false,
    gameOver: false,
    gamePlaying: true,
    player: Math.floor(Math.random() * 2),
    position: Array(9).fill(null),
    firstPlayer: {
        status: false,
        value: 0,
        id: 0,
        type: '\u0058'
    },
    secondPlayer: {
        status: false,
        value: 0,
        id: 1,
        type: '\u004F'
    },
    botPlayer: {
        status: false,
        value: 0,
        id: 1,
        type: '\u004F'
    },
    arr: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    draw: false,
    redirectToInputMenu: false,
};

export const ticTacToeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BACK_TO_INITIAL_BOT_GAME: {
            return {
                ...state,
                botPlayer: {
                    ...state.botPlayer,
                    value: 0
                },
                firstPlayer: {
                    ...state.firstPlayer,
                    value: 0
                },
            }
        }
        case DRAW: {
            return {
                ...state,
                draw: action.draw
            }
        }
        case GAME_IS_PLAYING: {
            return {
                ...state,
                gamePlaying: action.gamePlaying
            }
        }
        case SET_BOT_PLAYER: {
            state.position[action.number[Math.floor(Math.random() * action.number.length)]] = state.botPlayer.type
            return {
                ...state,
                player: action.player
            }
        }
        case SET_PLAYER: {
            return {
                ...state,
                player: action.player
            }
        }
        case GAME_OVER_BOT:{
            return {
                ...state,
                gameOver: action.gameOver ,
                player: action.player
            }
        }
        case WIN_BOT_PLAYER: {
            return {
                ...state,
                botPlayer: {
                    ...state.botPlayer,
                    value: action.value
                },
            }
        }
        case SET_BOT_NAME: {
            return {
                ...state,
                botPlayer: {
                    ...state.botPlayer,
                    status: action.status
                }
            }
        }
        case GAME_START: {
            return {
                ...state,
                gameStart: action.gameStart
            }
        }
        case GAME_OVER: {
            return {
                ...state,
                gameOver: action.gameOver,
            }
        }
        case WIN_FIRST_PLAYER: {
            return {
                ...state,
                firstPlayer: {
                    ...state.firstPlayer,
                    value: action.value
                },
            }
        }
        case WIN_SECOND_PLAYER: {
            return {
                ...state,
                secondPlayer: {
                    ...state.secondPlayer,
                    value: action.value
                }
            }
        }
        case SET_FIRST_PLAYER: {
            state.position[action.number] = state.firstPlayer.type
            return {
                ...state,
                player: action.player
            }
        }
        case SET_SECOND_PLAYER: {
            state.position[action.number] = state.secondPlayer.type
            return {
                ...state,
                player: action.player
            }
        }
        case INITIAL_STATE: {
            return {
                ...initialState,
                position: Array(9).fill(null),
            }
        }
        case FIRST_PLAYER_STATUS: {
            return {
                ...state,
                firstPlayer: {
                    ...state.firstPlayer,
                    status: action.status
                }
            }
        }
        case SECOND_PLAYER_STATUS: {
            return {
                ...state,
                secondPlayer: {
                    ...state.secondPlayer,
                    status: action.status
                }
            }
        }
        case RESTART_GAME: {
            return {
                ...state,
                position: action.position,
                gameOver: action.gameOver,
                player: action.player,
            }
        }
        case REDIRECT_TO_INPUT_MENU: {
            return {
                ...state,
                redirectToInputMenu: action.redirect
            }
        }
        default: {
            return state;
        }
    }
};