import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>Vision</b></span>,
  docsRepositoryBase: 'https://github.com/firstelevenorg/vision/tree/master',
  project: {
    link: 'https://github.com/firstelevenorg/vision',
  },
  chat: {
    link: 'https://discord.gg/TXEu2nFyAk',
  },
  footer: {
    text: 'Made by FirstEleven',
  },
  useNextSeoProps() {
     return {
      titleTemplate: '%s'
    }
  },
}

export default config
