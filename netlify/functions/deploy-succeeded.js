const refresher = require('cdn-refresher')

// 这个代码尚未测试是否可用，如果有小伙伴尝试了该代码请在评论区反馈一下能不能用
exports.handler = () => refresher.refreshAli({
    accessKey: process.env.ACCESS_KEY,
    accessSecret: process.env.ACCESS_SECRET,
    objectType: 'Directory',
    objectPaths: ['anzai.sleepingbed.top/'],
    // 当回源内容和源站资源对比后不一致时，是否刷新对应目录下的资源。
    force: false
}).then(() => console.log('CDN 缓存刷新成功'))
    .catch(err => console.error(err))