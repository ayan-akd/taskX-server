var express = require("express");
const getSingleUser = require("../../api/users/getSingleUser");
const createUser = require("../../api/users/createUser");
const updateUser = require("../../api/users/updateUser");
var router = express.Router();

router.get("/users/:id", getSingleUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);

module.exports = router;
