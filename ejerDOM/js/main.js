let getResutlHTML = () => {
    return `<div class="resultados">
        <h2>RESULTADOS</h2>
        <p>Numero de enlaces: ${links}</p>
        <p>El primer enlace es: ${p_url}</p>
        <p>El ultimo enlace es: ${u_url}</p>
    </div>`
}

let renderPage = () => {

    let links = document.links.length;
    let nodes = document.body.childNodes;
    let mainNode = nodes[1];
    console.log(links);
    console.log(mainNode);
    let p_url = mainNode.firstChild;
    let u_url = mainNode.lastChild;

    console.log(p_url);
    console.log(u_url);


    document.querySelector('principal').innerHTML= '';
    document.querySelector('principal').innerHTML = getResutlHTML();
}

/*links = document.anchors.length;
    if(document.body.hasChildNodes()) {
        //p_url = document.body.firstChild();
        document.body.
        u_url = document.body.lastChild();
    } else {
        console.error("This element does not have children");
    }
*/






