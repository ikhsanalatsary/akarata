# Akarata

[![Code Climate](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/gpa.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata)
[![Test Coverage](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/coverage.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata/coverage)
[![Build Status](https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master)](https://travis-ci.org/ikhsanalatsary/akarata)

Akarata adalah Library Javascript untuk mengambil akar kata/suku kata(stem) dari kata yang berimbuhan awal ataupun akhir pada bahasa Indonesia. Akarata diambil dari kata "akar kata", agar lebih pendek saat penyebutannya.

Akarata diilhami dari stem kata bahasa Indonesia berdasarkan Porter Stemmer, dengan menggunakan algoritma yang dipaparkan dalam paper [**A Study of Stemming Effects on Information Retrieval in Bahasa Indonesia**](http://www.illc.uva.nl/Publications/ResearchReports/MoL-2003-02.text.pdf), oleh Fadillah Z Tala.

## Instalasi

	npm install --save akarata

## Penggunaan

	use Babel:
		import Akarata from 'akarata';
		Akarata.stem('menikah'); // nikah

	Regular Javascript:
		var Akarata = require('akarata');
		Akarata.stem('belajar'); // ajar


## Masalah
Karena library ini masih tahap development, jika diketahui ada masalah silahkan buat [tiket baru](https://github.com/ikhsanalatsary/akarata/issues/new)

## Berkontribusi
Awalnya, library ini merupakan implementasi dari sistem penganalisa untuk bahasa Indonesia, dari proyek [Apache Lucene](http://lucene.apache.org/), ke dalam bahasa JavaScript.

### Referensi
1. [Situs Resmi Kamus Bahasa Indonesia](http://bahasa.kemdiknas.go.id/kbbi/index.php)
2. Untuk mencari dan memverifikasi kata indonesia, [Kateglo Bahtera](http://kateglo.bahtera.org/)
3. Artikel Wikipedia yang berjudul [Prefiks dalam Bahasa Indonesia](http://id.wikipedia.org/wiki/Prefiks_dalam_bahasa_Indonesia) 

### Langkah-langkah
1. *Fork* proyek ini
2. Buat branch untuk fitur anda (`git checkout -b my-new-feature`)
3. *Commit* perubahan-perubahan yang anda buat (`git commit -am 'Tambahkan fitur baru'`)
4. *Push* ke branch itu (`git push origin my-new-feature`)
5. Ajukan ***Pull Request*** baru

## Terima kasih
Setelah bersyukur kepada Allah Subhanahu Wa Ta'ala, kami ingin mengucapkan terima kasih kepada:

- Fadillah Z Tala & [Apache Lucene](http://lucene.apache.org/) sehingga kami dapat mulai membuat library ini
- Penyedia [Kateglo Bahtera](http://kateglo.bahtera.org/), karena telah menyediakan API nya sehingga saya bisa memilih & memisahkan kata-kata ambigu, dan akhirnya memeriksa validitas hasil kata.
- Adinda Praditya & [Indonesian Stemmer](https://github.com/apraditya/indonesian_stemmer). Beliau sebagai mentor dan berkat kodenya maka library ini bisa diimplementasi ke dalam bahasa JavaScript.


