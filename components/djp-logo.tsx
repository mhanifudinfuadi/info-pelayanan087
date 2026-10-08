import Image from "next/image"

export function DjpLogo() {
  return (
    <Image
      src="/images/logoweb.png"
      alt="Direktorat Jenderal Pajak"
      width={180}
      height={60}
      className="h-auto w-auto object-contain"
    />
  )
}