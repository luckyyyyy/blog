import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js/lib/core'

import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import rust from 'highlight.js/lib/languages/rust'
import lua from 'highlight.js/lib/languages/lua'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('json', json)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', html)
hljs.registerLanguage('xml', html)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('lua', lua)
hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value
      }
      return hljs.highlightAuto(code).value
    },
  }),
)

// Strip explicit width/height from images to prevent aspect ratio issues,
// and add lazy loading for off-screen images.
const originalParse = marked.parse as (src: string, options?: unknown) => string
marked.parse = function (src: string, options?: unknown): string {
  const html = originalParse(src, options)
  return html
    .replace(/<img\b([^>]*)>/g, (_match, attrs: string) => {
      const cleaned = attrs
        .replace(/\s+width\s*=\s*["'][^"']*["']/gi, '')
        .replace(/\s+height\s*=\s*["'][^"']*["']/gi, '')
      return `<img${cleaned} loading="lazy">`
    })
} as typeof marked.parse

export { marked }
