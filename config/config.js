module.exports = {
  debug: false,
  scopes: [ '@xxx', '@tools', '@doc'],
  enableCluster: true, // enable cluster mode
  enablePrivate: true, // enable private mode, only admin can publish, other use just can sync package from source npm
  database: {
      db: 'cnpmjs',
      port: 3306,
      username: 'root',
      password: '123456',
      dialect: 'mysql'
  },
  admins: {
    admin: '634408262@qq.com',
  },
  // bindingHost:"xzzdll.cn", 
  syncModel: 'exist',// 'none', 'all', 'exist',
  // bindingHost: '127.0.0.1', // only binding on 127.0.0.1 for local access
  // sourceNpmRegistry:"http://47.98.115.136/",
  registryHost: '47.98.115.136:7001',
};