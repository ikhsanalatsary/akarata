# Akarata

[![Build Status](https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master)](https://travis-ci.org/ikhsanalatsary/akarata)
[![Depedencies Status](https://david-dm.org/ikhsanalatsary/akarata.svg)](https://david-dm.org/ikhsanalatsary/akarata)

[README English version](./README.en.md)

Akarata adalah pustaka JavaScript untuk mengambil akar kata/suku kata(stem) dari kata yang berimbuhan awal ataupun akhir pada bahasa Indonesia. Akarata diambil dari kata "akar kata", agar lebih pendek saat penyebutannya.

Akarata diilhami dari stem kata bahasa Indonesia berdasarkan Porter Stemmer, dengan menggunakan algoritma yang dipaparkan dalam _paper_ [**A Study of Stemming Effects on Information Retrieval in Bahasa Indonesia**](http://www.illc.uva.nl/Publications/ResearchReports/MoL-2003-02.text.pdf), oleh Fadillah Z Tala.

## Dibutuhkan
Versi Node.js >= 8.5

## Instalasi

npm:

    npm install --save tslib akarata

yarn:

    yarn add tslib akarata

## Penggunaan

### Impor pustaka akarata

ES2015+ / Babel / TypeScript:

    // impor pustakanya
    import * as akarata from 'akarata';
    // or
    import akarata from 'akarata';

CommonJS/ UMD / NodeJS:

    // impor pustakanya
    var akarata = require('akarata');

Michael Jackson script/ MJS / NodeJS `experimental-modules`:

    // impor pustakanya
    import * as akarata from 'akarata';
    // or
    import akarata from 'akarata';

`unpkg.com`:

    // sejak akarata versi > 0.1.5
    // unpkg.com/:package@:version/:file
    // sebagai contoh
    import * as akarata from 'https://unpkg.com/akarata@0.1.6/dist/bundles/index.esm.min.js';
    // atau
    import akarata from 'https://unpkg.com/akarata@0.1.6/dist/bundles/index.esm.min.js';

    // atau url absolut, secara implisit ke bundles/index.umd.js
    import akarata from 'https://unpkg.com/akarata';

### Kemudian bisa digunakan:

    // panggil fungsi stem
    akarata.stem('menikah'); // nikah

Atau mencobanya langsung dari web: [akarata.netlify.com](https://akarata.netlify.com).

## Masalah

Karena pustaka ini masih tahap development, jika diketahui ada masalah silakan buat [tiket baru](https://github.com/ikhsanalatsary/akarata/issues/new)

## Berkontribusi

Awalnya, pustaka ini merupakan implementasi dari sistem penganalisis untuk Bahasa Indonesia, dari proyek [Apache Lucene](http://lucene.apache.org/), ke dalam bahasa JavaScript.

### Referensi

1. [Situs Resmi Kamus Bahasa Indonesia](http://bahasa.kemdiknas.go.id/kbbi/index.php)
2. Untuk mencari dan memverifikasi kata Bahasa Indonesia, [Kateglo Bahtera](http://kateglo.com/)
3. Artikel Wikipedia yang berjudul [Prefiks dalam Bahasa Indonesia](http://id.wikipedia.org/wiki/Prefiks_dalam_bahasa_Indonesia)

### Langkah-langkah

1. _Fork_ proyek ini
2. Buat branch untuk fitur Anda (`git checkout -b my-new-feature`)
3. _Commit_ perubahan-perubahan yang Anda buat (`git commit -am 'Tambahkan fitur baru'`)
4. _Push_ ke branch itu (`git push origin my-new-feature`)
5. Ajukan **_Pull Request_** baru

## Terima kasih

Setelah bersyukur kepada Allah Subhanahu Wa Ta'ala, kami ingin mengucapkan terima kasih kepada:

- Fadillah Z Tala & [Apache Lucene](http://lucene.apache.org/) sehingga kami dapat mulai membuat pustaka ini
- Penyedia [Kateglo Bahtera](http://kateglo.com/), karena telah menyediakan API nya sehingga saya bisa memilih & memisahkan kata-kata ambigu, dan akhirnya memeriksa validitas hasil kata.
- Adinda Praditya & [Indonesian Stemmer](https://github.com/apraditya/indonesian_stemmer). Beliau sebagai _coach_ dan berkat pustakanya maka pustaka ini bisa diimplementasi ke dalam bahasa JavaScript.
