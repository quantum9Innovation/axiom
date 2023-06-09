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
