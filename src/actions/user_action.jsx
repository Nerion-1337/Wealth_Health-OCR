//
//
//
export const POST_USER = "POST_USER";
//
//
//
export const postUser = (dataForm) => ({
                type: POST_USER, 
                payload: dataForm            
});
//
//
export const POST_USER_SEC = "POST_USER_SEC";
//
//
//
export const postUserSec = (data) => ({
                type: POST_USER_SEC, 
                payload: data            
});
//
//
export const GET_USER = "GET_USER";
//
//
//
export const getUser = (data) => ({
                type: GET_USER, 
                payload: data           
});
//
//