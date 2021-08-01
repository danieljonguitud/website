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
        <div class="col-3">
          <img
            id="profile-picture"
            src="https://i.imgur.com/TQgRKeq.png"
            alt="Daniel's profile picture"
          />
        </div>
        <div class="col">
          <h1>Daniel Jonguitud</h1>
          <h2>Web Developer</h2>
          <ul>
            <li>Email: danieljonguitud20@gmail.com</li>
            <li>Address: 213 Gowan Ave, Toronto, Canada</li>
            <li>Phone: +5217821573907</li>
             <li>
              Github:
              <a href="https://github.com/danieljonguitud">@danieljonguitud</a>
            </li>
            <li>
              LinkedIn:
              <a href="https://www.linkedin.com/in/danieljonguitud/">@danieljonguitud</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 class="border-bottom-gray">Carrer Summary</h2>
          <p>
            Website/Apps creator using different techologies. My projects
            have focused on providing business solutions to my employers to produce results in
            their sales and growth in general. I have the ability to work alone or in a team,
            always preferring collaborative work due to my interpersonal skills. My goal is to
            achieve concrete results that at the same time provide powerfull applications and microservices.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <h3 class="border-bottom-gray">Work Experience</h3>
            <ul>
              <li class="work-position">
                <h4>Java Developer</h4>
                <p>DoUknow? Media | Vaughan, Canada | February 2020 - May 2020</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>•	Created procedures following industry best practices, to develop clients websites.</li>
                  <li>•	Developed websites from clients ideas to final products.</li>
                  <li>•	Provided advice to clients to the correct administration of their sites.</li>
                </ul>
              </li>
              <li class="work-position">
                <h4>IT Coordinator / Web Developer</h4>
                <p>Connect International School | Toronto, Canada | August 2017 - May 2020</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>•	Developed from scratch their business website.</li>
                  <li>•	Developed microservice that stores school prices from different competitors.</li>
                  <li>•	Structured their information architecture taking into account the scalability of the company.</li>
                </ul>
              </li>
              <!-- <li class="work-position">
                <h5>WordPress Designer</h5>
                <p>Effectivo Agency | April 2016 - July 2018</p>
                <strong>Achievements:</strong>
                <ul>
                  <li>Succefully created their business landing page to promote their services.</li>
                  <li>Planified, schematize and develop clients websites from scratch.</li>
                  <li>Managed clients CPanels, hosting data and websites.</li>
                </ul>
              </li> -->
            </ul>
          </div>
          <div>
            <h3 class="border-bottom-gray">Projects</h3>
            <div class="project">
              <h5>CIS Website</h5>
              <div class="row">
                <div class="col-3">
                  <img id="profile-picture" src="https://i.imgur.com/aBtdwcc.png" alt="CIS Website" />
                </div>
                <div class="col">
                  <p>
                    The website was developed from scratch taking into account the possible expansion of
                    the company. For that reason, Java was used since most of it makes use of static
                    elements that do not require more than a friendly and comfortable interface design.
                    A content delivery network was implemented because of the nature of the business, which
                    is an international English school, to ensure the fast load anywere in the world.
                  </p>
                  <strong>Technologies used:</strong>
                  <span class="badge badge-secondary">Java</span>
                  <span class="badge badge-secondary">JavaScript</span>
                  <span class="badge badge-secondary">HTML</span>
                  <span class="badge badge-secondary">CSS</span>
                </div>
              </div>
            </div>
            <div class="project">
              <h5>Recorda Ecommerce</h5>
              <div class="row">
                <div class="col-3">
                  <img
                    id="profile-picture"
                    src="https://i.imgur.com/hoxV3ta.png"
                    alt="Recorda Website"
                  />
                </div>
                <div class="col">
                  <p>
                    Laravel was used in the creation of this ecommerce website, in conjunction with other tools to achieve
                    a watch store for Recorda. An elegant design that favored the brand's sales efforts was taken
                    into account. For the improvement of the performance, the images were compressed and the HTML,
                    JS and CSS were minified so that the users did not have problems when loading the elements.
                  </p>
                  <strong>Technologies used:</strong>
                  <span class="badge badge-secondary">Java</span>
                  <span class="badge badge-secondary">JavaScript</span>
                  <span class="badge badge-secondary">Spring</span>
                  <span class="badge badge-secondary">HTML</span>
                  <span class="badge badge-secondary">CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h3 class="border-bottom-gray">Programming Skills</h3>
          <h4>Backend</h4>
          <ul>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
          <h4>Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h4>Frameworks</h4>
          <ul>
            <li>Spring</li>
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
          </ul>
          <h4>Tools</h4>
          <ul>
            <li>Docker</li>
            <li>Git</li>
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
      <div id="resume-footer" class="row">
        <div class="col">
          Designed by
          <a href="https://twitter.com/danojonguitud">@danojonguitud</a>
        </div>
      </div>
    </div>
  </div>
</template>


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
