import { useEffect } from 'react'

type SEO = {
  title?: string
  description?: string
  url?: string
  image?: string
  locale?: string
}

export function useSEO({ title, description, url, image, locale }: SEO) {
  useEffect(() => {
    if (title) document.title = title

    const upsertMeta = (attr: 'name' | 'property', key: string, content?: string) => {
      if (!content) return
      const sel = `meta[${attr}="${key}"]`
      let el = document.querySelector<HTMLMetaElement>(sel)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    if (description) upsertMeta('name', 'description', description)

    if (title)       upsertMeta('property', 'og:title', title)
    if (description) upsertMeta('property', 'og:description', description)
    if (url)         upsertMeta('property', 'og:url', url)
    if (image)       upsertMeta('property', 'og:image', image)
    if (locale)      upsertMeta('property', 'og:locale', locale)


    if (url) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', url)
    }
  }, [title, description, url, image, locale])
}
