import express from 'express';
import opul from './opul';

const router = express.Router();

router.use("/api", opul);

export default router;