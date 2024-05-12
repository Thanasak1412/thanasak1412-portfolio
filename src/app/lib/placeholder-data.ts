export const homeHeroContent = {
  title: "Hey, I'm Thanasak Srisaeng",
  subtitle: 'and welcome to my portfolio!',
  desc: "I am a passionate full stack web developer with a knack for creating dynamic and intuitive web and applications. My journey in the world of programming began with a curiosity to understand how the digital realm works and a desire to craft solutions that make a difference. \n\n As a full stack developer, I thrive on both the frontend and backend aspects of web development. Whether it's building responsive websites, developing scalable web applications, or optimizing performance for enhanced user experience, I am always eager to push the boundaries of what's possible in the digital realm.",
};

export const socials = [
  {
    icon: '/icons/linkedin.svg',
    url: 'https://th.linkedin.com/in/thanasak-s-676224232/en?trk=people-guest_people_search-card',
    label: 'Linkedin',
  },
  {
    icon: '/icons/github.svg',
    url: 'https://github.com/Thanasak1412',
    label: 'Github',
  },
  {
    icon: '/icons/twitter.svg',
    url: 'https://twitter.com/Thanasak1412',
    label: 'Twitter',
  },
];

export const aboutContent = {
  title: 'About me',
  desc: 'Here you will find more information about me, what I do, and my current skills mostly in terms \nof programming and technology',
  getToKnowTitle: 'Get to know me!',
  getToKnowDesc:
    "I am a dedicated full stack web developer passionate about crafting elegant and functional digital solutions. With a background in both frontend and backend development, I thrive on transforming ideas into engaging user experiences. My journey in web development is driven by a commitment to continuous learning and a desire to create meaningful contributions to the digital landscape. Let's connect and explore how we can bring your vision to life.",
  skillTitle: 'My Skills',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'NextJs',
    'NodeJs',
    'NestJs',
    'SQL',
    'NoSQL',
    'Docker',
    'GIT',
    'Github',
    'Terminal',
  ],
};

export const projectsContent = {
  title: 'projects',
  desc: 'Here you will find some of the personal projects that I created with each project containing its own case study',
  projects: [
    {
      slug: 'simplify-financial',
      imageUrl: '/simplify-financial.avif',
      title: 'Simplify Financial',
      desc: 'Simplify Financial is a simplified version of the financial dashboard that has: \n\n A public home page{.}A login page.{.}Dashboard pages that are protected by authentication.{.}The ability for users to add, edit, and delete invoices.',
      overview:
        'Key Features: {.}Public Home Page: Provides information about the application and its features to visitors.{.}Login Page: Allows registered users to authenticate and access their accounts.{.}Dashboard Pages: Protected by authentication, these pages display financial data and allow users to mange their invoices.{.}Invoice Management: Users can add, edit, and delete invoices through the dashboard.',
      link: 'https://nextjs-dashboard-zeta-ruddy-72.vercel.app',
      githubLink: 'https://github.com/Thanasak1412/nextjs-dashboard',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      slug: 'spotify-clone',
      imageUrl: '/spotify-clone.jpeg',
      title: 'Spotify',
      desc: "The Spotify App Clone project aimed to recreate the core functionalities and design aesthetics of the popular music streaming application, Spotify. Through meticulous analysis of Spotify's architecture, user interface, and features, the project sought to replicate its essence while employing modern development practices.",
      overview:
        'The Spotify App Clone project successfully delivered a functional replica of the Spotify application, offering users a familiar music streaming experience with a sleek and intuitive interface. While maintaining the essence of the original app, the project adhered to legal guidelines regarding intellectual property rights and licensing agreements. \n\n Future Enhancements: \n\n Offline Mode: Implementing offline mode functionality to allow users to download songs and playlists for offline playback.{.}Enhanced Recommendations: Integrating machine learning algorithms to enhance personalized recommendations based on user behavior and preferences.{.}Social Interactions: Adding features for social interactions within the app, such as following friends, sharing activity feeds, and collaborative playlists.',
      link: 'https://nextjs-spotify-app-xi.vercel.app/',
      githubLink: 'https://github.com/Thanasak1412/nextjs-spotify-app',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      slug: 'ai-mood',
      imageUrl: '/ai-mood.jpeg',
      title: 'AI Mood',
      desc: "AI Mood is a web application that analyzes the mood of a given text messages using OpenAI's tools. \n\n The purpose of the project is to provide users with a tool to gauge the mood or sentiment conveyed in a text message. This could be useful in various contexts such as social media sentiment analysis, customer feedback analysis, or even personal communication analysis.",
      overview:
        "This project aims to create a web application that analyzes the mood of a given text message using OpenAI's tools, Let's break down the key components and what they entail \n\nPurpose: The purpose of the project is to provide users with a tool to gauge the mood or sentiment conveyed in a text message. This could be useful in various contexts such as social media sentiment analysis, customer feedback analysis, or even personal communication analysis.{.}OpenAI Integration: OpenAI provides powerful natural language processing tools, including models capable of understanding and analyzing text. In this project, the OpenAI API will be utilized to process the text input and generate a corresponding mood analysis.{.}Overall, the project involves a combination and backend and frontend development, integration with third-party APIs, deployment, and ongoing maintenance to create a functional and user-friendly web application for mood analysis.",
      link: 'https://ai-mood-three.vercel.app',
      githubLink: 'https://github.com/Thanasak1412/ai-mood',
      tools: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      slug: 'mood-tracker',
      imageUrl: '/mood-tracker.png',
      title: 'Mood Tracker',
      desc: 'Mood Tracker is an application that the users can log and track their moods over time. This can be immensely helpful for individuals to gain insights into their emotional well-being, identify patterns, and make positive changes in their lives.',
      overview:
        'The core concept of the project is to create a platform where users can log and track their moods over time. This can be immensely helpful for individuals to gain insights into their emotional well-being, identify patterns, and make positive changes in their lives. Overall, a mood tracker can be a valuable tool for individuals to monitor and manage their emotional health. By implementing the right features and prioritizing user experience, you can create a platform that empowers users to understand and improve their mood over time.',
      link: '#',
      githubLink: 'https://github.com/Thanasak1412/MoodTracker',
      tools: ['React Native', 'TypeSCript'],
    },
  ],
};

export const contactContent = {
  title: 'contact',
  desc: 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible',
  nameLabel: 'Name',
  namePlaceholder: 'Enter Your Name',
  emailLabel: 'Email',
  emailPlaceholder: 'Enter Your Email',
  messageLabel: 'Message',
  messagePlaceholder: 'Enter Your Message',
  submitButton: 'submit',
};

export const footerContent = {
  socialTitle: 'Social',
  socials: [
    {
      icon: '/icons/linkedin-ico.png',
      url: 'https://th.linkedin.com/in/thanasak-s-676224232/en?trk=people-guest_people_search-card',
      label: 'Linkedin',
    },
    {
      icon: '/icons/github-ico.png',
      url: 'https://github.com/Thanasak1412',
      label: 'Github',
    },
    {
      icon: '/icons/twitter-ico.png',
      url: 'https://twitter.com/Thanasak1412',
      label: 'Twitter',
    },
  ],
  name: 'Thanasak Srisaeng',
  desc: aboutContent.desc,
  copyright: '© Copyright {date}. Made by',
};

export const projectContent = {
  overviewTitle: 'Project Overview',
  tools: 'Tools Used',
  seeLive: 'See Live',
  projectLink: 'project link',
  sourceCodeButton: 'Source code link',
  backButton: 'go back',
};
