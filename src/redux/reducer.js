import * as actions from "./actions"
import { screenSizes } from '../constants'

const initialState = {
    screenSize: screenSizes.COMPUTER
}

export default (state = initialState, act) => {
    switch(act.type){
        
        case actions.SET_SCREEN_SIZE: 
            return {
                ...state, screenSize: act.value
            }
        default: return state
    }
}