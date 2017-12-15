const { Command } = require('sylphy')
const answers8ball = require('../../assets/answers8ball.js')

class Eightball extends Command {
    constructor (...args) {
        super (...args, {
            name: '8ball',
            group: 'fun',
            cooldown: 3,
            options: {guildsOnly: true},
            usage: [
                { name: 'question', displayName: 'question', type: 'string', optional: false, last: true}
            ]
        })
    }

    handle ({ args, client, msg}, responder) {
        const question = args.question
        const answer = answers8ball.magicList[~~(Math.random() * answers8ball.magicList.length)]

        return responder.send(' ', {embed: {
            title: ':question: Your Question: ' + question,
            description: ':8ball: Answer: ' + answer.name,
            color: 0x66dac3,
            timestamp: new Date()
        }})
    }
}

module.exports = Eightball
