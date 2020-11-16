import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const signIn = async (req, res) => {
    try {
        let user = await User.findOne({'email': req.body.email})
        console.log(user.id);
        if (!user){
            return res.status(401).json({error: 'User not found'})
        }
        if (!user.authenticate(req.body.password)){
            return res.status(401).json({error: 'Password and Email don`t match.'})
        }
        const token = jwt.sign({_id: user._id}, config.jwtSecret)
        console.log(token);
        res.cookie("t",  token, {expire: new Date() + 9999})
        console.log(res.cookie);
        return res.status(200).json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        })
    } catch (err) {
        return res.status(401).json({error: "Could not sing in"})
    }
}
const signOut = (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({
        messages: 'signed out'
    })
}
const requireSignIn = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    alg: "sha1"
})
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth
        && req.profile._id === req.auth._id
    if(!(authorized)){
        return res.status('403').json({error: "User is not authorized"})
    }
    next();
}

export default {signIn, signOut, requireSignIn, hasAuthorization}
