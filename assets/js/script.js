const container = document.querySelector('.option__container'),
devProject = [
    { img: './assets/image/dev/numb-Skull.png', title: 'Numb Skull', description: 'This was a web project that was aim at subtle animation and effects without much interactions by the user. Aimed to satisfy user experience' },
    { img: './assets/image/dev/uI-adaptation.png', title: 'UI Adaptation', description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  ' },
    { img: './assets/image/dev/Real-Estate.png', title: 'Real Estate', description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  ' },
],
designProject = [
    { img: '/assets/image/design/gentilhomme.jpg', title: 'Gentilhomme', description: 'This was an initial try at web design project that was aim at better respresntation a product, with the concept of maintaining simplicity, effective design, ensure ease of use and still look decent enough to be in trend' },
    { img: '/assets/image/design/UInumbskull.jpg', title: 'UI NumbSkull', description: 'The process of design first before developing ' },
    { img: '/assets/image/design/WireFrame.jpg', title: 'WireFraming', description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  ' },
]
writingProject = [
    { img: './assets/image/articles/DigitalTransformation.jpg', title: 'Digital Transformation', description: 'This was an initial try at web design project that was aim at better respresntation a product, with the concept of maintaining simplicity, effective design, ensure ease of use and still look decent enough to be in trend' },
    { img: './assets/image/articles/RolestoDigitalTransformation.jpg', title: 'Roles to Digital Transformation', description: 'The process of design first before developing ' },
    { img: './assets/image/articles/SteeringCommittee.jpg', title: 'Steering Committee', description: 'I was inspired by the design of _____ and desided to Develop and adapt their UIDesign as a challenge  ' },
];

const jobTile = (project) => {
    return (
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


const appendArrayToDom = (object, destination) => {
    object.forEach(item => {
        destination.insertAdjacentHTML("afterbegin", jobTile(item))
    })
}

const fixDomContent = (idName = '', object = devProject) => {
    container.setAttribute('id', idName);
    container.innerHTML = ''
    appendArrayToDom(object, container)
}

document.querySelector('#Dev--Link').addEventListener('click', (e) => {
    e.preventDefault();
    fixDomContent('widget', devProject)
})

document.querySelector('#UI--Link').addEventListener('click', (e) => {
    e.preventDefault();
    fixDomContent('UI-widget', designProject)
})

document.querySelector('#Writing--Link').addEventListener('click', (e) => {
    e.preventDefault();
    fixDomContent('Writing-widget', writingProject)
})

fixDomContent()