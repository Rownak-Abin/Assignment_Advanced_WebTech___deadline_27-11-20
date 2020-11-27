const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();
const bodyParser 		= require('body-parser');

router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/', (req, res)=>{

	
	res.render('customer/customerHome');

});

router.get('/permanentSto', (req, res)=>{

	
	res.render('customer/perSto');

});

router.get('/portableSto', (req, res)=>{

	
	res.render('customer/porSto');

});

router.get('/perHDasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "Hard Disk";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/perHDlenovo', (req, res)=>{

	var bn = "LENOVO";
	var sc = "Hard Disk";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/perHDdell', (req, res)=>{

	var bn = "DELL";
	var sc = "Hard Disk";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/perSSDdell', (req, res)=>{

	var bn = "DELL";
	var sc = "SSD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});


router.get('/perSSDlenovo', (req, res)=>{

	var bn = "LENOVO";
	var sc = "SSD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/perSSDasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "SSD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/porPDasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "Pen Drive";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/porPDlenovo', (req, res)=>{

	var bn = "LENOVO";
	var sc = "Pen Drive";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/porPDdell', (req, res)=>{

	var bn = "DELL";
	var sc = "Pen Drive";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/porPHDasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "Portable HDD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/porPHDlenovo', (req, res)=>{

	var bn = "LENOVO";
	var sc = "Portable HDD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});


router.get('/porPHDdell', (req, res)=>{

	var bn = "DELL";
	var sc = "Portable HDD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});









module.exports = router;

