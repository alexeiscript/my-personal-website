import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
