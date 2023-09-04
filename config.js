const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	// No Apikey 
}

global.APIKeys = {
	// No apikey 
}

// Other

global.namabot = ['OSBotz']
global.namaowner = ['ozijayawardana']
global.owner = ['6289528652225']
global.premium = ['6289528652225']
global.Log = '\n×OZII×SPEDZZ☆'//console log gerak nya:v
global.packname = '© Powered By'
global.author = 'OS || BOTZ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© OSbotz made by ozijayawardana'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Adminin botnya dlu dong🗿',
    owner: 'Fitur Khusus Owner gantengg😍',
    group: 'ini fitur gc bang',
    private: 'pc bang jan disini!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'bentarrr...',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.'
}

global.anticalltext = `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`
global.jbtextscan = 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik'


global.limitawal = {
	free: "100",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/ozii.png')
global.qris = fs.readFileSync('./media/img/qris.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
