const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

// Handlebars values can be absent or arrays; normalize them before rendering.
const toText = value => {
  if (value == null) return '';
  return Array.isArray(value) ? value.join('\n') : String(value);
};

// Render block Markdown. This can produce <p> elements.
const markdownRender = text => new SafeString(markdown.render(toText(text)));

// Render inline Markdown without wrapping the result in <p> elements.
const markdownRenderInline = text =>
  new SafeString(markdown.renderInline(toText(text)));

module.exports = { markdownRender, markdownRenderInline };