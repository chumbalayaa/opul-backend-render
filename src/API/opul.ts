const express = require("express");
const router = express.Router();

/*
Opul - single API
*/
router.get("/OpulCommand", (req: Express.Request, res: Express.Response, next: any) => {
  console.log(req, res, next);
});

export default router;