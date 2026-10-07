# DJP / KPP Branding Patch

Patch ini mengubah fondasi visual template menjadi identitas DJP/KPP dengan warna resmi DJP.

## Sudah disesuaikan

- Primary blue: `#263788`
- Dark blue: `#212C5F`
- Navy: `#070F32`
- Yellow: `#FFE804`
- Yellow/Gold: `#FFC91B`
- Gold: `#C89221`
- `layout.tsx` menggunakan theme color DJP dan click-spark kuning.
- `globals.css` tidak lagi memakai lime/charcoal sebagai identitas utama; alias lama dipertahankan hanya agar komponen template lama tetap kompatibel.
- Animasi existing tetap dipertahankan.
- Disediakan `components/djp-logo.tsx` sebagai wrapper untuk aset logo resmi.

## Logo resmi DJP

Jangan membuat ulang logo secara manual.

Unduh paket **Download Logo Branding DJP Kemenkeu.zip** dari halaman resmi:
https://www.pajak.go.id/id/logo-direktorat-jenderal-pajak

Ambil konfigurasi horizontal resmi dan letakkan sebagai:

`public/logo-djp-horizontal.svg`

Pedoman DJP menyatakan logo berwarna digunakan pada latar putih, sedangkan versi monokrom digunakan pada latar selain putih/foto/video. Logogram dan logotip juga merupakan satu kesatuan dan tidak boleh dipisahkan.

## Catatan implementasi

- Navbar putih: gunakan logo DJP berwarna resmi.
- Section biru/navy: jangan menaruh logo berwarna di atas background tersebut; gunakan versi monokrom resmi jika memang perlu.
- Jangan mengubah proporsi, warna, susunan, atau memisahkan logogram dari logotip.
- Komponen visual utama (`navigation`, `hero-section`, `flavor-carousel`, `bento-grid`, `activations-section`, `social-section`, `footer`) masih perlu diterapkan pada project utama karena patch ini tidak mengandung file komponen tersebut.
