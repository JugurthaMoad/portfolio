import React from "react";
import { renderToString } from "react-dom/server";
import PdfRender from "./pdfRender";
import { jsPDF } from "jspdf";
const ToPdf = () => {
  let ele = <PdfRender />;
  console.log("chil = ", ele);
  let elementToString = renderToString(ele);
  console.log("element = ", elementToString);
  var doc = new jsPDF();
  doc.html(elementToString, {
    callback: function (doc) {
      doc.save("resume.pdf");
    },
    x: 0,
    y: 0,
  });
};

export default ToPdf;
