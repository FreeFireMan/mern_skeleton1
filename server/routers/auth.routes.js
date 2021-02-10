import express from 'express';
import authCtrl from '../controllers/auth.controller'

const router = express.Router();

router.route('/auth/signin')
    .post(authCtrl.signIn);

router.route('/auth/signout')
    .get(authCtrl.signOut);

export default router;
