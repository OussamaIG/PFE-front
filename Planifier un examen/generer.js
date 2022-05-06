async function generatePDF(){
    document.getElementById("buttongenerer").innerHTML = "Telechargement encore...";

    //downloading
    var element = document.getElementById("print");
    var doc = new jsPDF('l', 'pt');

    //html to canvas
    await html2canvas(element, {
        width: 1000
        
    }).then((canvas) => {
        doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 100, 700);
    })

    doc.save("Document.pdf");

    document.getElementById("buttongenerer").innerHTML = "Générer";
}