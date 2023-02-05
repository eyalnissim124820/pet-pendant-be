const router = require('express').Router();

router.post('/', (req,res)=>{
    res.send('hello there')
})


module.exports = router;