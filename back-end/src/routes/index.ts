import { Router } from 'express';

import userRouter from './authRouter.js';

const router = Router();

router.use(userRouter);

export default router;