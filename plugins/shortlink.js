let fetch = require('node-fetch')
let util = require('util')
let handler = async (m, { text }) => {
    fetch(`https://tinyurl.com/api-create.php?url=${text}`)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            m.reply(text)
        })
        .catch((err) => {
            m.reply(err)
        })
}
handler.help = ['tinyurl', 'shortlink'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^(tinyurl|shortlink)$/i

module.exports = handler

