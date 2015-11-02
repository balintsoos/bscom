var Section = require('./Section.js');

module.exports = function (App) {
  return [
    new Section(App, {
      id: 'aboutme',
      title: 'About Me',
      header: 'About Me',
      bg: 'aboutme-bg'
    }),
    new Section(App, {
      id: 'work',
      title: 'Work',
      header: "I've worked with",
      bg: 'work-bg'
    }),
    new Section(App, {
      id: 'projects',
      title: 'Projects',
      header: 'My recent projects',
      bg: 'projects-bg'
    })
  ];
};