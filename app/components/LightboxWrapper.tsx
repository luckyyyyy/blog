'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './LightboxWrapper.css'

export default function LightboxWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(-1)
  const [slides, setSlides] = useState<Array<{ src: string }>>([])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const images = container.querySelectorAll<HTMLImageElement>('.markdown-body img')
    const handler = (img: HTMLImageElement) => (e: Event) => {
      e.preventDefault()
      const allImages = Array.from(container.querySelectorAll<HTMLImageElement>('.markdown-body img'))
      setSlides(allImages.map(i => ({ src: i.src })))
      setIndex(allImages.indexOf(img))
    }
    const cleanups: Array<() => void> = []
    images.forEach(img => {
      img.classList.add('lightbox-img')
      const h = handler(img)
      img.addEventListener('click', h)
      cleanups.push(() => img.removeEventListener('click', h))
    })
    return () => cleanups.forEach(fn => fn())
  }, [children])

  const close = useCallback(() => setIndex(-1), [])

  return (
    <div ref={ref}>
      {children}
      <Lightbox open={index >= 1} close={close} index={index} slides={slides} />
    </div>
  )
}
