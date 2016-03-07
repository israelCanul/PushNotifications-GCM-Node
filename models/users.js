
exports = module.exports = function(app, mongoose) {

	var UsersSchema = new mongoose.Schema({
		username: 		{ type: String },
		password: 	{ type: String },
		email:  	{ type: String },
		type: 	{ type: Number },
		permissions: 		{
			read:{ type:Boolean},
			write:{ type:Boolean},
			update:{ type:Boolean},
			delete:{ type:Boolean},
			admin:{ type:Boolean},
		},
		active: 	{ type: Boolean }
	});

	mongoose.model('Users', UsersSchema);

};