import React from 'react'
import './Experience.css'
import {MdOutlineCheckCircleOutline} from "react-icons/md"
import {GiMoebiusStar} from "react-icons/gi"

const Experience = () => {
  return (
    <section id='experience'> 
      <h2>My Experience and Skills</h2>
      <div className='container experience__container1'>

      <div className='experience__experience'>
          <h3>Experience</h3>
          <article className ="experience__details" >
              <GiMoebiusStar className ="experience__details-icon"/>
              <div>
                <h4>Software Developer Co-op (May 2023 - Present)</h4>
                <p><small>-Collaborated in an Agile environment, partnering with mentors to integrate an automated Maven upgrade bot (Renovate) across 2 repositories. Successfully implemented rate limiting to curb excessive PRs and resolved a long-standing PR limit problem.</small></p>
                <p><small>-Resolved version mismatches and issues through in-depth analysis of Docker logs and Kubernetes pods, adeptly debugging errors. Facilitated efficient collaboration using Jira and Gerrit.</small></p>
                <p><small>-Upgraded and tested 20+ third-party dependencies across 3 distinct microservices within a CI/CD pipeline.</small></p>
              </div>
          </article>
          <article className ="experience__details" >
              <GiMoebiusStar className ="experience__details-icon"/>
              <div>
                <h4>Teaching Assistant (January 2023 - April 2023)</h4>
                <p><small>-Directed labs, graded assignments and taught C++ for ENGTECH-1PR3 (Object Oriented Programming).</small></p>
                <p><small>-Coached students, taught ELM and assisted in conducting labs for COMPSCI-1XD3 (Intro to Software Design).</small></p>
                <p><small>-Mentored 2 classes of 60 students and guided them to success.</small></p>
              </div>
          </article>
          <article className ="experience__details" >
              <GiMoebiusStar className ="experience__details-icon"/>
              <div>
                <h4>Computing and Software Ambassador (October 2022 - April 2023)</h4>
                <p><small>-Acted as spokesperson for McMaster University and the Computing and Software programs.</small></p>
                <p><small>-Collaborated with a team to develop recruitment communication strategies and related objectives.</small></p>
                <p><small>-Planned and hosted onsite events.</small></p>
              </div>
          </article>
          <article className ="experience__details">
              <GiMoebiusStar size= "22" className ="experience__details-icon"/>
              <div>
                <h4> V.P Software Architecture (April 2022 - Present)</h4>
                <p><small>-Collaborated with team to improve and develop web platform used to teach over 10,000 children how to code in elm. The platform has over 1.5 million compiles and is also used to teach a Software Design course at McMaster.</small></p>
                <p><small>-Prototyped, designed and implemented real time user analytics for mentors and teachers to gauge the progress of the class. Well received by teachers from schools throughout Canada with great feedback.</small></p>
                <p><small>-Implemented a grid view along with a view for the mentors using React. Collaborated with team in weekly meetings to envision ideas to improve and optimize the website.</small></p>
              </div>          
          </article>

        </div>
        </div>

      <div className='container experience__container'>

        <div className='experience__skills'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Python</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Java</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>C</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>C#</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>C++</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>JSX</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>HTML/CSS</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Dart</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>HSX</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Haskell</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>ELM</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>SQL</h4>
            </article>

          </div>

        </div>

        <div className='experience__teachnologies'>
        <h3>Technologies/Frameworks</h3>
          <div className='experience__content'>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Linux</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Git</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Gerrit</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Docker</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Kubernetes</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Maven</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Unity Engine</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Flutter</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Android Studio</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>React</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>IHP</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>Latex</h4>
            </article>
            <article className ="experience__details">
              <MdOutlineCheckCircleOutline className ="experience__details-icon"/>
              <h4>MS Office</h4>
            </article>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Experience