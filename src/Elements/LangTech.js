function LangTech() {

    const langs = [
        {
            src: "html-5.png",
            title: "HTML"
        },
        {
            src: "css-file-format.png",
            title: "CSS"
        },{
            src: "js-file.png",
            title: "JavaScript"
        }
    ]

    return(

        <div className="mainTech" id="langLoad">
                <div className="techMessage">
                    <p>Languages</p>
                </div>
                
                    <div className="techs">
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