import Card from './projectCard';
import '../styles/projects.css';

function Projects() {
    const myWorks = [
        {id: 1, title: 'Dostoyevsky Quotes', description: 'A quote generator built with JavaScript, which randomly iterates through an array of quotes', img: 'https://res.cloudinary.com/dtdnghohz/image/upload/v1618564029/dstvsk_qligdz.png', link: 'https://dostoyevsky-quotes.netlify.app/'},
        {id: 2, title: 'Matching Poster Game', description: 'A game built with JavaScript, involving DOM manipulation and conditionals', img: 'https://res.cloudinary.com/dtdnghohz/image/upload/v1618564022/matching-game_cezdb7.png', link: 'https://poster-match.netlify.app/'},
        {id: 3, title: 'Calculator', description: 'A basic working calculator built with React as part of an online JavaScript course', img: 'https://images.freeimages.com/images/large-previews/916/calculator-and-pen-indicating-work-study-1632106.jpg', link: 'https://alexeiscript.com'},
        {id: 4, title: 'Plant Health Care', description: 'I developed this website during my time at Design Portfolio as Junior Developer', img: 'https://ar18.planthealthcare.com/application/files/6615/5240/5747/Image.jpg', link: 'https://ar18.planthealthcare.com'},
        {id: 5, title: 'J Cargo LTD', description: 'A website I built for a London based removals and delivery business, with pure JavaScript', img: 'http://jcargo.co.uk/jcargoImage.png', link: 'https://jcargo.co.uk'},
        {id: 6, title: 'CryptoSphere', description: 'A website dedicated to crypto enthusiasts which I am working on at the moment', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.finance-monthly.com%2FFinance-Monthly%2Fwp-content%2Fuploads%2F2019%2F11%2FCrypto.jpg&f=1&nofb=1', link: 'https://alexei.one/wip/'}
    ];
    return(
        <section className="projects">
            <div className="projects-div">
                <h1>My Works</h1>
                <div className="grid">
                    {
                        myWorks.map((project) => {
                            return(
                                <Card 
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    image={project.img}
                                    link={project.link}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Projects;