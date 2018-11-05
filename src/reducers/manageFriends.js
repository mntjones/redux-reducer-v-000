export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      return someArray.filter( el => el.name !== "John" );
    default:
      return state;
  }
}
