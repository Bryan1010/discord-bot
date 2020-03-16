const Discord = require('discord.js')
const request = require('request')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    // For Commands given to birb must start with birb
    let toBirb = (msg.content.substr(0, 4)).toUpperCase() === "BIRB"

    // For full message analysis
    let saidNearBirb = msg.content.toUpperCase()

    // Birb "ing"
    let birbing = msg.content.substr(msg.content.length - 3, msg.content.length) === "ing" && !(msg.author.bot)
    // Birb doesn't like birds
    let noBirds = (saidNearBirb.includes("BIRD") || saidNearBirb.includes("BIRDS"))

    if (birbing && !(msg.author.bot) && toBirb) {
        let birbSay = msg.content
        birbSay = birbSay.slice(5, birbSay.length - 3)
        msg.channel.send(birbSay + "ong")
    }

    if (noBirds && !(msg.author.bot)) {
        msg.reply("Excuse me, I do not take kindly to hearing myself and my fellow breathern as what you call " +
                         "\"Birds\" would you kindly only refer to us as our preferred name \"Birbs\". Thank you.")
    }

    if (msg.content.toUpperCase() === "BIRB WEATHER") {
        let appid = "7cb4eb671c9bca57ec4b4fe34d70dd94"
        let loc = "Harrisburg"
        var options = {
            'method': 'GET',
            'url': 'http://api.openweathermap.org/data/2.5/weather?q=Harrisburg,us&appid=7cb4eb671c9bca57ec4b4fe34d70dd94',
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            const data = JSON.parse(response.body)
            let {temp, feels_like, humidity} = data.main
            const wind = data.wind.speed
            const clouds = data.weather[0].description

            temp = temp - 273.15
            feels_like = feels_like - 273.15

            let birbSay = "Here's the weather on campus! \n " +
                          "The temperature is " + Math.round(temp) + " degrees Celsius "
            if (temp > 30) {
                birbSay = birbSay + "... that's really hot! \n"
            }
            else if (temp < 0) {
                birbSay = birbSay + "... that's really cold! \n"
            }
            else {
                birbSay = birbSay + "\n"
            }

            birbSay = birbSay + "But it really feels like " + Math.round(feels_like) + " degrees Celsius "
            if (temp > feels_like) {
                birbSay = birbSay + "... so a little colder! \n"
            }
            else if (temp < feels_like) {
                birbSay = birbSay + "... so a little warmer! \n"
            }
            else {
                birbSay = birbSay + "... so not much different I suppose...\n"
            }

            birbSay = birbSay + "And the humidity is " + humidity + "% "
            if (humidity > 75) {
                birbSay = birbSay + " disgusting :( \n"
            }
            else {
                birbSay = birbSay + "\n"
            }

            birbSay = birbSay + "And the wind speed is " + wind + "m/s\n"
            birbSay = birbSay + "and the clouds are looking like " + clouds + "\n REMEMBER! Keep on Birbin'"

            msg.reply(birbSay)
        });
    }




})

client.login('Njg0NjUwMjIxMjU0MzQ0NzM1.Xm_oNA.iqn4rTUbvQhUWYI0BQ1KIQ09Ajk')