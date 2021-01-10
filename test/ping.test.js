let ping = require('../index').ping;

test('ping', (done) => {
  ping((err, result) => {
    expect(err).toBe(null);
    expect(result).toBe('pong!');
    done();
  });
});