const chalk = require('chalk')
const guildConfig = require('../assets/guildConfig.json')

module.exports = satomi = {
    name: 'guilds:create',
    events: {
        guildCreate: 'newGuild'
    },
    newGuild: (guild, satomi) => satomi.createMessage(guildConfig.botLog, {embed: {
        color: 0x66dac3,
        author: {
            name: `${guild.name} (${guild.id})`,
            icon_url: `${guild.iconURL}`
        },
        title: `Satomi has joined "${guild.name}" with ${guild.memberCount} members! :tada:`,
        timestamp: new Date()
    }}).then(satomi.logger.info(chalk.red.bold(`Satomi has joined "${guild.name}" (${guild.id})`)))
}