const devProject = [
    {img: './assets/image/numb-Skull.png',title: 'Numb Skull' , description: 'This was a web project that was aim at subtle animation and effects without much interactions by the user. Aimed to satisfy user experience'},
    {img: './assets/image/uI-adaptation.png',title: 'UI Adaptation' , description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  '},
    {img: './assets/image/Real-Estate.png',title: 'Real Estate' , description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  '},
]
const widget = document.querySelector('#widget')
 
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


const appendArrayToDom = (object) =>{
    object.forEach(item => {
        widget.insertAdjacentHTML("afterbegin",jobTile(item))
    })
}


appendArrayToDom(devProject)