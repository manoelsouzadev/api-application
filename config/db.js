if(process.env.NODE_ENV == "production"){
	module.exports = { mongoURI: 'mongodb+srv://manoel:maenem2018@mongotest.lge46wf.mongodb.net/?retryWrites=true&w=majority' }
}else{
  module.exports = { mongoURI: 'mongodb+srv://manoel:maenem2018@mongotest.lge46wf.mongodb.net/?retryWrites=true&w=majority' }
}
