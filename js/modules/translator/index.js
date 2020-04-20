export default class Translator {
  constructor (options = {}) {
    const defaultConfig = {
      persist: false,
      languages: ['en'],
      defaultLanguage: 'en',
      detectLanguage: true,
      filesLocation: '/i18n'
    }

    this._options = {...defaultConfig, ...options}
    this._lang = this.getLanguage()
    this._elements = document.querySelectorAll('[data-i18n]')
  }

  getLanguage () {
    if (!this._options.detectLanguage) {
      return this._options.defaultLanguage
    }

    const stored = localStorage.getItem('language')
    if (this._options.persist && stored) return stored

    const lang = navigator.languages ? navigator.languages[0] : navigator.language
    return lang.substr(0, 2)
  }

  load (lang = null) {
    if (lang) {
      if (!this._options.languages.includes(lang)) return
      this._lang = lang
    }

    const path = `${this._options.filesLocation}/${this._lang}.json`

    fetch(path)
      .then(response => response.json())
      .then(translation => {
        this.translate(translation)
        this.toggleLangTag()

        if (this._options.persist) {
          localStorage.setItem('language', this._lang)
        }
      })
      .catch(() => {
        console.error(`Could not load ${path}. Please make sure that the path is correct.`)
      })
  }

  toggleLangTag () {
    if (document.documentElement.lang !== this._lang) {
      document.documentElement.lang = this._lang
    }
  }

  translate (translation) {
    const replace = element => {
      const text = element.dataset.i18n.split('.').reduce((obj, i) => obj[i], translation)
      if (text) {
        element.innerHTML = text
      } else {
        element.innerHTML = element.dataset.i18n
        console.error(`Could not find text for ${element.dataset.i18n}`)
      }
    }

    this._elements.forEach(replace)
  }
}
