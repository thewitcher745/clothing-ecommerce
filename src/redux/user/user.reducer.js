import { auth } from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("SET_CURRENT_USER TRIGGERED");
      return {
        ...state,
        currentUser: action.payload,
      };

    case "SIGN_OUT":
      console.log("SIGNING OUT");
      auth.signOut();
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
