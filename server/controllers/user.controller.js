import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req,  res) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({message: 'Successfully signed up!'})
    } catch (err) {
        return res.status(400).json({message: errorHandler.getErrorMessage(err)})
    }
}
const list = async (req,  res) => {
    try {
        let users = await User.find().select('name email update created')
        res.status(200).json(users)
        // res.json(users)
    } catch (err){
        return res.status(400).json({message: errorHandler.getErrorMessage(err)})
    }
}
const userById = async (req,  res, next, id) => {
    try {
        let user = await User.findById(id)
        if (!user){
            return res.status(400).json({error: "User not found"})
        }
        req.profile = user
        next()
    } catch (err) {
        return res.status(400).json({error: 'Could not retrieve user'})
    }
}
const read = (req,  res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}
const update = async (req,  res) => {
    try{
        let user = req.profile
        // TODO delete extend
        user = extend(user, req.body)
        user.update = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    } catch (err) {
        return res.status(400)
            .json({error:errorHandler.getErrorMessage(err)})
    }
}
const remove = async (req, res) => {
    try{
        let user = req.profile;
        let deleteUser = await user.remove()
        deleteUser.hashed_password = undefined
        deleteUser.salt = undefined
        res.json(deleteUser)
    } catch (e) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(e)})
    }
}

export default {create, list, userById, read, update, remove}
