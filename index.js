const { Client, NoAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Bot yapılandırması
const client = new Client({
    authStrategy: new NoAuth(),
    puppeteer: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--disable-gpu'
        ],
        headless: true
    }
});

// QR Kod Oluşturma
client.on('qr', (qr) => {
    console.clear();
    console.log('QR Kodu tarayın:');
    qrcode.generate(qr, { small: true });
});

// Bot Hazır Olduğunda
client.on('ready', () => {
    console.clear();
    console.log('✅ Bot aktif ve hazır!');
    console.log('Komutlar:');
    console.log('!test - Bot testi');
    console.log('!yardım - Komut listesi');
    console.log('!merhaba - Selamlama');
});

// Kimlik doğrulama başarılı
client.on('authenticated', () => {
    console.log('✅ WhatsApp bağlantısı başarılı!');
});

// Bağlantı kesildiğinde
client.on('disconnected', (reason) => {
    console.log('❌ Bağlantı kesildi:', reason);
    // 3 saniye sonra yeniden bağlan
    setTimeout(() => client.initialize(), 3000);
});

// Mesaj geldiğinde
client.on('message', async (message) => {
    try {
        const content = message.body.toLowerCase();
        console.log('Yeni mesaj:', content); // Debug için

        switch(content) {
            case '!test':
                await message.reply('Bot çalışıyor! ✅');
                break;

            case '!merhaba':
                await message.reply('Merhaba! Ben bir botum 😊');
                break;

            case '!yardım':
                await message.reply(
                    '*Bot Komutları*\n\n' +
                    '!test - Bot çalışıyor mu kontrol et\n' +
                    '!merhaba - Selamlama\n' +
                    '!yardım - Bu menüyü göster\n' +
                    '!saat - Güncel saati göster\n' +
                    '!hesapla - Hesap makinesi (örn: !hesapla 5+3)\n' +
                    '!oyun - Oyun menüsünü göster'
                );
                break;

            case '!saat':
                await message.reply(
                    `⏰ Şu anki saat: ${new Date().toLocaleTimeString('tr-TR')}`
                );
                break;

            case '!oyun':
                await message.reply(
                    '*Oyun Komutları*\n\n' +
                    '!sayi - Sayı tahmin oyunu başlat\n' +
                    '!tkm - Taş Kağıt Makas oyunu'
                );
                break;
        }

        // Hesap makinesi
        if (content.startsWith('!hesapla ')) {
            const işlem = content.slice(9); // "!hesapla " kısmını kes
            try {
                // Sadece güvenli matematiksel işlemlere izin ver
                if (/^[0-9+\-*/(). ]+$/.test(işlem)) {
                    const sonuç = eval(işlem);
                    await message.reply(`📊 ${işlem} = ${sonuç}`);
                } else {
                    await message.reply('❌ Geçersiz işlem! Sadece sayılar ve +,-,*,/ kullanılabilir.');
                }
            } catch {
                await message.reply('❌ Hesaplama hatası! İşlemi kontrol edin.');
            }
        }

    } catch (error) {
        console.error('❌ Mesaj işleme hatası:', error);
    }
});

// Botu başlat
console.log('Bot başlatılıyor...');
client.initialize()
    .then(() => console.log('✅ Bot başlatıldı!'))
    .catch(err => console.error('❌ Başlatma hatası:', err));
