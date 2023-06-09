// Mantequilla
// ===========
// This script contains important functions to activate certain
// features on blog posts.

const chroma = () => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.type = 'text/css'
  stylesheet.href = '../../en/assets/css/syntax.css'
  document.head.appendChild(stylesheet)
}

const chromaInt = () => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.type = 'text/css'
  stylesheet.href = '../../../en/assets/css/syntax.css'
  document.head.appendChild(stylesheet)
}

const katex = () => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.type = 'text/css'
  stylesheet.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css'
  stylesheet.integrity = 'sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC'
  stylesheet.crossOrigin = 'anonymous'

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js'
  script.integrity = 'sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja'
  script.crossOrigin = 'anonymous'

  const render = document.createElement('script')
  render.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js'
  render.integrity = 'sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR'
  render.crossOrigin = 'anonymous'
  render.defer = true

  document.head.appendChild(stylesheet)
  document.head.appendChild(script)
  document.head.appendChild(render)

  // KaTeX
  // run after render loads and document body loads
  render.onload = _e => {
    renderMathInElement(document.body, {
      // customized options
      // • auto-render specific keys, e.g.:
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      // • rendering keys, e.g.:
      throwOnError: false
    })
  }
}

const themes = (interactivesIDs, imgs) => {
  // Dark embed toggle
  let dark = false

  let makeDark = () => {
    for (const ID of interactivesIDs) {
      document.getElementById(ID).contentWindow.toggleDark()
    }
    for (const img of imgs) {
      document.getElementById(img).src = `assets/${img}Inv.png`
    }
  }
  let makeLight = () => {
    for (const ID of interactivesIDs) {
      document.getElementById(ID).contentWindow.toggleLight()
    }
    for (const img of imgs) {
      document.getElementById(img).src = `assets/${img}.png`
    }
  }
  let detectDark = () => {
    let isDark = document.querySelector('html').classList.contains('dark')
    if (isDark != dark) {
      try {
        if (isDark) makeDark()
        else makeLight()
        dark = isDark
      } catch (e) { }
    }
    setTimeout(detectDark, 1000)
  }; detectDark()
}
