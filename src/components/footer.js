import '../styles/footer.css';

function Footer() {
    const whatYear = new Date();
    const currentYear = whatYear.getFullYear();
    return(
        <footer>
            <div>
                <p>© Alexei Stavila {currentYear}</p>
            </div>
        </footer>
    );
}

export default Footer;