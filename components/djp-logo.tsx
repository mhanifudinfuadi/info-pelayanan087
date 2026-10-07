import type { ImgHTMLAttributes } from "react"

export function DjpLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/logo-djp-horizontal.svg"
      alt="Direktorat Jenderal Pajak"
      {...props}
    />
  )
}
