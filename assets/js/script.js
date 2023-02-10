const container = document.querySelector('.project')
devProject = [
    { img: './assets/image/dev/numb-Skull.png', title: 'Numb Skull', description: 'A website built with Javascript, GSAP ( a javascript animation library ), HTML5 and CSS.', link: 'https://prjct.netlify.app/' },
    { img: './assets/image/dev/uI-adaptation.png', title: 'Monochrome Foundation', description: 'A responsive webpage built with basic HTML5 and CSS to implement UI design', link: 'https://ph-uad.github.io/figma-Foundation/' },
    { img: './assets/image/dev/Real-Estate.png', title: 'Ohms', description: 'A real estate project using React, a popular JavaScript library for building user interfaces.', link: 'https://otter-home.netlify.app/' },
],
    designProject = [
        { img: './assets/image/design/gentilhomme.jpg', title: 'Gentilhomme', description: 'An e-commerce web design for custom suit lovers, Gentilehomme has a limited service yet valuable range of suits.', link: 'https://www.figma.com/proto/8yPzPCOybcdRmm3vUivMLY/Team-Project?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2' },
        { img: './assets/image/design/numbSkull.jpg', title: 'UI-NumbSkull', description: 'A Web design template for a project built by me (can be seen on the website page). ', link: 'https://www.figma.com/proto/FpXc52PaSwMeSeiE3jS9il/HeadsetComp?page-id=0%3A1&node-id=4%3A13&viewport=477%2C312%2C0.15&scaling=min-zoom&starting-point-node-id=4%3A13' },
    ]
writingProject = [
    { img: './assets/image/articles/DigitalTransformation.jpg', title: 'Digital Transformation', description: 'It is a loose term that is relative to an institution or individual. Nonetheless, there are encompassing definitions of the term which would be used to introduce digital transformation.', link: 'https://medium.com/@jgtkc/digital-transformation-9da4e33f71fa' },
    { img: './assets/image/articles/RolestoDigitalTransformation.jpg', title: 'Roles to Digital Transformation', description: 'All processes begin with a decision, then a group of entities (people, animals, or tools). When every component successfully plays a crucial and impactive role. Only then can we expect a successful transformation of events.', link: 'https://medium.com/@jgtkc/roles-essential-to-digital-transformation-2718c03e5cee' },
    { img: './assets/image/articles/SteeringCommittee.jpg', title: 'Steering Committee', description: 'A steering committee is a board of stakeholders and external representatives that play a major role in digital transformation. Before you go on learning about the steering committee you should about Digital transformation and Roles to digital transformation.', link: 'https://medium.com/@jgtkc/the-steering-committee-3591b745008c' },
],
    website = document.querySelector('#websites').checked;
design = document.querySelector('#design').checked;
writing = document.querySelector('#writing').checked;


const jobTile = (project) => {
    return (
        `
        <a href="${project.link}" class="tile link">
            <div class="center">
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

fixDomContent()

document.querySelector('#websites').addEventListener('change', e => {
    fixDomContent('widget', devProject)
})
document.querySelector('#design').addEventListener('change', e => {
    fixDomContent('widget', designProject)
})
document.querySelector('#writing').addEventListener('change', e => {
    fixDomContent('widget', writingProject)
})