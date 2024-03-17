export const Resume = () => {
  return (
    <div
      style={{
        minHeight: "1600px",
        width: "100%",
        lineHeight: "2",
        scrollbarWidth: "none",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2>Summary</h2>
      <p>
        Senior Software Engineer seeking a role as a Tech Lead, Senior Frontend
        Developer or Full Stack Developer, experience with multiple languages,
        blockchain, containers, deployment, and strong object-oriented
        background.
      </p>

      <h2>Skills</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Object Oriented Programming</li>
        <li>HTML, CSS, Bootstrap, Tailwind</li>
        <li>JavaScript - React, Node, Typescript</li>
        <li>Styled-Components, Material UI, Antd</li>
        <li>Encryption, Hashing and Security</li>
        <li>Deployment - Heroku, Netlify</li>
        <li>Databases –SQL, NoSQL</li>
        <li>Big Data – Looker, Snowflake</li>
        <li>Containerization - Docker</li>
        <li>Version Control - Git</li>
      </ul>

      <h2>Relevant Experience</h2>
      <p>
        <strong>
          Acxiom | Senior Web Developer | Data Visualization & Analytics
        </strong>
        <br />
        January 2022 – Current | Conway, AR
        <br />
        <ul style={{ textAlign: "left" }}>
          <li>
            Produced deliverables ahead of deadlines consistently and reliably,
            by managing time and expectations with product stakeholders,
            resulting in large strides forward for velocity.
          </li>
          <li>
            Estimated workloads and updated product status by using agile
            practices, maintained in Jira and ClickUp.
          </li>
          <li>
            Engineered custom JavaScript logic in React for enterprise-level
            products and services, resulting in two full stack applications.
          </li>
          <li>
            Reviewed, debugged, and approved colleagues code changes using Git
            and GitHub, producing robust and reliable code.
          </li>
          <li>
            Determined architectural decisions of product software design using
            tools like LucidChart, resulting in an overall better experience
            developing throughout the roadmap.
          </li>
          <li>
            Collaborated with cross-functional teams to design and develop
            software solutions that met business needs and exceeded user
            expectations.
          </li>
        </ul>
      </p>

      <p>
        <strong>
          Freelance | Full Stack Software Engineer | Software Development &
          Design
        </strong>
        <br />
        October 2017 – December 2021 | Green Camp, OH
        <ul style={{ textAlign: "left" }}>
          <li>
            Managing client needs and producing deliverables to meet deadlines.
          </li>
          <li>
            Training, tutoring, and teaching software concepts and practices.
          </li>
          <li>
            Created a React component library in JavaScript and Typescript.
          </li>
          <li>
            Produced social media content to inform and educate on software
            engineering.
          </li>
        </ul>
      </p>

      <h2>Education</h2>
      <p>
        Marion Technical College | Marion, OH
        <p>
          Associate of Applied Science— Software Development | Summa Cum Laude
        </p>
      </p>

      <h2>Relevant Projects</h2>
      <p>
        <strong>Binary vs. Linear Search Visualizer | JavaScript, HTML</strong>
        <br />
        This application displays a visual representation of a binary and linear
        search. It was built with pure JavaScript. The application takes an
        object-oriented approach to the solution, by defining a Node class that
        is searched using binary search on one number line and linear search on
        the other. The target node is highlighted upon processing as each step
        in the program is slowed to one second using intervals to display the
        difference in time complexity.
      </p>

      <p>
        <strong>MiniFacebook| TypeScript, React, Redux, MongoDB</strong>
        <br />
        This is a social media app that is built with MongoDB Atlas and its own
        API to control the database from the React app. It also features user
        registration with JSON web token. You can post text, photos and video to
        a wall, add comments and likes, as well as delete posts that are yours.
        Redux is used for state management. The app uses a Typescript Node and
        Express backend, with a Typescript React, Redux frontend. I utilized the
        bCrypt library for password hashing.
      </p>

      <p>
        <strong>Admin System | JavaScript, Node, React, Typescript</strong>
        <br />
        This application allows a user to register and login via JSON web token
        and uses MongoDB Atlas for user authentication. This app has a post
        system with CRUD functionality as well as admin roles that can manage
        user accounts, as well as moderate the post system. The backend is in
        JavaScript and frontend in Typescript. I used Reactstrap library to
        design the app.
      </p>

      <p>
        <strong>Anabot | Node, Typescript, Redis, Vite, React</strong>
        <br />
        This is a ChatGPT integration that has its own NodeJS API which caches
        prompt responses using Redis. The frontend is a Typescript React
        application using Vite. Anabot is meant to analyze datasets and give
        insight into your data. It is built so you can just drop a dataset into
        the form and request an analysis.
      </p>
    </div>
  );
};
