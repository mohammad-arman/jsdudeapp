import './App.css';
import tutorialsData from './tutorials.json';
import {useEffect, useState} from 'react';

function App() {
  return (
      <div>
        <Header></Header>
        <MainSection></MainSection>
      </div>
  );
}
//header component
function Header() {
  return (
    <header>
      <Navigation></Navigation>
      <HeaderMain></HeaderMain>
    </header>
  )
}
//navigation component
function Navigation(){
  return (
    <div className="header-bg">
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="logo">That Js Dude</h3>
          </div>
          <div>
            <button className="signbtn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}
//header slide component
function HeaderMain(){
  return(
    <div className="main-header-bg">
      <div className="container">
        <div className="header-ctn">
            <h1>Exclusive React Workshop for <br/> beginners!</h1>
            <p>Once in a year opportunity to learn and build your <a href="">first React app</a></p>
            <button className="learnbtn">Learn More</button>
        </div>
      </div>
    </div>
  )
}
//main component
function MainSection(){
  return (
    <div className="container">
      <div className="main-flex">
        <LeftPart></LeftPart>
        <RightPart></RightPart>
      </div>
      <Footer></Footer>
    </div>
  )
}
//leftside component
function LeftPart(){
  const [tutorials, setTutorials] = useState([]);
  useEffect(()=>{
    setTutorials(tutorialsData)
  }, [])
  return(
    <div className="left-side">
      <ConfusedPart></ConfusedPart>
      <div className="tutorials">
        {
          tutorials.map(tutorial=> <Tutorials title={tutorial.title} desc={tutorial.desc}></Tutorials>)
        }
      </div>
    </div>
  )
}
//rightside component
function RightPart(){
  return(
    <div className="right-side">
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
      <RecentTalks></RecentTalks>
      <Invite></Invite>
    </div>
  )
}
//confusing componnet
function ConfusedPart(){
  return(
    <div className="confused">
      <h3>JS Confusing Parts</h3>
      <p>Understand <span>this</span>, <span>scope</span>, <span>hoisting</span>, <span>closure</span>, <span>inheritance</span>, <span>bind</span>, <span>call</span>, <span>apply</span>, <span>event delegation</span>, <span>dom</span>, <span>timers</span> and many more caveats.</p>
    </div>
  )
}
//tutorials component
function Tutorials(props) {
  return(
    <div className="tutorial">
      <h2><a href="">{props.title}</a></h2>
      <p>{props.desc}</p>
      <button className="recent-btn">View Details</button>
    </div>
  )
}
//personal training component
function PersonalTraining(){
  return(
    <div className="personal-training">
      <h2>Personal Training for $30</h2>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to <a href="">Codinism (my company)</a> and then book a time slot <a href="">You can Book me</a></p>
    </div>
  )
}
//recent videos component
function RecentVideos(){
  return(
    <div className="recent-videos">
      <h2>Recent Videos</h2>
      <ul>
        <li><a href="">15+ tricks for dev tool</a></li>
        <li><a href="">Understanding this</a></li>
        <li><a href="">be expert in JS Array</a></li>
        <li><a href="">How Browsers works in 4 min</a></li>
      </ul>
      <button className="recent-btn">More on Youtube</button>
    </div>
  )
}
//recent talks component
function RecentTalks(){
  return(
    <div className="recent-talks recent-videos">
      <h2>Recent Talks</h2>
      <ul>
        <li><a href="">Functional Programming: What, Why and How</a></li>
        <li><a href="">JavaScript Code Quality</a></li>
        <li><a href="">Angular JS for Absolute Beginners</a></li>
        <li><a href="">Getting started with React JS</a></li>
        <li><a href="">High Perf JS</a></li>
        <li><a href="">Are you sure, you know JavaScripts</a></li>
        <li><a href="">High Performance JS and CSS</a></li>
        <li><a href="">What's New in ES6</a></li>
        <li><a href="">Make Web Faster</a></li>
      </ul>
      <button className="recent-btn">Speaker Profile</button>
    </div>
  )
}
//invite componet
function Invite(){
  return(
    <div className="invite-part recent-videos">
      <h2>Invite to a talk</h2>
      <p>if you want to invite that js dude in any of your meetup, conference or hangout, send email to <a href="">mdarman8290@gmail.com</a></p>
    </div>
  )
}
//footer component
function Footer(){
  return(
    <footer className="footer-part">
      <p>© thatJSDude 2021, a codinism initiative.</p>
      <h3>Hosted by <a href="">Md.Arman</a></h3>
    </footer>
  )
}
export default App;
