export const selectUser = (user) =>{
    console.log("yor clicked on user" +user.name);
    return{
        type:"USER_SELECTED",
        payload:user
    };
};