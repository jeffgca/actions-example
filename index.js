function ping(callback) {
  callback(null, 'pong!');
}

if (require.main === module) {
  ping((e, r) => {
    if (e) throw e;
    console.log(`Ping: ${r}`);
  });
}

module.exports.ping = ping;