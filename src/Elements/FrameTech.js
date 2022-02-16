function FrameTech() {

    const frames = [
        {
            src: "physics.png",
            title: "React"
        },
        {
            src: "node-js.png",
            title: "Node.js"
        },{
            src: "Nextjs-logo.svg",
            title: "Next.js"
        }
    ]

    return(

        <div className="mainTech" id="frameLoad">
                <div className="techMessage">
                    <p>Frameworks</p>
                </div>
                
                    <div className="techs">
                        {frames.map( frame => {
                            return (
                            <div key={frame.title}>
                            <img src={frame.src} alt="" className="techIcon"/> 
                            <p className="techDesc">{frame.title}</p>
                            </div>
                            );
                        })}
                    </div>
                
            </div>

    );
}

export default FrameTech;