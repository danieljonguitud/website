<template>
  <div>
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
      integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B"
      crossorigin="anonymous"
    />
    <div class="container">
      <div id="resume-header" class="row">
        <div class="col">
          <h1>Daniel Jonguitud</h1>
          <h2>Software Engineer</h2>
        </div>
        <div class="col"><ul>
          <li><a href="email:danieljonguitud20@gmail.com">danieljonguitud20@gmail.com</a></li>
          <li>1188 Howe Street, Vancouver, Canada</li>
          <li><a href="tel:+16475503907">+16475503907</a></li>
          <li>
            Github:
            <a href="https://github.com/danieljonguitud">@danieljonguitud</a>
          </li>
          <li>
            LinkedIn:
            <a href="https://www.linkedin.com/in/danieljonguitud/">@danieljonguitud</a>
          </li>
          <li>
            <a href="https://danieljonguitud.com/">https://danieljonguitud.com</a>
          </li>
        </ul></div>
      </div>
      <div class="row">
        <div class="col">
          <h2 class="border-bottom-gray">Carrer Summary</h2>
          <p>
            Experienced web software engineer who leads small teams to create high-quality web products using agile methodologies.
            Skilled in developing websites, web applications, apps, and REST APIs from scratch, with a focus on communication with stakeholders.
            Comfortable working independently or collaboratively, and committed to delivering high-quality technical solutions that meet business needs.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <h3 class="border-bottom-gray">Work Experience</h3>
            <ul>
              <li class="work-position">
                <h4>Fullstack Engineer</h4>
                <p>Canada Drives | Vancouver, Canada | March 2022 - Current</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>•	Implemented business features in Nuxt, Laravel and AWS</li>
                  <li>•	Setup full Appsync (GraphQL) infrastructure in AWS with Cloudformation</li>
                  <li>•	Collaborating on the system design of new product features</li>
                  <li>•	Enabled authentication systems based on AWS</li>
                  <li>•	Successfully implemented Nightwatch for QA automation</li>
                </ul>
              </li>
              <li class="work-position">
                <h4>Head of Development</h4>
                <p>Swoon Creative Media | Vancouver, Canada | January 2021 - March 2022</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>•	Led a development and design team in the creation of digital products</li>
                  <li>•	Provided best code practices and created continuous integration pipelines</li>
                  <li>•	Advised clients about pros and cons of using specific web technologies / solutions</li>
                </ul>
              </li>
              <li class="work-position">
                <h4>API Developer</h4>
                <p>Tata Consultancy Services | Guadalajara, Mexico | July 2020 - November 2020</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>•	Developed application programming interfaces based on REST (REST APIs) </li>
                  <li>•	Generated code to guarantee the quality of technical solutions (Testing)</li>
                </ul>
              </li>
<!--              <li class="work-position">-->
<!--                <h4>Web Developer</h4>-->
<!--                <p>DoUknow? Media | Vaughan, Canada | February 2020 - May 2020</p>-->
<!--                <strong>Achievements:</strong>-->
<!--                <ul>-->
<!--                  <li>•	Created procedures following industry best practices, to develop clients websites.</li>-->
<!--                  <li>•	Developed websites from clients ideas to final products.</li>-->
<!--                  <li>•	Provided advice to clients to the correct administration of their sites.</li>-->
<!--                </ul>-->
<!--              </li>-->
<!--              <li class="work-position">-->
<!--                <h4>IT Coordinator / Web Developer</h4>-->
<!--                <p>Connect International School | Toronto, Canada | August 2017 - May 2020</p>-->
<!--                <strong>Achievements:</strong>-->
<!--                <ul>-->
<!--                  <li>•	Developed from scratch their business website and updated their content</li>-->
<!--                  <li>•	Work together with the marketing team to provide effective funnels</li>-->
<!--                  <li>•	Managed their servers to ensure uptime and data access</li>-->
<!--                </ul>-->
<!--              </li>-->
            </ul>
          </div>
          <div>
            <h3 class="border-bottom-gray">Projects</h3>
            <div class="project">
              <div class="flex">
                <h5 class="mr-2">East Side Culture Crawl</h5>
                <a href="https://culturecrawl.ca">(culturecrawl.ca)</a>
              </div>
              <div class="row">
                <div class="col-3">
                  <img src="https://i.imgur.com/1vqlHPZ.png" alt="ECC Website" />
                </div>
                <div class="col">
                  <p>
                    ECC is the biggest art event on east Vancouver. With more than 10k attendees and 1k+ artists per year, they required
                    to migrate from their old platform (Angular / Drupal) to a system with better control to fit their needs. For this
                    project I was in charge of all the technical architecture to be able to provide a great experience for the
                    artists, who can create their personal profile's and maintain communications with their audience through chat and
                    general public, who can look for artists in different listings and map.
                  </p>
                  <strong>Technologies used:</strong>
                  <span class="badge badge-secondary">WordPress (PHP)</span>
                  <span class="badge badge-secondary">Vue.js</span>
                  <span class="badge badge-secondary">NuxtJS</span>
                  <span class="badge badge-secondary">REST API</span>
                  <span class="badge badge-secondary">Tailwind</span>
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
        <div class="col-3">
          <h3 class="border-bottom-gray">Programming Skills</h3>
          <h4>Backend</h4>
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Laravel</li>
            <li>REST API</li>
            <li>GraphQL</li>
            <li>Amazon Web Services</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Linux</li>
          </ul>
          <h4>Frontend</h4>
          <ul>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Vue.js</li>
            <li>Nuxt</li>
            <li>Tailwind CSS</li>
          </ul>
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>Postman</li>
          </ul>
          <h3 class="border-bottom-gray">Languages</h3>
          <ul>
            <li>Spanish</li>
            <li>English</li>
          </ul>
          <h3 class="border-bottom-gray">Education</h3>
          <ul>
            <li>Electronic Engineering | National Technological Institute of Mexico (2012 - 2017)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-layout'
}
</script>

<style scoped>
#resume-header {
  margin-top: 20px;
  margin-bottom: 20px;
}

#profile-picture {
  width: 100%;
}

#resume-footer {
  padding: 20px;
  text-align: center;
}

.border-bottom-gray {
  padding-bottom: 10px;
  border-bottom: solid 1px darkgray;
}

.work-position {
  margin-bottom: 40px;
}

.project {
  margin-bottom: 40px;
}
</style>
