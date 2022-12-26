const devProject = [
    {img: './assets/image/numb-Skull.png',title: 'Numb Skull' , description: 'This was a web project that was aim at subtle animation and effects without much interactions by the user. Aimed to satisfy user experience'},
    {img: './assets/image/uI-adaptation.png',title: 'UI Adaptation' , description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  '},
    {img: './assets/image/Real-Estate.png',title: 'Real Estate' , description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  '},
]

const designProject = [
    {img: './assets/image/gentilhomme.jpg',title: 'Gentilhomme' , description: 'This was an initial try at web design project that was aim at better respresntation a product, with the concept of maintaining simplicity, effective design, ensure ease of use and still look decent enough to be in trend'},
    {img: './assets/image/UInumbskull.jpg',title: 'UI NumbSkull' , description: 'The process of design first before developing '},
    {img: './assets/image/WireFrame.jpg',title: 'WireFraming' , description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  '},
]

const widget = document.querySelector('#widget')
const UIwidget = document.querySelector('#UI-widget')
 
const jobTile = (project) =>{
    return(
     `<div class="tile center">
            <div class="container flex">
                <figure class="figure">
                    <img src='${project.img}' class='img' alt="project thumbnail" />
                </figure>
                <div class="tile__details details">
                    <h2 class="heading--secondary">${project.title}</h2>
                    <p class="paragraph">${project.description}</p>
                </div>
            </div>
        </div> `
    )
}


const appendArrayToDom = (object, destination) =>{
    object.forEach(item => {
        destination.insertAdjacentHTML("afterbegin",jobTile(item))
    })
}

console.log(widget, UIwidget)

// appendArrayToDom(devProject, widget)
appendArrayToDom(designProject, UIwidget)

