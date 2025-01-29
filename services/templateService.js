const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const mjml = require("mjml");

// Cargar la plantilla MJML
const templatePath = path.join(__dirname, "../templates/newsletter.mjml");
const templateSource = fs.readFileSync(templatePath, "utf8");
const compiledTemplate = handlebars.compile(templateSource);

// Función para generar HTML del email
function generateEmailHTML(data) {
  const mjmlWithData = compiledTemplate(data);
  return mjml(mjmlWithData).html;
}

module.exports = { generateEmailHTML };
