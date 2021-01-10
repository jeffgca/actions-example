let { ping, manyPings } = require('../index');

test('ping', (done) => {
  ping((err, result) => {
    expect(err).toBe(null);
    expect(result).toBe('pong!');
    done();
  });
});

test('many pings', (done) => {
  let pongs = manyPings(10);
  console.log(pongs);
  expect(pongs.length).toBe(10);
  expect(pongs[9][1]).toBe(10);
  done();
});