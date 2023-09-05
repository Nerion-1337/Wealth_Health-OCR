//
// DATA
import { Links } from "#/data/links"
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