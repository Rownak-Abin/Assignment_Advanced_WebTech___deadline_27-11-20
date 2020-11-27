const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/', (req, res)=>{

	
	res.render('home/home');

});


router.get('/create', (req,res)=>{

	
	res.render('admin/createNew');
	

});

router.post('/create', (req,res)=>{

	var newUser = {
		uname : req.body.uname,
		password: req.body.password,
		type: req.body.type
	};

	

	userModel.insert(newUser, function(status){
							
			res.redirect('/home');
		
	})

});

router.get('/addnew', (req,res)=>{

	
	res.render('admin/addComponent');
	

});

router.post('/addnew', (req,res)=>{

	var newUser = {

		Cname  : req.body.component,
		Pname  : req.body.proname,
		Bname   : req.body.Bname,
		category : req.body.cat,
		subcategory : req.body.sub,
		review	: req.body.review,
		price  : req.body.price

	};

	

	userModel.insertComponent(newUser, function(status){
							
			res.redirect('/home');
		
	})

});

router.get('/logout', (req,res)=>{

		res.redirect('/login');
	
});











module.exports = router;