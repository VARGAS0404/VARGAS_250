const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan laporan!!', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ R E Q ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('6281227560249@s.whatsapp.net', teks1, MessageType.text)
    conn.fakeReply(m.chat, `Req Berhasil Terkirim Ke Owner`, '0@s.whatsapp.net', `*MIKU TERVERIFIKASI*`, 'status@broadcast')
}
handler.help = ['req <pesan>', 'request <pasan>']
handler.tags = ['info']
handler.command = /^(request|req)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
