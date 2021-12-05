const description =
  "I am a student who spends most all of his free time doing open source projects/websites/softwares."

export default {
  title: 'rexulec. | developer and student',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    /* Twitter */
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary',
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@rexulec',
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@rexulec',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'rexulec.',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: '/icon.png',
    },
    /* Open-Graph */
    {
      hid: 'og:title',
      name: 'og:title',
      content: 'rexulec.',
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: 'rexulec.',
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: 'https://rexulec.com/icon.png',
    },
    /* Others */
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: '#059669',
    },
  ].map((i) => {
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
}
