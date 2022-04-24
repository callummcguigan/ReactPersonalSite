import WeatherApp from '../images/Weather.png'
import GolfApp from '../images/Golf.png'

function ProjectsComp() {

    const projects = [
        {
            src: WeatherApp,
            title: "Weather App",
            desc: "Weather App utilising Next JS and SCSS to accept a user's input, search a JSON list of destinations and allow the user to select the correct destination, fetch results from the Weather API, and return current, hourly and weekly weather.",
            link: "https://next-weather-54ksyevps-callummcguigan.vercel.app/",
            githubrepo: "https://github.com/callummcguigan/weatherappnextjs"
        },
        {
            src: GolfApp,
            title: "Golf Score App",
            desc: "An app to track a users golf scores, providing statistics on previous rounds and also allowing to share with all other site members. Site uses Next JS, Firebase Auth for authentication, Victory Pie, and React Bootstrap for component design.",
            link: "https://golf-scores.vercel.app/",
            githubrepo: "https://github.com/callummcguigan/golf-scores"
        }
    ]

    return(

        <div className="mainTech" id="langLoad">
                <div className="techMessage">
                    <p>Projects</p>
                </div>
                
                    <div className="techs">
                        {projects.map( project => {
                            return (
                            <div key={project.title}>
                            <img src={project.src} alt="" className="projectIcon"/> 
                            <h3 className="techDesc">{project.title}</h3>
                            <p><a href={project.link} target="_blank" rel="noreferrer" className="linkProject">View Site</a> <a href={project.githubrepo} target="_blank" rel="noreferrer" className="linkProject">View GitHub Repo</a></p>
                            <p>{project.desc}</p>
                            </div>
                            );
                        })}
                    </div>
                
            </div>

    );
}

export default ProjectsComp;