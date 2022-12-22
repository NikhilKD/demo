const express=require('express');
const app = express();
const path = require("path");
const router = express.Router();

router.use(express.static(__dirname));
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

module.exports = router;