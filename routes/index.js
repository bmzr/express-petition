var express = require('express');
const Signature = require('../models/Signature');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  //res.render('index', { title: 'Express' });
  const signatures = await Signature.findAll({
    order: [['createdAt', 'DESC']]
  });
  if (req.query.msg)
  {
    res.locals.msg = req.query.msg
    res.locals.email = req.query.email
    console.log(res.locals.msg);
    console.log(res.locals.email);
  }
  // console.log(signatures.length);
  res.render('index', { signatures })
});

router.post('/submitted', async function(req, res, next) {
  const signature = await Signature.checkDuplicateEmail(req.body.email);
  if (signature) {
    console.log("error: duplicate email");
    res.redirect('/?msg=fail&email=' + req.body.email);
  }
  else {
    const test = await Signature.create({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email });
    console.log("redirecting");
    res.redirect('/?msg=success&email=' + req.body.email);
  }
});

module.exports = router;
