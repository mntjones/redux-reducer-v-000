export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]};
    case 'REMOVE_FRIEND':
      return state.friends.filter( el => el.name !== "John" );
    default:
      return state;
  }
}
