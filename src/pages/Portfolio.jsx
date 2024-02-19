import React from 'react'
import Project from '../components/Project'

function Portfolio() {
  return (
    <div id='portfolio'>
      <Project img={"/groovy.png"} title={"Groovy Graphics"} gitHub={"https://github.com/Davidnino21/ai-groovy-graphics"} live={"https://ai-groovy-graphics-dd548751a1ac.herokuapp.com/"} />
      <Project img={"/savory.png"} title={"Savory Secrets"} gitHub={"https://github.com/Davidnino21/savory-secrets"} live={"https://davidnino21.github.io/savory-secrets/index.html"}/>
      <Project img={"/textEditor.png"} title={"Text Editor"} gitHub={"https://github.com/Davidnino21/text-editor"} live={"https://texteditor-80wv.onrender.com/"}/>
      <Project img={"/horiseon.png"} title={"Horiseon"} gitHub={"https://github.com/Davidnino21/hori-soc-solut"} live={"https://davidnino21.github.io/hori-soc-solut/"}/>
      <Project img={"/workday.png"} title={"Work Day Scheduler "} gitHub={"https://github.com/Davidnino21/work-day-scheduler"} live={"https://davidnino21.github.io/work-day-scheduler/"} />
      <Project img={"/codingQuiz.png"} title={"Coding Quiz"} gitHub={"https://github.com/Davidnino21/codequiz"}live={"https://davidnino21.github.io/codequiz/"}/>
    </div>
  )
}

export default Portfolio