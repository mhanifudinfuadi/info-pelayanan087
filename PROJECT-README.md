# INFO-LAYANAN087 — PROJECT UTAMA

Folder ini adalah **satu-satunya source of truth** untuk website:
https://info-layanan087.vercel.app/

## Struktur kerja

Jangan lagi mengedit `info-layanan087-components-fixed` atau
`info-layanan087-cta-routing-updated`. Kedua folder tersebut sudah
digabungkan ke project utama dan tidak diperlukan lagi.

Untuk pengembangan sehari-hari, cukup buka folder ini di VS Code:

    info-layanan087/

Kemudian:

    npm install
    npm run dev

Project menggunakan pnpm lockfile, sehingga jika pnpm tersedia, lebih baik:

    pnpm install
    pnpm dev

## Catatan penggabungan

- Basis project: `info-layanan087`
- Patch CTA/routing terbaru dari `info-layanan087-cta-routing-updated`
  telah diterapkan ke `components/activations-section.tsx`.
- Versi `hero-section.tsx` dari project utama dipertahankan karena lebih
  lengkap daripada salinan patch.
- `info-layanan087-components-fixed` tidak dijadikan basis karena beberapa
  versi di dalamnya justru menghapus link/CTA yang sudah aktif.
- `node_modules/` dan `.next/` sengaja tidak disertakan agar folder tetap
  bersih dan portable. Jalankan install dependency sekali setelah membuka
  project di komputer.
- `.git/` dipertahankan agar hubungan repository Git tetap tersedia.

## Alur perubahan konten

1. Buka folder `info-layanan087` ini di VS Code.
2. Edit file di `app/` atau `components/` sesuai kebutuhan.
3. Jalankan `npm run dev` / `pnpm dev`.
4. Setelah selesai, commit dan push ke repository Git yang terhubung dengan Vercel.
5. Vercel akan melakukan deployment dari project utama ini.

## Prinsip

Mulai sekarang tidak perlu copy-paste component dari folder lain.
Semua perubahan website harus dilakukan langsung di folder project utama ini.
