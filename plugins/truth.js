let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.truth)}”`, m)
}
handler.help = ['truth']
handler.tags = ['quotes']
handler.command = /^(truth)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.truth = [
 'menurut kamu crush kamu sekarang itu cocok gak sama kamu?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'telpon crush kamu, kalo ditanya bilang aja kepencet',
        'kalo kamu diputusin sama mantan,apa yang kamu lakuin?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'siapa yang sempet bikin lu kecewa?',
        'hal yang bikin kecewa?',
        'yang paling pendek menurut kamu tapi imut siapa?',
        'seberapa sayang kmu pada bumi?',
        'lagu yang akhir2 ini di denger?',
        'siapa nama artis yang pernah kamu bucinin diam-diam?',
        'tujuan yang lagi dipengen itu apa?',
        'punya berapa akun ig? sebutin smua',
        'kebiasaan terburuk lo pas di sekolah apa?',
        'pencapaian yang udah didapet apa aja ditahun ini?',
        'apa ketakutan terbesar kamu?',
        'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget',
        'pernah nolak orang? alasannya kenapa?',
        'suka mabar(main bareng)sama siapa?',
        'Siapa yang paling mendekati tipe pasangan idealmu di sini',
        '(bgi yg muslim) pernah ga solat seharian?',
        'hal yang paling ditakutin?',
        'pernah jadi selingkuhan orang?',
        'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?',
        'suka sayur gak?',
        'hal yang bikin seneng pas lu lagi sedih apa?',
        'pernah gak nyuri uang nyokap atau bokap? Alesanya?',
        'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?',
        'siapa first love mu?',
        'apa ketakutan terbesar kamu?',
        'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)',
        'Pernah suka sama siapa aja? berapa lama?'
        ]
