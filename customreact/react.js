function customRender(reactelement,container){
    // const element = document.createElement
    // (reactelement.type)
    // element.innerHTML = reactelement.children
    // element.setAttribute('href',reactelement.props.herf)
    // element.setAttribute('target',reactelement.props.target)
    // root.appendChild(element)

    const domElement = document.createElement
    (reactelement.type)
    domElement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactelement.props
            [prop])
    }
    container.appendChild(domElement)

}

const root =document.getElementById("root");
const reactelement = {
    type : "a",
    props : {
        herf : 'https://www.google.com',
        target : '_blank'
    },
    children : 'Click here to visit google'
}
customRender(reactelement,root)