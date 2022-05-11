import HTML from '../images/html-5.png'
import CSS from '../images/css-file-format.png'
import JS from '../images/js-file.png'

function LangTech() {

    const langs = [
        {
            src: HTML,
            title: "HTML"
        },
        {
            src: CSS,
            title: "CSS"
        },{
            src: JS,
            title: "JavaScript"
        }
    ]

    return(

        <div className="mainTech" id="langLoad">
                <div className="techMessage">
                    <p>Languages</p>
                </div>
                
                    <div className="iconContainer">
                        {langs.map( lang => {
                            return (
                            <div key={lang.title}>
                            <img src={lang.src} alt="" className="techIcon"/> 
                            <p className="techDesc">{lang.title}</p>
                            </div>
                            );
                        })}
                    </div>
                
            </div>

    );
}

export default LangTech;