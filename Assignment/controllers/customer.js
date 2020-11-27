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

router.get('/searchget/:id', (req, res)=>{


	var i = req.params.id;

	userModel.getByIdsearch(i, function(results){

			res.render('customer/detailssearch', {inf: results});

	})

});



router.get('/portableSto', (req, res)=>{

	
	res.render('customer/porSto');

});

router.get('/LCDmon', (req, res)=>{

	
	res.render('customer/LCDmonitor');

});


router.get('/allstorage', (req, res)=>{

	var bn = "Storage";
	
	userModel.getAll(bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/allmonitor', (req, res)=>{

	var bn = "Monitor";
	
	userModel.getAll(bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/products/:key', (req, res)=>{


	var w = req.params.key;


	if(w!=null || w!=undefined )
	{

	userModel.search(w, function(results){

	
	var str = "";
		for(i=0;i<results.length;i++)
			{
			   str+='<a style="position:relative; left:30px; font-size:20px; margin-top:20px;" href="/customer/searchget/'+results[i].id+'">'+results[i].Pname+'</a><br>';
			    
			}

			console.log(str);
		res.send(str);


	});

}

//str+='<div style="position: relative; width:980px; height: 205px; background-color: #ccffff; border-radius:2px;box-shadow: 2px 5px 28px -11px rgba(0,0,0,0.75); left: 300px; margin-top:25px; "><img src= "'+results[i].picone+'" width="200px;" height="150px;" style="border:1px solid black; padding:2px;  float:left; margin-right:10px; margin-bottom:5px; position:relative; top:30px; left:20px;"><h3 style="position: relative; top:27px; left:35px; font-family: Georgia ;font-weight: bold">'+results[i].tname+'</h3><h4 style="position: relative;left:35px; top: 35px; color: #B22222; ">Seller :'+results[i].seller+'</h4><h5 style="position: relative;left:30px; top: 50px;  ">Tour duration : '+results[i].duration+'</h5><a href="/home/details/'+results[i].id+'" class="Rqbutton" style="position: relative; padding-top:  10px; padding-bottom:10px; top:-30px; left:450px">Request</a> </div>';
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

router.get('/LCDFEsony', (req, res)=>{

	var bn = "SONY";
	var sc = "Filend Emission FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/LCDFEasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "Filend Emission FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/LCDFEdell', (req, res)=>{

	var bn = "DELL";
	var sc = "Filend Emission FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/LCDPsony', (req, res)=>{

	var bn = "SONY";
	var sc = "Plasma FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/LCDPasus', (req, res)=>{

	var bn = "ASUS";
	var sc = "Plasma FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/LCDPdell', (req, res)=>{

	var bn = "DELL";
	var sc = "Plasma FPD";

	userModel.getById(sc, bn, function(results){

		res.render('customer/details', {inf : results});

	});

});

router.get('/filter', (req, res)=>{



		res.render('customer/filterpage');


});


router.post('/filterSearchDone', (req, res)=>{


	var com = req.body.comp;
	var range = req.body.range;


	userModel.filterSearch(com, range, function(results){

		res.render('customer/details', {inf: results});

	});





});


module.exports = router;

