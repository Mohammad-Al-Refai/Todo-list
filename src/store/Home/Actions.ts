import { Item } from "models/ItemModel";
import { TodoActions } from "./ActionTypes";

export function AddItem( payload: Item) {
    return {
        type: TodoActions.ADD_ITEM, payload: payload
    }
}
export function UpdateItemType( payload: object) {
    return {
        type: TodoActions.CHANGE_ITEM_STATE, payload: payload
    }
}

export function DeleteItem( payload: string) {
    return {
        type: TodoActions.DELETE_ITEM, payload: payload
    }
}


