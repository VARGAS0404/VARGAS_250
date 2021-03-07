let fetch = require('node-fetch')
let util = require('util')
let fs = require('fs')
let handler = async (m, { text }) => {
                let body = fs.readFileSync('./lib/katabijak.txt', 'utf-8')
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                m.reply(randomnix)
}
handler.help = ['katabijak']
handler.tags = ['quotes']
handler.command = /^(katabijak)$/i

module.exports = handler

