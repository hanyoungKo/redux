/* 타입정의 */
enum ActionType {
    ADD_TODO = "ADD_TODO"
}

interface Action{
    type: ActionType;
    text: string; 
}


const todos = (state:any[] = [], action: Action)=>{

    switch (action.type){
        case "ADD_TODO":
            return [...state, action.text];
        default:
            return state;
            
    }
}

export default todos;