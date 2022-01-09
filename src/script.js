async function downloadContent() {
    let element = document.getElementById("content");
    const { jsPDF } = require("jspdf"); // will automatically load the node version
    const html2canvas = require("html2canvas");
    const doc = new jsPDF();
    // doc.printHeaderRow(1, false);
    
    // text and hyper link examples
    doc.text("jsPdf Tutorial - Sample PDF", 10, 10);
    doc.setTextColor("0645AD");
    doc.textWithLink("Hyper link text: FindBestOpenSource", 10, 25, {
        url: "https://findbestopensource.com/",
    });
    doc.setTextColor(100);
    doc.text('findbestopensource', 50, doc.internal.pageSize.height - 30, {'align': 'left'}, 1);
    console.log(element);

    // converting chart elements 
    const canvas = document.getElementById("myCanvas");
    const canvaselement = await html2canvas(canvas, {useCORS: true, allowTaint: true});

    // generating html to canvas element 
    doc.html(element, {
        margin: 30,
        callback: function (doc) {
            doc.insertPage(2);
            doc.addImage(canvaselement, 'png', 10, 130);
            doc.save("sampletutorial.pdf");
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("dom content loaded");
    // hook export options and create chart after DOM loaded...
    document.getElementById("downloadpdf").onclick = downloadContent;
    createChart();
  });

//create simple scatter chart without any chart library 
function createChart() {
    const canvas = document.getElementById("myCanvas");
    canvas.style.background = "floralwhite";
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height)

    const xArray = [50,60,70,80,90,100,110,120,130,140,150];
    const yArray = [7,8,8,9,9,9,10,11,14,14,15];

    ctx.fillStyle = "red";
    for (let i = 0; i < xArray.length-1; i++) {
        let x = xArray[i]*400/150;
        let y = yArray[i]*400/15;
        ctx.beginPath();
        ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

// it is just test function to create canvas into image element. *not used*
function getChartData() {
    const canvas = document.getElementById("myCanvas");
    let imageData = canvas.toDataURL("image/jpeg", 1.0);
    return imageData;
}