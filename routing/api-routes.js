module.exports = function(app) {
	app.get('/api/index', function(request, response){
		response.json(users)
	})
}