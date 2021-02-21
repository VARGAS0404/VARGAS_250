let handler = function (m) {
  // this.sendContact(m.chat, '6281227560249', 'VARGAS', m)
  this.sendContact(m.chat, '6281227560249', 'VARGAS', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
