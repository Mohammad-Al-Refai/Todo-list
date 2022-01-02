import { Item } from "../../models/ItemModel";
import { TodoActions } from "./ActionTypes";
let INIT_STATE = {
    items: []
} as Ireducer


export let homeReducer = (state = INIT_STATE, action: IActions): Ireducer => {
    switch (action.type) {
        case TodoActions.ADD_ITEM:

            state.items.push(action.payload)
            return state
        case TodoActions.CHANGE_ITEM_STATE:
            
            state.items[state.items.indexOf(action.payload.item)].type = action.payload.type
            state.items = [...state.items]
            return { ...state, items: state.items }
        case TodoActions.DELETE_ITEM:

            let newItems = []
            state.items.forEach((item) => {
                if (item.title !== action.payload) {
                    newItems.push(item)
                }
            })
           
            return { ...state, items: newItems }
        default:
            return state
    }
}






interface Ireducer { //interface for reducer
    items: Item[]
}
interface IActions {//interface for actions 
    type: TodoActions,
    payload?: any
}