# Hooks — DJP/KPP project

Dua hook ini tidak membutuhkan styling/warna DJP secara langsung.

- `use-mobile.ts`: mempertahankan breakpoint 768px dan API `useIsMobile()`.
- `use-toast.ts`: mempertahankan API `useToast()` dan `toast()`.
- Styling toast tetap berada di `components/ui/toast.tsx`, sehingga theme DJP/KPP dapat diterapkan di layer UI tanpa mengubah logic hook.

Perubahan pada `use-toast.ts` hanya berupa perapian format dan komentar agar lebih jelas; kontrak publiknya dipertahankan.
