import Skills from './skills';
import ButtonCV from './button';
import '../styles/home.css';

function Home() {
    return(
        <section className="home">
            <div className="home-div">
                <div className="home-div-inner">
                    <div className="left-side">
                        <div className="left-top">
                            <h2>Alexei Stavila</h2>
                            <h1>Front End Developer</h1>
                            <h4>My passion and focus is web development</h4>
                        </div>
                        <div className="left-bottom">
                            <p>
                                I'm a junior developer with big plans and ambitions. <br/>
                                Having worked in sectors such as customer service <br/>
                                and administration, I decided to change careers and <br/>
                                follow my passion for building amazing websites. <br/>
                                My ultimate goal is to become a full stack developer.
                            </p>
                        </div>
                    </div>
                    <div className="right-side">
                        <Skills />
                        <ButtonCV />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;