var User = require('../lib/mongo').User;

module.exports={
	//注册一个用户
	create: function create(user){
		return User.create(user).exec();
	},
	
	//读取用户,addCreatedAt 自定义插件（通过 _id 生成时间戳）
	getUserByName: function getUserByName(name){
		return User
			.findOne({name:name})
			.addCreatedAt()
			.exec();
	}
};