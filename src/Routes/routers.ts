import { Router } from 'express';

import { userRouter } from '../Implementatios/User/UserController';

const router = Router();

router.use("/user", userRouter)

export { router };