import Skills from './skills';
import ButtonCV from './button';
import '../styles/home.css';

function Home() {
    return(
        <section className="home">
            <div className="home-div">
                <div className="left-side">
                    <div>
                        <h1>Alexei Stavila<br/>Front End Developer</h1>
                        <p>My passion and focus is web development</p>
                    </div>
                    <div>
                        <p>
                            I'm a junior developer with big plans and ambitions.<br/>
                            Having worked in sectors such as customer service <br/>
                            and administration, I decided to change careers and<br/>
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
        </section>
    );
}

export default Home;