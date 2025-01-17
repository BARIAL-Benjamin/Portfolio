const { default: PDF } = await import("./modules/pdf.mjs");

const elToNotDisplay = document.querySelectorAll("#skillsForm, #skillsInfo, button, #copyright, h2");
const content = document.getElementById("content");
const footer = document.querySelector("footer");
await PDF.createButtonPDF(footer, content, elToNotDisplay);