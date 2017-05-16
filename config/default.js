//port 程序启动监听的端口号
//session: express-session 的配置信息
//mongodb: mongodb 的地址， myblog 为db名
module.exports = {
	port: 3000,
	session:{
		secret:'myblog',
		key:'myblog',
		maxAge:2592000000
	},
	mongodb: 'mongodb://localhost:27017/myblog'
};