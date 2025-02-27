const redis = require('redis');

const redisClient = redis.createClient();

redisClient.connect();

exports.redisClient = redisClient;
