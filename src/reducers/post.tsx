
/* 타입정의 */
enum ActionType {
    FETCH_POSTS  = "FETCH_POSTS",
    DELETE_POSTS = "DELETE_POST"
}

interface Post {
    userId: Number;
    id: Number;
    title: String;

}

interface Action{
    type: ActionType;
    payload: Post[]
}

const post = (state = [], action: Action)=>{

    switch (action.type){
        case "FETCH_POSTS":
            return [...state, ...action.payload];
        default:
            return state;
            
    }
}

export default post;