const router = require("express").Router();
const cookieController = require("../controller/cookiesController");


router.get("/setcookies", cookieController.setCookie);
router.get("/clearcookie", cookieController.clearCookie);
router.get("/getcookie", cookieController.getCookie);


module.exports = router;