import WeatherApp from '../images/Weather.png'
import GolfApp from '../images/Golf.png'
import Blackjack from '../images/Blackjack.png'
import Todo from '../images/Todo.png'
import Recipe from '../images/Recipe.png'

function ProjectsComp() {

    const clickHandler = (link) => {
        window.open(link)
    }

    const projects = [
        {
            src: WeatherApp,
            title: "Weather App",
            desc: "Weather App utilising Next JS and SCSS to accept a user's input, search a JSON list of destinations and allow the user to select the correct destination, fetch results from the Weather API, and return current, hourly and weekly weather.",
            link: "https://weatherapp-rosy-eight.vercel.app/",
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

    const projects2 = [
        
        {
            src: Recipe,
            title: "Recipe App",
            desc: "An app idea I had in order to help me in real life. Allows the user to select meals that they would like to eat, and then generates a shopping list based off those selections. Users can add new meals, or choose from meals already uploaded. This app challenged me to take the ingredients for each meal and combine them into one object for output.",
            link: "https://recipesapp-pi.vercel.app/",
            githubrepo: "https://github.com/callummcguigan/ReactPersonalSite"
        },
        {
            src: Todo,
            title: "Todo List - TypeScript",
            desc: "A simple to-do list created using TypeScript. The purpose behind this app was to get exposure to TypeScript, as this was my first project using it.",
            link: "https://todotypescript.vercel.app/",
            githubrepo: "https://github.com/callummcguigan/todotypescript"
        }
    ]

    const projects3 = [
        {
            src: Blackjack,
            title: "Blackjack Game",
            desc: "One of my first solo projects, after creating a CLI blackjack game with Python, I created a web version using JavaScript.",
            link: "https://callummcguigan.github.io/BlackJackGame/",
            githubrepo: "https://github.com/callummcguigan/BlackJackGame"
        }        
    ]

    return(

        <div className="mainTech" id="langLoad">
                
                    <div className="techs">
                        {projects.map( project => {
                            return (
                            <div key={project.title}>
                            <img src={project.src} alt="" className="projectIcon" onClick={() => clickHandler(project.link)}/> 
                            <h3 className="techDesc">{project.title}</h3>
                            <p><a href={project.link} target="_blank" rel="noreferrer" className="linkProject">View Site</a> <a href={project.githubrepo} target="_blank" rel="noreferrer" className="linkProject">View GitHub Repo</a></p>
                            <p>{project.desc}</p>
                            </div>
                            );
                        })}
                    </div>
                    <div className="techs">
                        {projects2.map( project => {
                            return (
                            <div key={project.title}>
                            <img src={project.src} alt="" className="projectIcon"  onClick={() => clickHandler(project.link)}/> 
                            <h3 className="techDesc">{project.title}</h3>
                            <p><a href={project.link} target="_blank" rel="noreferrer" className="linkProject">View Site</a> <a href={project.githubrepo} target="_blank" rel="noreferrer" className="linkProject">View GitHub Repo</a></p>
                            <p>{project.desc}</p>
                            </div>
                            );
                        })}
                    </div>
                    <div className="techs">
                        {projects3.map( project => {
                            return (
                            <div key={project.title}>
                            <img src={project.src} alt="" className="projectIcon"  onClick={() => clickHandler(project.link)}/> 
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