const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const collection = db.collection('users');

const addUser = async (_openid, userInfo) => {
  delete userInfo._id;
  await collection.doc(_openid).set({ data: userInfo });
  return userInfo;
}

const getUser = async (_openid) => {
  let user;
  const hasUser = await collection.where({ _id: _openid }).get();
  if (Array.isArray(hasUser.data) && hasUser.data.length === 0) {
    user = addUser(_openid, { _id: _openid });
  } else {
    const user_t = await collection.doc(_openid).get();
    user = user_t.data;
  }
  return user;
}

exports.main = async (event, context) => {
  const { func, data } = event;
  const { OPENID, APPID, UNIONID } = cloud.getWXContext();
  let res;
  if (func === 'addUser') {
      res = await addUser(OPENID, data);
    } else if (func === 'getUser') {
      res = await getUser(OPENID);
    } else if (func === 'getOpenId') {
      res = OPENID;
    }
    return res;
  }