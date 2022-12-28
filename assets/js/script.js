const container = document.querySelector('.project')
devProject = [
    { img: './assets/image/dev/numb-Skull.png', title: 'Numb Skull', description: 'A website built with Javascript, GSAP ( a javascript animation library ), HTML5 and CSS that is simple yet nice to experience, using subtle animation like parralax, animate on scroll and good graphical content to better express a product.', link: 'https://prjct.netlify.app/' },
    { img: './assets/image/dev/uI-adaptation.png', title: 'Monochrome Foundation', description: 'A non-responsive webpage built with basic HTML5 and CSS to implement UI design that had been created by a different UI-designer. Helping me further understand design from a different perspective.',link: 'https://ph-uad.github.io/figma-Foundation/' },
    { img: './assets/image/dev/Real-Estate.png', title: 'Real Estate', description: 'I built a real estate project using React, a popular JavaScript library for building user interfaces. The project allows users to browse listings of properties for sale or rent, and features a responsive design that works well on a variety of devices. Overall, the project is a powerful and user-friendly tool for anyone looking to buy or rent a property.', link: 'https://otterhome.netlify.app/' },
],
designProject = [
    { img: './assets/image/design/gentilhomme.jpg', title: 'Gentilhomme', description: 'This was an initial try at web design project that was aim at better respresntation a product, with the concept of maintaining simplicity, effective design, ensure ease of use and still look decent enough to be in trend', link: 'https://www.figma.com/proto/8yPzPCOybcdRmm3vUivMLY/Team-Project?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2' },
    { img: './assets/image/design/numbSkull.jpg', title: 'UI-NumbSkull', description: 'A Web design project that is simple yet nice to experience, using subtle animation like parralax, animate on scroll and good graphical content to better express a product.', link :'https://www.figma.com/proto/FpXc52PaSwMeSeiE3jS9il/HeadsetComp?page-id=0%3A1&node-id=4%3A13&viewport=477%2C312%2C0.15&scaling=min-zoom&starting-point-node-id=4%3A13' },
    { img: './assets/image/design/Wireframe.jpg', title: 'WireFraming', description: 'A simplified visual representation of a user interface (UI) design that is used to plan and communicate the layout, content, and functionality of a website. The sketch is to best analyse the layout before developing which has helped me write cleaner css codes.', link :'https://www.figma.com/proto/I5gB9bYx1dsykz9fnpMb3f/adebouge?page-id=323%3A184&node-id=323%3A197&viewport=376%2C553%2C0.2&scaling=min-zoom' },
]
writingProject = [
    { img: './assets/image/articles/DigitalTransformation.jpg', title: 'Digital Transformation', description: 'It is a loose term that is relative to an institution or individual. Nonetheless, there are encompassing definitions of the term which would be used to introduce digital transformation.', link: 'https://medium.com/@jgtkc/digital-transformation-9da4e33f71fa' },
    { img: './assets/image/articles/RolestoDigitalTransformation.jpg', title: 'Roles to Digital Transformation', description: 'All processes begin with a decision, then a group of entities (people, animals, or tools). When every component successfully plays a crucial and impactive role. Only then can we expect a successful transformation of events.', link : 'https://medium.com/@jgtkc/roles-essential-to-digital-transformation-2718c03e5cee' },
    { img: './assets/image/articles/SteeringCommittee.jpg', title: 'Steering Committee', description: 'A steering committee is a board of stakeholders and external representatives that play a major role in digital transformation. Before you go on learning about the steering committee you should about Digital transformation and Roles to digital transformation.', link : 'https://medium.com/@jgtkc/the-steering-committee-3591b745008c' },
];

const jobTile = (project) => {
    return (
        `
        <a href="${project.link}" class="link">
            <div class="tile center">
                <div class="container flex">
                    <figure class="figure">
                        <img src='${project.img}' class='img' alt="project thumbnail" />
                    </figure>
                    <div class="tile__details details">
                        <h2 class="heading--secondary">${project.title}</h2>
                        <p class="paragraph">${project.description}</p>
                    </div>
                </div>
            </div>
        </a>
        `
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