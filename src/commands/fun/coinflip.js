const { Command } = require('sylphy')

class Coinflip extends Command {
    constructor (...args) {
        super(...args, {
            name: 'coinflip',
            group: 'fun',
            cooldown: 5,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg }, responder) {
        const coins = [
            { name: 'heads! :eggplant:' },
            { name: 'tails! :peach:' }
        ]

        const coin = coins[~~(Math.random() * coins.length)]

        return responder.send(' ', {embed:{
            color: 0x66dac3,
            title: `${msg.author.username} flipped a coin!`,
            description: 'and it landed on... ' + coin.name,
            timestamp: new Date()
        }})
        .catch(this.logger.error)
    }
}

module.exports = Coinflip