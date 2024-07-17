const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const updata = async (_openid, userInfo) => {
  delete userInfo._id;
  await collection.doc(_openid).set({ data: userInfo });
  return userInfo;
}
exports.main = async (event, context) => {
  const { func, data } = event;
  const { OPENID, APPID, UNIONID } = cloud.getWXContext();
  let res;
  res = await addUser(OPENID, data);
  return res;
  // db.collection('users').doc(_openid).update({
  //   // data 传入需要局部更新的数据
  //   data: {
  //     // 表示将 done 字段置为 true
  //     data: userInfo,
  //   }
  // })
  // .then(console.log)
  // .catch(console.error)
}
