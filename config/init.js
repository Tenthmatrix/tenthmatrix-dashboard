	/**********************************************************************
	*  Author: Neha Kapoor (neha@rootcrm.org)
	*  Project Lead: Balinder WALIA (bwalia@rootcrm.org)
	*  Project Lead Web...: https://twitter.com/balinderwalia
	*  Name..: ROOTCRM
	*  Desc..: Root CRM (part of RootCrm Suite of Apps)
	*  Web: http://rootcrm.org
	*  License: http://rootcrm.org/LICENSE.txt
	**/

	/**********************************************************************
	*  init.js handles the basic initial constants
	**/
	
	var mongodbRe = require('mongodb')
	var MongoClient = mongodbRe.MongoClient;
	
	// Connection URL. This is where your mongodb server is running.
	var url = 'mongodb://localhost:27017/jobshout_live';
	
	var _db;
	var definedAdminTablesArr= new Array("systems", "Country", "availability", "authentication_token", "email_queue", "system_lists", "system_tables", "tags", "modules", "uk_towns_cities");
	var definedMaintainHistoryTablesArr= new Array("documents", "tokens", "templates");
	
	module.exports = {
    	mongodb : mongodbRe,
    	MongoClient : MongoClient,
    	mongoConnUrl : url,
    	port : 3009,
		cookieName : "tenthmatrix_login",
		backendDirectoryPath : "/dashboard",
		backendDirectoryName : "dashboard",
		adminTablesArr : definedAdminTablesArr,
		maintainHistoryTablesArr : definedMaintainHistoryTablesArr,
		historyDatabaseName : 'jobshout_live_history',
		system_name : "Tenthmatrix Website",
		recipientStr : 'bwalia@tenthmatrix.co.uk',
		websiteUrl : 'https://tenthmatrix.co.uk',
		localhostURL : 'http://localhost',
		appUrl : 'https://tenthmatrix.co.uk/dashboard'
	};
