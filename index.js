const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v2.tweet( "This is a scheduled tweet from the bot! Yes, I have so many other things to do but here I am!!")
    } catch (err) {
        console.error(err)
    }
}

const job = new CronJob("9 18 * * *", () => {
    tweet()
})

job.start();