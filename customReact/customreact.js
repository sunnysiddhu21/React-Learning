


function customrender(reactElement,mainContainer){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // mainContainer.append(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)
}



const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    Children:"click me to visit the link"

}

const mainContainer=document.getElementById('root')

customrender(reactElement,mainContainer)
