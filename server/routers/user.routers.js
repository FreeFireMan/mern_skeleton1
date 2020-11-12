import express from  'express'
import userCrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users')
.get(userCrl.list)
.post(userCrl.create)

router.route('/api/users/:userId')
.get(userCrl.read)
.put(userCrl.update)
.delete(userCrl.remove)

router.param('userId',userCrl.userById)

export default router;
