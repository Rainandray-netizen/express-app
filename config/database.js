const mongoose = require('mongoose');

//this actually connects to the db
mongoose.connect('mongodb+srv://rainandray:kathmandu22@myfirstcluster-cubr0.azure.mongodb.net/project-2?retryWrites=true&w=majority', {
  //these options disable warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});