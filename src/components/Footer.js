//4. Create a Footer.js component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <div>
            <footer>
                <p>
                    Copyright © {currentYear}
                </p>
            </footer>

        </div>
    )
}

export default Footer;