const { cacheClient } = require("../../../lib/redis/client");

exports.saveCache = ({ lat, lon }, data) => {
  const key = JSON.stringify({ lat, lon });
  data["time"] = new Date().toString();
  cacheClient.set(key, JSON.stringify(data));
};

exports.getCache = async ({ lat, lon }) => {
  const key = JSON.stringify({ lat, lon });

  return new Promise((res, rej) => {
    cacheClient.get(key, (err, reply) => {
      if (err) rej(err);
      res(reply);
    });
  });
};
