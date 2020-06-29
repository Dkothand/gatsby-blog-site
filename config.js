'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Deva K.',
  subtitle: 'Self-taught programmer turned professional Software Engineer',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Deva Kothandapany',
    photo: '/deva.png',
    bio: 'Self-taught programmer turned professional bug creator',
    contacts: {
      // to add contacts to side bar add to graphQL query in use-site-metadata.js 
      github: 'Dkothand',
      linkedin: 'devakothandapany/',
    }
  }
};
