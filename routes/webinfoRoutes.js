const express = require("express");
const router = express.Router();
const {
  getWebInfos,
  createWebInfo,
  getWebInfo,
  updateWebInfo,
  deleteWebInfo,
} = require("../controller/webinfoController");

router.route("/").get(getWebInfos);

router.route("/").post(createWebInfo);

router.route("/:id").put(updateWebInfo);

router.route("/:id").get(getWebInfo);

router.route("/:id").delete(deleteWebInfo);

module.exports = router;
