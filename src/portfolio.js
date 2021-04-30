import emoji from 'react-easy-emoji';

import lambdaLogo from './assets/img/icons/common/lambda_icon.png'

export const greetings = {
    "name": "Michael Phelps",
    "title": "Hi all, I'm Mike!",
    "description": "A passionate Full Stack Web Developer having experience with building Web applications using JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks. Currently I am working as a Freelance Developer, available for one-off projects as well as long term contracts.",
    "resumeLink": "https://firebasestorage.googleapis.com/v0/b/phelpsweb-d4e40.appspot.com/o/Resume%20-%20Michael%20Phelps.pdf?alt=media&token=31836741-d4c9-4f5f-a834-f00cd5559e32"
}

export const openSource = {
  githubUserName: 'mphelps1978',
};

export const contact = {

}

export const socialLinks = {
    "facebook": "https://www.facebook.com/mjphelps1978",
    "twitter": "https://twitter.com/psybermind",
    "github": "https://github.com/mphelps1978",
    "linkedin": "https://www.linkedin.com/in/michael-phelps1978/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
      ),
      emoji(
        '⚡ Develop intuitive, scaling RESTful Api\'s for your web applications'
      ) ,
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],

    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'PostgreSQL',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend RESTful Api\'s',
      progressPercentage: '85',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Lambda School',
      subHeader: 'Certificate and Endorsement - Full Stack Web Development',
      duration: 'October 2019 - Present',
      desc: 'Lambda School is a 9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands on curriculum with a focus on comptuer science, software engineering and web development.',
      descBullets: [
        'Received Certificate of Graduation - 2021',
        'Received Endorsement - Full Stack Web Developer - 2021',
        'Served as Team Lead (Only 10% are hired from student pool)'
      ],
    },
    {
      schoolName: 'California State University, Fresno',
      subHeader: 'Bachelor of Science - Information Systems Engineering',
      duration: 'September 2000 - June 2004',
      desc: 'Obtained Professional Certifications from Microsoft, Novell, and Cisco Systems',
      descBullets: [
        'Serrved as On-Air Personality for university radio station',
      ],
    },
]

export const experience = [
  {
    role: 'Team Lead - Full Time',
    company: 'Lambda School',
    companylogo: lambdaLogo,
    date: 'February 2020 - October 2020',
    desc:
      'Directly responsible for managing teams of 4-8 engineering students',
    descBullets: [
      'Led daily standup meetings with the team to review technical concepts and provide further group coaching on those areas using a classroom-like approach via Zoom screen share',
      'Conducted 1 on 1 code reviews daily (approximately 40 per week) in line with assigned projects',
      'Served as project lead on multiple cross-functional builds, sprints, and projects'
    ],
  },
]

export const projects = [
  {
    name: "Tally-AI (front end)",
    desc: "A web-based app that allows you to learn what your customers think about your business based on Yelp! reviews ",
    link: {
      name: "github",
      url: "https://github.com/mphelps1978/tally-ai-fe"
    }
  },

  {
    name: "Tally-AI (back-end)",
    desc: "A RESTful API that serves as the data source for the front-end client, taking in ML Data from a data-science api",
    link: {
      name: "github",
      url: "https://github.com/mphelps1978/tally-ai-be"
    }
  },
  {
    name: "Covid-19 Tracker",
    desc: "A web-based application that tracks real world statistics on the H1N1 Coronavirus",
    link: {
      name: "github",
      url: "https://github.com/mphelps1978/pf-project-corona-tracker"
    }
  },
  {
    name: "The Game of Life",
    desc: "A simulation of cellular automata, or \'When one cell lives, another dies\'",
    link: {
      name: "github",
      url: "https://github.com/mphelps1978/game-of-life"
    }
  },
  {
    name: "Social-Clone - Functions",
    desc: "A Firebase Functions implementation of a simple social media implementation",
    link: {
      name: "github",
      url: "https://github.com/mphelps1978/social-clone-functions"
    }
  }
]