if(process.env.NODE_ENV == "production"){
	module.exports = { mongoURI: "mongodb+srv://user:123@mongotest.lge46wf.mongodb.net/test" }
}else{
  module.exports = { mongoURI: "mongodb+srv://user:123@mongotest.lge46wf.mongodb.net/test" }
}
