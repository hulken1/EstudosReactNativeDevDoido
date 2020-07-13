"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/card-controller");
const auth = require("../middlewares/authentication");
let _ctrl = new controller();


router.get("/",auth,_ctrl.get);
//router.pos("/",auth,_ctrl.post);
router.delete("/:id",auth,_ctrl.delete);

module.exports = router;