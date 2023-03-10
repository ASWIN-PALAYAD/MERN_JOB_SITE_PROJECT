import { unAuthenticatedError } from "../errors/index.js";
import jwt from 'jsonwebtoken';

const auth = async(req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new unAuthenticatedError('Authentication Invalid')
    }

    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        const testUser = payload.userId === '63c3e10121b7e954a3c3251a'
        req.user = {userId : payload.userId,testUser}
        next()
    } catch (error) {
        throw new unAuthenticatedError('Authentication Invalid') 
    }
      
}

export default auth;