# Akarata

[![Code Climate](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/gpa.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata)
[![Test Coverage](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/coverage.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata/coverage)
[![Build Status](https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master)](https://travis-ci.org/ikhsanalatsary/akarata)
[![Depedencies Status](https://david-dm.org/ikhsanalatsary/akarata.svg)](https://david-dm.org/ikhsanalatsary/akarata) [![Greenkeeper badge](https://badges.greenkeeper.io/ikhsanalatsary/akarata.svg)](https://greenkeeper.io/)

Akarata adalah pustaka JavaScript untuk mengambil akar kata/suku kata(stem) dari kata yang berimbuhan awal ataupun akhir pada bahasa Indonesia. Akarata diambil dari kata "akar kata", agar lebih pendek saat penyebutannya.

Akarata diilhami dari stem kata bahasa Indonesia berdasarkan Porter Stemmer, dengan menggunakan algoritma yang dipaparkan dalam *paper* [**A Study of Stemming Effects on Information Retrieval in Bahasa Indonesia**](http://www.illc.uva.nl/Publications/ResearchReports/MoL-2003-02.text.pdf), oleh Fadillah Z Tala.

## Instalasi

npm:

	npm install --save akarata

yarn:

	yarn add akarata

## Penggunaan

Babel:

	import akarata from 'akarata';
	akarata.stem('menikah'); // nikah


JavaScript Biasa:

	var akarata = require('akarata');
	akarata.stem('belajar'); // ajar

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
1. *Fork* proyek ini
2. Buat branch untuk fitur Anda (`git checkout -b my-new-feature`)
3. *Commit* perubahan-perubahan yang Anda buat (`git commit -am 'Tambahkan fitur baru'`)
4. *Push* ke branch itu (`git push origin my-new-feature`)
5. Ajukan ***Pull Request*** baru

## Terima kasih
Setelah bersyukur kepada Allah Subhanahu Wa Ta'ala, kami ingin mengucapkan terima kasih kepada:

- Fadillah Z Tala & [Apache Lucene](http://lucene.apache.org/) sehingga kami dapat mulai membuat pustaka ini
- Penyedia [Kateglo Bahtera](http://kateglo.com/), karena telah menyediakan API nya sehingga saya bisa memilih & memisahkan kata-kata ambigu, dan akhirnya memeriksa validitas hasil kata.
- Adinda Praditya & [Indonesian Stemmer](https://github.com/apraditya/indonesian_stemmer). Beliau sebagai *coach* dan berkat pustakanya maka pustaka ini bisa diimplementasi ke dalam bahasa JavaScript.
