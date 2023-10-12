/* 
Reducer?
----
  * JS function 
  * will take in state and action parameters 
  * must return state 

  What's an action?
  ---
    * is an object 
    * must have type property 
    * can have optional payload 
*/

export const todoReducer = ( state = [], action) => {
  console.log(state); // state logic -- array of obj
  console.log(action); // action object with type property and payload (optional)
  return state;
};