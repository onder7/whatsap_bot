# WhatsApp Bot

Bu bot, WhatsApp üzerinde çalışan basit ve kullanışlı bir bot uygulamasıdır. Temel komutlar, hesap makinesi ve çeşitli eğlenceli özellikler içerir.

## 🚀 Özellikler

- 📱 Temel komutlar (!merhaba, !yardım)
- 🧮 Hesap makinesi
- ⏰ Saat ve tarih gösterimi
- 🎮 Basit oyunlar

## 📋 Komutlar

| Komut | Açıklama |
|-------|-----------|
| !test | Bot çalışıyor mu kontrol et |
| !merhaba | Selamlama |
| !yardım | Komut listesi |
| !saat | Güncel saati göster |
| !hesapla | Hesap makinesi (örn: !hesapla 5+3) |
| !oyun | Oyun menüsünü göster |

## 🛠️ Kurulum

### Gereksinimler

- [Node.js](https://nodejs.org/) (v14 veya üstü)
- [Google Chrome](https://www.google.com/chrome/)
- WhatsApp hesabı

### Adımlar

1. Repoyu klonlayın:
```bash
git clone [https://github.com/onder7/whatsapp-bot.git](https://github.com/onder7/whatsap_bot)
cd whatsapp-bot
```

2. Gerekli paketleri yükleyin:
```bash
npm install
```

3. Botu başlatın:
```bash
npm start
```

4. Görüntülenen QR kodu WhatsApp'tan tarayın:
   - WhatsApp'ı açın
   - "Bağlı Cihazlar" bölümüne gidin
   - "Cihaz Ekle"ye tıklayın
   - QR kodu tarayın

## ⚙️ Yapılandırma

`index.js` dosyasında bulunan yapılandırma ayarlarını değiştirebilirsiniz:

```javascript
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
```

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir özellik branch'i oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: XYZ'`)
4. Branch'inizi push edin (`git push origin yeni-ozellik`)
5. Pull Request oluşturun

## 📝 Yapılacaklar Listesi

- [ ] Sayı tahmin oyunu
- [ ] Taş kağıt makas oyunu
- [ ] Hatırlatıcı özelliği
- [ ] Döviz kuru sorgulama
- [ ] Wikipedia araması
- [ ] Grup yönetimi komutları

## ⚠️ Notlar

- Bot'u çalıştırmak için Chrome tarayıcısı gereklidir
- WhatsApp Web versiyonuna bağlı olarak bazı özellikler değişebilir
- Bot'u 7/24 çalışır durumda tutmak için bir sunucu gerekebilir

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

## 🙏 Teşekkürler

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - WhatsApp Web API
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) - Terminal QR kod oluşturucu
- [puppeteer](https://github.com/puppeteer/puppeteer) - Headless Chrome kontrolü

## 📞 İletişim

Teknik destek için onder7@gmail.com iletişime geçin.
Önder AKÖZ / System & Network Specialist

## 🔗 Bağlantılar

- [WhatsApp Web](https://web.whatsapp.com/)
- [Node.js](https://nodejs.org/)
- [WhatsApp Business API](https://www.whatsapp.com/business/api)
