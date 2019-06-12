 /**
  * 
  * state = null returns null in case state is undefined
  * state = INITIAL_STATE and use INITIAL_STATE any time we want to reset the state of the app, or some of the data [...INITIAL_STATE, isLogged:true]
  *
  */

export default (state = null, action ) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};