export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      // go through friends array, match id, remove friend, return friends array
      
      return 
    default:
      return state;
  }
}
