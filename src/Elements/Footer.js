import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'



function Footer() {
    return(

        <div className="footer" id="footerLoad">
                <div className="identity">
                    <p>Thanks For Visiting</p>
                </div>
                <div className="links">
                    <a href="https://github.com/callummcguigan" className="footerLink" target="_blank" rel="noreferrer"><img src={Github} className="footerLink"/></a>
                    <a href="https://www.linkedin.com/in/callum-mcguigan-006a7b112/" className="footerLink" target="_blank" rel="noreferrer"><img src={LinkedIn} className="footerLink"/></a>
                </div>
            </div>

    );
}

export default Footer;