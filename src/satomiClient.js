const { Client } = require('sylphy');
const Database = require('./plugins/Database.js');
const chalk = require('chalk');
const pkg = require('../package.json');

class SatomiClient extends Client {
    constructor(options = {}) {
        super(options);
        this.botVersion = `v${pkg.version}`;
        this.satomiColor = 0x98ffa6;
        this.redColor = 0xff4b4b;
        this.blueColor = 0x99dff;
        this.userAgent = `Satomi (https://github.com/kyostra/satomi) v(${pkg.version})`;
        this.settingsManager = require('./utils/settingsManager.js');
        this.mongodb = new Database({
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dbname: process.env.DB_DBNAME
        });
    }

    async shutdown() {
        try {
            await this.settingsManager.handleShutdown(this);
            process.exit(0);
        } catch (error) {
            this.logger.error(chalk.red.bold(error));
            process.exit(0);
        }
        setTimeout(() => process.exit(0), 5000);
    }
}

module.exports = SatomiClient;