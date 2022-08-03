const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "EuPfkcwV22ZpwYE8WbWopnyhX",
    appSecret: "pPdIfE51n6NGhs2El8OkE0aeuWIv7wj5evTmHkz4whjhR2z8uG",
    accessToken: "1378579041993719810-4Lt87jl57WfrLROu2wh9u320zaszSV",
    accessSecret: "1rHnWXlpiEkF2Bn67ZnGLcuPeBvVYEcFspoennrGsaP0y"
})

const rwClient = client.readWrite;
module.exports = rwClient;