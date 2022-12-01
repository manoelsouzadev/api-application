if(process.env.NODE_ENV == "production"){
	module.exports = { mongoURI: "mongodb+srv://manoel:fiL8BxxiahVq39yo@mongotest.lge46wf.mongodb.net/?retryWrites=true&w=majority" }
}else{
  module.exports = { mongoURI: "mongodb+srv://manoel:fiL8BxxiahVq39yo@mongotest.lge46wf.mongodb.net/?retryWrites=true&w=majority" }
}
