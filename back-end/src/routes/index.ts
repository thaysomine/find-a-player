import { Router } from 'express';

import userRouter from './authRouter.js';
import profileRouter from './profileRouter.js';

const router = Router();

router.use(userRouter);
router.use(profileRouter);

export default router;