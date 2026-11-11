const { SafeString } = require('handlebars');
const { markdownRender } = require('./markdown-render');

// Keep the existing helper name for templates, but let markdown-it
// handle paragraphs instead of manually splitting and wrapping lines.
const paragraphSplit = text => markdownRender(text);

module.exports = { paragraphSplit };
