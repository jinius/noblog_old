'use strict';

var express = require('express'),
	api = require('../api'),
	routes;

routes = function() {
	var router = express.Router();
	router.del = router.delete;

	router.post('/posts', api.posts.add);
	router.get('/posts/:_id', api.posts.read);
	router.put('/posts/:_id', api.posts.edit);
	router.del('/posts/:_id', api.posts.remove);

	return router;
};

module.exports = routes;
