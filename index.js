const _ = require('lodash');

function ping(callback) {
  callback(null, 'pong!');
}

function manyPings(n, cb /* optional */ ) {
  let pongs = _.map(_.range(n), (item) => {
    return ['pong', item+1];
  });
  if (cb) { 
    cb(null, pongs); 
  }
  else {
    return pongs;
  }
}

if (require.main === module) {
  ping((e, r) => {
    if (e) throw e;
    console.log(`Ping: ${r}`);
  });
}

module.exports.ping = ping;
module.exports.manyPings = manyPings;