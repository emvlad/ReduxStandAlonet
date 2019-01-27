//just one fonction that can be directly exported
//what information do we need to pass into that function?
//do we need parameters - new jsx syntaxe?

//to be imported by userlist
//NB: create All main actions to be switched in reducers
export const selectUser = user => {
  //console.log ("click on user");
  return {
    type: "USER_SELECTED",
    payload: user
  };
};

//the action is made of two parts:
//the first part is a type: describes the change attribute to the action.
//the second part is a payload: the user selected to perform the action
//the entire function is called action-creator because
//that create the object-mehod to be bound.

//will be exported to the user-list and hookup to the smart connection
