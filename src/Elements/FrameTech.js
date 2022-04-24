import Physics from '../images/physics.png'
import Nodejs from '../images/node-js.png'
import Nextjs from '../images/Nextjs-logo.svg'

function FrameTech() {

    const frames = [
        {
            src: Physics,
            title: "React"
        },
        {
            src: Nodejs,
            title: "Node.js"
        },{
            src: Nextjs,
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