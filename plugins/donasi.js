let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [ 081227560249 ]
│ • Telkomsel [ 081227560249 ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
