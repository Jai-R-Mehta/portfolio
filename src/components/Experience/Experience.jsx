import React from 'react'
import './Experience.css'
import {MdOutlineCheckCircleOutline} from "react-icons/md"
import {GiMoebiusStar} from "react-icons/gi"

const Experience = () => {
  return (
    <section id='experience'> 
      <h2>My Experience and Skills</h2>

      <div className='container experience__container'>
        <div className='experience__experience'>
          <h3>Experience</h3>
          <article className ="experience__details" >
              <GiMoebiusStar className ="experience__details-icon"/>
              <div>
                <h4>Teaching Assitant (January 2022 - Present)</h4>
                <p><small>-Directed labs, graded assignments and taught C++ for ENGTECH-1PR3 (Object Oriented Programming).</small></p>
                <p><small>-Coached students, taught ELM and assisted in conducting labs for COMPSCI-1XD3 (Intro to Software Design).</small></p>
                <p><small>-Mentored 2 classes of 60 students and guided them to success.</small></p>
              </div>
          </article>
          <article className ="experience__details" >
              <GiMoebiusStar className ="experience__details-icon"/>
              <div>
                <h4>Computing and Software Ambassador (October 2022 - Present)</h4>
                <p><small>-Acted as spokesperson for McMaster University and the Computing and Software programs.</small></p>
                <p><small>-Collaborated with a team to develop recruitment communication strategies and related objectives.</small></p>
                <p><small>-Planned and hosted onsite events.</small></p>
              </div>
          </article>
          <article className ="experience__details">
              <GiMoebiusStar size= "22" className ="experience__details-icon"/>
              <div>
                <h4>Jr. V.P Software Architecture (April 2022 - Present)</h4>
                <p><small>-Collaborate with the team to design , maintain and optimize the McMaster Start Coding Club Website using IHP and SQL .</small></p>
                <p><small>-The website is used every year to teach the ”Software Design Using Web Programming” course to students studying at McMaster University.</small></p>
                <p><small>-The website has also been used to teach over 2,500 children basic web animation/design using ELM.</small></p>
              </div>          
          </article>

        </div>

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