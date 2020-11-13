import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'

const signIn = async (req, res) => {
    try {
        let user = await User.findOne({'email': req.body.email})
        if (!user){
            return res.status(401).json({error: 'User not found'})
        }
        if (!user.authenticate(req.body.password)){
            return res.status(401).json({error: 'Password and Email don`t match.'})
        }
        const token = jwt.sign({_id: user.id}, config.jwtSecret)
        res.cookie('t',  token, {expires: new Date() + 9999})
        return res.status(200).json({
            token,
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
            }
        })
    } catch (err) {
        return res.status(401).json({error: "Could not sing in"})
    }
}
const signOut = (req, res) => {}
const requireSignIn = (req, res) => {}
const hasAuthorization = (req, res) => {}

export default {signIn, signOut, requireSignIn, hasAuthorization}
