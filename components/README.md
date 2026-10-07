# Components — Info Layanan KPP / DJP

Semua section visual utama dari template telah dialihkan dari identitas GiGi Energy ke pengalaman Info Layanan KPP/DJP.

## Komponen yang diubah
- navigation.tsx
- hero-section.tsx
- flavor-carousel.tsx → layanan utama
- bento-grid.tsx → quick service cards
- activations-section.tsx → cara mulai + kanal online/offline
- social-section.tsx → kanal resmi/edukasi
- lifestyle-section.tsx → segmentasi pengguna
- footer.tsx
- djp-logo.tsx

Komponen teknis:
- lenis-provider.tsx
- click-spark.tsx
- theme-provider.tsx

tetap dipertahankan agar animasi dan infrastruktur template tidak rusak.

## Logo resmi DJP
Komponen mengharapkan dua aset:
- `/public/logo-djp-horizontal.svg` untuk background putih
- `/public/logo-djp-horizontal-white.svg` untuk background navy

Gunakan file resmi dari halaman Logo Direktorat Jenderal Pajak:
https://www.pajak.go.id/id/logo-direktorat-jenderal-pajak

Jangan menggambar ulang, memisahkan, merecolor, atau mengubah proporsi logo.
Pedoman resmi DJP menyatakan logo berwarna digunakan pada background putih dan logo monokrom digunakan pada background selain putih/foto/video.

Catatan: website ini adalah antarmuka informasi/edukasi dan harus tetap mengarahkan transaksi/informasi otoritatif ke kanal resmi DJP.
