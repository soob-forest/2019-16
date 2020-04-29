const { CACHE_HOST,CACHE_PORT, QUEUE_PORT, QUEUE_HOST } = process.env;

let Redis = require("ioredis");

const redis = require("redis");

const cacheClient = redis.createClient(CACHE_PORT, CACHE_HOST);

const client = new Redis({
  sentinels: [
    { host: QUEUE_HOST, port: QUEUE_PORT },
    { host: QUEUE_HOST, port: QUEUE_PORT }
  ],
  name: "mymaster"
});

module.exports = { client, cacheClient };
