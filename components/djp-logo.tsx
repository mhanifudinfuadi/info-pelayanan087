import Image from "next/image"

export function DjpLogo() {
  return (
   <div className="relative h-16 w-28 sm:h-[72px] sm:w-32">
  <Image
    src="/images/logoweb.png"
    alt="Direktorat Jenderal Pajak"
    width={400}
    height={240}
    className="h-16 w-auto object-contain sm:h-[72px]"
  />
</div>
  )
}