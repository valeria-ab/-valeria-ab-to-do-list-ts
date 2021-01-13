export type StateType = {
    name: string
    age: number
    childrenCount: number
}
//тут будут приходить все дополнительные параметры
type ActionType = {
    type: string
    [key: string]: any //какое-то свойство, которое может быть
    // а может не быть, а может их будет несколько
}

export const userReducer = (state: StateType, action: ActionType) => {
 switch (action.type) {
     case 'INCREMENT-AGE':
         const newState = {...state}
         newState.age = state.age + 1
         return newState
     case 'INCREMENT-CHILDREN-COUNT':
         return {...state, childrenCount: state.childrenCount + 1}
     case 'CHANGE-NAME':
         return {...state, name: action.newName}
     default:
         //return state
         throw new Error("I don't understand this type")
 }
}