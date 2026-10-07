import type { ImgHTMLAttributes } from "react"

/**
 * Official DJP logo wrapper.
 *
 * Put the official asset downloaded from DJP's branding package at:
 *   /public/logo-djp-horizontal.svg
 *
 * Do not redraw, crop, separate, recolor, or alter the official logogram/logotype.
 * The horizontal configuration is intended for spaces where the standard vertical
 * configuration cannot be used because of space/technical constraints.
 */
export function DjpLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/logo-djp-horizontal.svg"
      alt="Direktorat Jenderal Pajak"
      {...props}
    />
  )
}
