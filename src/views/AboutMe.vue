<template>
  <div class="aboutme-wrapper">
    <div class="aboutme-container">
      <div class="page-title">
        <h2 class="font-32">About <span class="main-color">Me</span></h2>
      </div>
      <div class="row">
        <div class="aboutme-content">
          <p class="sub-color">
            Hello, I do love and enjoy programming.
            I have 3 years of work experience as a full-stack developer in Korea.
            I am currently <span class="main-color">looking for web developer position</span> 
            in Canada since I recently have moved in Burnaby, BC.
            Also, I have 2 years of Canadian work experience so
            please feel free to contact me if you have any questions.
            Thank you!
          </p>
        </div>
        <div>
          <div class="info-list">
            <ul class="sub-color">
              <li>
                <span class="title main-color">Name</span>
                <span class="value">Nahyun Lee</span>
              </li>
              <li>
                <span class="title main-color">Address</span>
                <span class="value">Burnaby, BC</span>
              </li>
              <li>
                <span class="title main-color">E-mail</span>
                <span class="value">florence5107@gmail.com</span>
              </li>
              <li>
                <span class="title main-color">Phone(Canada)</span>
                <span class="value">+1 416 857 2799</span>
              </li>
              <li>
                <span class="title main-color">Phone(Korea)</span>
                <span class="value">+82 10 6428 5107</span>
              </li>
            </ul>
          </div>
        </div>
      <div class="row-bottom">
        <div class="block-title">
          <h3>Experience</h3>
        </div>
        <section class="timeline-vertical">
          <ul>
            <li class="timeline-first">
              <div>
                <p class="timeline-job-title">Software Developer</p>
                <p class="timeline-company sub-color">Samsung SDS</p>
                <time class="sub-color">2024</time>
              </div>
            </li>
            <li class="timeline-first">
              <div>
                <p class="timeline-job-title">Full Stack Web Developer</p>
                <p class="timeline-company sub-color">Bundang CHA hospital</p>
                <time class="sub-color">2023</time>
              </div>
            </li>
            <li class="timeline-first">
              <div>
                <p class="timeline-job-title">Medical Data Analyst</p>
                <p class="timeline-company sub-color">Bundang CHA hospital</p>
                <time class="sub-color">2023</time>
              </div>
            </li>
            <li class="timeline-first">
              <div>
                <p class="timeline-job-title">Front-end Developer</p>
                <p class="timeline-company sub-color">Samsung Software Academy</p>
                <time class="sub-color">2022</time>
              </div>
            </li>
            <li>
              <div>
                <p class="timeline-job-title">Project Management Assistant</p>
                <p class="timeline-company sub-color">Samsung SDS</p>
                <time class="sub-color">2021</time>
              </div>
            </li>
            <li class="timeline-last">
              <div>
                <p class="timeline-job-title">Full-stack Developer</p>
                <p class="timeline-company sub-color">Naviworks</p>
                <time  class="sub-color">2019</time>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div class="row-bottom row-lastbox">
        <div class="block-title">
          <h3>Major <span class="main-color">skills</span></h3>
        </div>
        <div class="sub-color">
          <p>HTML</p>
            <div class="skillbar">
              <div class="skills html main-color-back"></div>
            </div>
            <p>CSS</p>
            <div class="skillbar">
              <div class="skills css main-color-back"></div>
            </div>
            <p>JavaScript</p>
            <div class="skillbar">
              <div class="skills js main-color-back"></div>
            </div>
            <p>Java</p>
            <div class="skillbar">
              <div class="skills java main-color-back"></div>
            </div>
            <p>React</p>
            <div class="skillbar">
              <div class="skills react main-color-back"></div>
            </div>
            <p>TypeScript</p>
            <div class="skillbar">
              <div class="skills ts main-color-back"></div>
            </div>
            <p>Vue.js</p>
            <div class="skillbar">
              <div class="skills vue main-color-back"></div>
            </div>
            <p>Oracle</p>
            <div class="skillbar">
              <div class="skills db main-color-back"></div>
            </div>
            <p>MySQL</p>
            <div class="skillbar">
              <div class="skills db main-color-back"></div>
            </div>
            <p>Postgresql</p>
            <div class="skillbar">
              <div class="skills db main-color-back"></div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

/* Media queries - Responsive timeline on screens less than 600px wide mobile */
@media screen and (max-width: 1359px) {
  .row{
    display:grid;
    grid-template-columns: 100%;
  }

  .aboutme-content{
    text-align: left;
    margin: 20px;
  }

  .info-list{
    text-align: left;
    margin: 20px;
  }

  .aboutme-wrapper{
    height: 100%;
  }

  .aboutme-container{
    width: 100%;
    height: 100%;
  }

  .lastbox h2{
    width:100px;
  }

  .lastbox p{
    margin-left:20px;
  }

  .lastbox{
    left:-30px;
  }

  .row-lastbox{
    padding: 0 50px;
    margin-bottom:20px;
  }
  
  .timeline-vertical{
    width: calc(79%);
    margin-left: 20%;
  }

  .timeline-vertical ul li{
    padding-top: 50px;
  }

  .timeline-vertical div{
    padding: 0 10px;
  }
}

@media screen and (min-width: 1360px) and (max-width:1749px){
  .aboutme-content{
    margin-bottom: 20px !important;
  }
}


@media screen and (min-width: 1750px){
  .aboutme-wrapper{
    width: 100%;
    height: auto;
    position: relative;
  }

  .row{
    display:grid;
    grid-template-columns: 400px 300px;
    grid-template-rows: 200px 400px;
  }

  .row-bottom{
    margin-top: 30px;
  }

  .aboutme-content{
    margin-right:20px;
  }

  .aboutme-content p{
    line-height: 25px;
  }

  .info-list ul{
    list-style: none;
  }

  .info-list .title{
    margin-right: 10px;
    font-weight: 600;
  }

  .info-list ul li{
    margin-bottom: 15px;
  }

  .block-title{
    margin-bottom: 30px;
  }

  .block-title h3{
    font-size: 21px;
  }

  .content {
    width:100%;
    padding: 0 0 0 10px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }

  .content h2{
    font-size:15px;
  }

  .content p{
    font-size:13px;
    color:#a5a6a7;
  }

  .skillbar {
    width: 100%;
    height: 10px;
    background-color: #ddd;
    border-radius: 20px;
    margin: 10px 0;
  }

  .timeline-vertical{
    margin-left: 5%;
  }

  .timeline-vertical ul li{
    padding-top: 10px;
  }
}


/**common */

.timeline-vertical{
  border-left: 1px solid rgba(85, 85, 85, 0.308);
}

.timeline-vertical ul{
  width: 100%;
  text-align: left;
}

.timeline-vertical ul li{
  position: relative;
  width: 200px;
}

.timeline-vertical li{
  list-style-type: circle;
  list-style:#FF9F55;;
  right: -14.5px;
}

.timeline-vertical li::marker{
  color: #FF9F55;
}

.timeline-job-title{
  font-size:18px; 
  font-weight: 600;
  margin: 5px 0;
  color:rgba(0, 0, 0, 0.8);
}

.timeline-company{
  font-size: 15px;
}

.timeline-first{
  padding-top:20px;
}

.timeline-last{
  padding-bottom: 10px;
}

time{
  font-size: 14px;
}

.row-bottom{
    margin-top: 30px;
}

.info-list ul{
    list-style: none;
}

.info-list .title{
  margin-right: 10px;
  font-weight: 600;
}

.info-list ul li{
  margin-bottom: 15px;
}

.block-title{
  margin-bottom: 30px;
}

.block-title h3{
  font-size: 21px;
}

.content {
  width:100%;
  padding: 0 0 0 10px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

.content h2{
  font-size:15px;
}

.content p{
  font-size:13px;
  color:#a5a6a7;
}

.skillbar {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 20px;
  margin: 10px 0;
}

.skills {
  text-align: right;
  margin: 10px 0;
  color: white;
  border-radius: 20px;
  height: 10px;
}

.html,
.js,
.java,
.db {
  width: 95%;
}

.css, 
.react {
  width: 90%;
}

.vue,
.ts {
  width: 85%;
}

/**common end */
</style>