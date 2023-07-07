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
  useNextSeoProps() {
     return {
      titleTemplate: '%s'
    }
  },
  footer: {
    text:(
    <center>
      <div className="flex w-full flex-col items-center sm:items-start">
          <p>
            © {new Date().getFullYear()} All rights reserved <a href="https://www.firsteleven.co.za/"> by FirstEleven Inc</a>.
          </p>
      </div> 
    </center>
    ),
  }
}

export default config


