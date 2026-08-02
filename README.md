# Teniskop

Teniskop, tenis hakkinda bilgi veren Turkce bir Docusaurus sitesidir. Projede tenis kurallari, tenisin tarihcesi, Wimbledon sampiyonlari, canli skor sayfasi ve unlu tenisciler gibi icerikler yer alir.

## Ozellikler

- Tenis hakkinda temel bilgiler
- Tenisin tarihcesi
- Wimbledon sampiyonlari listesi
- Canli tenis maclari sayfasi
- Unlu erkek, kadin ve Turk tenisciler icin ayri sayfalar
- Docusaurus ile hizli gelistirme ve statik site olusturma

## Kullanilan Teknolojiler

- Docusaurus 3
- React
- MDX
- Node.js

## Kurulum

Projeyi ilk kez calistirmadan once bagimliliklari yukleyin:

```bash
npm install
```

## Gelistirme Ortaminda Calistirma

Yerel gelistirme sunucusunu baslatmak icin:

```bash
npm start
```

Site varsayilan olarak su adreste acilir:

```text
http://localhost:3000/
```

## Build Alma

Yayinlanabilir statik dosyalari olusturmak icin:

```bash
npm run build
```

Build ciktisi `build` klasorune yazilir.

## Klasor Yapisi

```text
teniskop
|-- blog
|-- docs
|   `-- tenis
|       `-- unlu-tenisciler
|-- src
|   |-- components
|   |-- css
|   `-- pages
`-- static
    `-- img
```

## Onemli Klasorler

- `docs/tenis`: Tenis ile ilgili dokuman sayfalari burada bulunur.
- `docs/tenis/unlu-tenisciler`: Unlu tenisciler kategorisinin alt sayfalari burada bulunur.
- `src/components`: React bilesenleri burada yer alir.
- `src/pages`: Ana sayfa gibi ozel sayfalar burada bulunur.
- `src/css`: Genel stil ayarlari burada tutulur.
- `static/img`: Logo, gorsel, favicon ve video gibi statik dosyalar burada bulunur.

## Yeni Icerik Ekleme

Yeni bir tenis sayfasi eklemek icin `docs/tenis` klasorune yeni bir `.md` veya `.mdx` dosyasi ekleyebilirsiniz.

Ornek:

```text
docs/tenis/yeni-sayfa.mdx
```

Sayfanin sidebar siralamasini belirlemek icin dosyanin basina front matter eklenebilir:

```mdx
---
sidebar_position: 7
title: Yeni Sayfa
---

# Yeni Sayfa
```

## Kategori Ekleme

Alt sayfalari olan bir kategori olusturmak icin `docs/tenis` altinda bir klasor acip icine `_category_.json` dosyasi ekleyin.

Ornek:

```text
docs/tenis/ornek-kategori/_category_.json
docs/tenis/ornek-kategori/alt-sayfa.mdx
```

## Notlar

- Proje Turkce icerik odaklidir.
- Docusaurus sidebar yapisi `sidebars.js` dosyasinda tanimlidir.
- Canli skor bileseni `src/components/canli.jsx` dosyasinda yer alir.
