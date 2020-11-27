const db = require('./db');

module.exports= {


	validate: function(user, callback){
		var sql = "select * from login where uname='"+user.uname+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){

				var i = results[0].type;
				console.log(i);
				callback(i);
			}else{
				callback(false);
			}
		});
	},

	insert: function(newUser, callback){
		var sql= "INSERT INTO login (uname, password, type) VALUES ('"+newUser.uname+"','"+newUser.password+"', '"+newUser.type+"')";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	insertComponent: function(newUser, callback){
		var sql= "INSERT INTO components (Cname,Pname,Bname,category,subcategory,review,price) VALUES ('"+newUser.Cname+"','"+newUser.Pname+"','"+newUser.Bname+"', '"+newUser.category+"','"+newUser.subcategory+"','"+newUser.review+"','"+newUser.price+"')";
		db.execute(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}

		});
	},

	getById: function(Sbc,Bn, callback){

		var sql = "select * from components where subcategory='"+Sbc+"' and Bname='"+Bn+"'";
		db.getResults(sql, function(results){
			//console.log(results[0].seller);
				callback(results);
		});



	},


getAll: function(Sbc, callback){
		var sql = "select * from components where Cname='"+Sbc+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


	search: function(key, callback){
		var sql = "SELECT * FROM components WHERE Pname LIKE '"+key+"%' ";
		console.log(sql);
		db.getResults(sql, function(results){

			console.log("dataset length "+results.length);
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});
	},


	getByIdsearch: function(Sid, callback){

		var sql = "select * from components where id='"+Sid+"'";
		db.getResults(sql, function(results){
			
				callback(results);
		});



	},


	filterSearch: function(Sid, range, callback){

		var sql = "select * from components where Cname='"+Sid+"' and price <="+range+"";
		db.getResults(sql, function(results){
			
				callback(results);
		});



	},






}