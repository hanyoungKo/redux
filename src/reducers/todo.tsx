enum ActionType{
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    DECREMENT = "DECREMENT"
}

interface Action{
    type: ActionType;
    text: string;
}

const todo = (state=[], action :Action)=>{
    switch (action.type){
        case "ADD_TODO":
            return [...state,action.text];
        case "DECREMENT":
            return [...state, action.text];
        default:
            return state; 
    }
}
export default todo;