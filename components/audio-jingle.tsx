"use client"

import { useEffect, useRef } from "react"

/**
 * Audio jingle component.
 *
 * Strategy:
 * 1. Try to autoplay immediately on mount (works when browser allows autoplay).
 * 2. If autoplay is blocked (most browsers require a user gesture), wait for the
 *    first click/tap anywhere on the document, then start the audio.
 * 3. Once started, the audio loops forever and is NOT stopped by clicks on
 *    buttons/links/sections — the jingle keeps playing throughout the visit.
 */
export function AudioJingle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.35
    audio.preload = "auto"

    let cancelled = false

    const startAudio = () => {
      if (startedRef.current || cancelled) return
      audio
        .play()
        .then(() => {
          startedRef.current = true
        })
        .catch(() => {
          // Autoplay blocked — wait for the first user gesture.
        })
    }

    // Attempt autoplay on mount.
    startAudio()

    // Fallback: start on first user gesture anywhere on the page.
    const onGesture = () => {
      if (startedRef.current) return
      startAudio()
      // Remove listeners once the gesture is handled.
      document.removeEventListener("click", onGesture)
      document.removeEventListener("keydown", onGesture)
      document.removeEventListener("touchstart", onGesture)
      document.removeEventListener("scroll", onGesture)
    }

    document.addEventListener("click", onGesture)
    document.addEventListener("keydown", onGesture)
    document.addEventListener("touchstart", onGesture)
    document.addEventListener("scroll", onGesture, { passive: true })

    return () => {
      cancelled = true
      document.removeEventListener("click", onGesture)
      document.removeEventListener("keydown", onGesture)
      document.removeEventListener("touchstart", onGesture)
      document.removeEventListener("scroll", onGesture)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/audio/[Jingle] Pajak Tumbuh, Indonesia Tangguh (Video Lirik) [l504C9mVuLk].mp3"
      preload="auto"
      playsInline
      muted={false}
      // Hidden from view — no visible controls.
      style={{ display: "none" }}
    />
  )
}