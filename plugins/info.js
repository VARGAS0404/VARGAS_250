let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: VARGAS_250
Github: 
https://github.com/VARGAS0404/VARGAS_250

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @VARGAS_250
➥ YouTube:
https://youtube.com/channel/UCoivLxGVUuHEJ8GYkvwLHcg

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╔══✪〘 DONASI 〙✪══
╠➥ Ovo: 0812-2756-0249
╠➥ Tsel: 0812-2756-0249
╠➥ Dana: 0812-2756-0249
║>Request? Wa.me/6281227560249
╚══✪〘 INFO BOT 〙✪══
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

