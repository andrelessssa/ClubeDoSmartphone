function funcao_pdf() {
    var pegar_dados = document.getElementById('ordem').innerHTML

    var janela = window.open( '', '', 'width=800,height=600');
    janela.document.write('<html> <head>');
    janela.document.write('<title>PDF </title> </head>');
    janela.document.write('<body> ');
    janela.document.write(pegar_dados);
    janela.document.write('</body> </html> ');
    janela.document.close();
    janela.print();

    

}