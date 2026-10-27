export const chapterInfo = {
  name: "Google Developer Groups on Campus",
  university: "Poornima University",
  location: "Jaipur, Rajasthan, India",
  tagline: "Official Google Developer Groups Chapter at Poornima University",
  description: "GDG on Campus Poornima University is the official Google-backed student technical community. We equip students with hands-on skills in Generative AI, Google Cloud, Android, and Web development to build impactful solutions.",
  stats: [
    { label: "Active Members", value: "1,800+", color: "google-blue" },
    { label: "Workshops & Gatherings", value: "35+", color: "google-red" },
    { label: "Community Builders", value: "300+", color: "google-yellow" },
    { label: "Cloud Lab Badges", value: "450+", color: "google-green" },
  ],
  links: {
    communityPage: "https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/",
    github: "https://github.com/gdg-pu",
    linkedin: "https://linkedin.com/company/gdg-poornima-university",
    discord: "https://discord.gg/gdgpu",
    instagram: "https://instagram.com/gdg_pu",
    twitter: "https://twitter.com/gdg_pu",
  }
};

export const realChapterPhotos = [
  {
    url: "/real_images/chapter_photo_1.png",
    caption: "Auditorium Technical Gathering",
    description: "Packed auditorium of students attending Google Cloud & AI orientation at Poornima University."
  },
  {
    url: "/real_images/chapter_photo_2.png",
    caption: "Stage Celebration & Student Cheers",
    description: "Core organizers, volunteers, and participants celebrating the completion of campus hackathon."
  },
  {
    url: "/real_images/chapter_photo_3.png",
    caption: "Hands-on Development Workshop",
    description: "Students actively engaged during hands-on coding sessions in the campus hall."
  }
];

export const realOrganizers = [
  {
    name: "Raghav Arora",
    role: "GDGoC Organizer",
    affiliation: "Poornima University",
    avatar: "/real_images/raghav_arora_circle.png",
    bio: "Core organizer of Google Developer Groups on Campus Poornima University, driving student tech workshops, cloud jams, and developer initiatives.",
    linkedin: "https://www.linkedin.com/in/raghavarora",
    github: "https://github.com",
    badge: "Chapter Organizer"
  },
  {
    name: "Keshav Verma",
    role: "GDGoC Organizer",
    affiliation: "Google Developer Groups on Campus - Poornima University",
    avatar: "/real_images/keshav_verma_circle.png",
    bio: "Passionate developer organizer leading collaborative coding hackathons, technical speaker outreach, and open-source projects at Poornima.",
    linkedin: "https://www.linkedin.com/in/keshavverma",
    github: "https://github.com",
    badge: "Chapter Organizer"
  },
  {
    name: "Devika Kanoongo",
    role: "GDGoC Organizer",
    affiliation: "Poornima University",
    avatar: "/real_images/devika_kanoongo_circle.png",
    bio: "Community builder and tech evangelist focusing on inclusive engineering spaces, AI workshops, and peer mentorship programs.",
    linkedin: "https://www.linkedin.com/in/devikakanoongo",
    github: "https://github.com",
    badge: "Chapter Organizer"
  },
  {
    name: "Dr. Rekha Nair",
    role: "Faculty Advisor & Dean CSE",
    affiliation: "Poornima University, Jaipur",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Dean of Computer Science & Engineering at Poornima University. Guiding academic innovation and student research with Google technology partnerships.",
    linkedin: "https://www.linkedin.com",
    badge: "Faculty Advisor"
  }
];

export const flagshipSpotlights = [
  {
    id: "spotlight-gemini",
    name: "Google Gemini Campus Assistant",
    tagline: "Multimodal AI Powered by Gemini 1.5 Pro & Vertex AI",
    badge: "Featured AI Initiative",
    icon: "Sparkles",
    color: "#4285F4",
    description: "An official campus AI assistant built with Google Gemini API, capable of answering university administrative queries, syllabus roadmaps, and providing real-time code debugging for students in Hindi and English.",
    features: [
      "Gemini 1.5 Pro & Flash multi-turn conversations",
      "Retrieval-Augmented Generation (RAG) on Poornima course syllabi",
      "Multimodal document analysis for assignments and lecture notes",
      "Interactive code assistance for student projects"
    ],
    techStack: ["Google Gemini API", "Vertex AI", "React.js", "Firebase", "Python"],
    github: "https://github.com/gdg-pu/pu-gemini-assistant",
    liveDemo: "https://gemini.google.com"
  },
  {
    id: "spotlight-fixmyroad",
    name: "FixMyRoad - Civic Road Damage AI",
    tagline: "Crowdsourced Pothole & Road Hazard Detection",
    badge: "Solution Challenge Project",
    icon: "AlertTriangle",
    color: "#EA4335",
    description: "A student-engineered civic utility mobile and web application that detects potholes, road cracks, and infrastructure hazards across Jaipur roads using computer vision, geo-tagging them directly for municipal repairs.",
    features: [
      "Automated road hazard detection using Cloud Vision API and TensorFlow",
      "Precise geolocation plotting with Google Maps Platform",
      "Community reporting pipeline with image verification",
      "Cloud Run microservices backend for automated dispatch alerts"
    ],
    techStack: ["Flutter", "Google Maps Platform", "Cloud Vision API", "Cloud Run", "Docker"],
    github: "https://github.com/gdg-pu/FixMyRoad",
    liveDemo: "https://fixmyroad.poornima.edu"
  }
];

export const chapterYearData = {
  current2026: {
    year: "2026",
    status: "Upcoming & Updating Soon",
    message: "Projects for the 2026 Chapter Season are currently in development. Submissions will open after the upcoming Google Solution Challenge kick-off and Campus Hackathon sprint.",
    actionPrompt: "Submit your team idea or join a project workgroup through our chapter community on Bevy."
  },
  archive2025: {
    year: "2025",
    theme: "The Multimodal AI & Cloud Era",
    stats: {
      workshops: "18+ Workshops",
      participants: "900+ Attendees",
      cloudBadges: "260+ Badges",
      hackathonTeams: "42 Teams"
    },
    highlights: [
      {
        title: "Google Gemini Multimodal Hack Sprint",
        desc: "Over 200 Poornima students developed prototypes using Gemini 1.5 Flash and Vertex AI SDKs."
      },
      {
        title: "FixMyRoad Deployment",
        desc: "Student civic project was showcased at Jaipur municipal tech review and recognized in regional tech rounds."
      },
      {
        title: "Google Cloud Study Jams 2025",
        desc: "Ranked among top participating campus chapters in Rajasthan for GenAI and Cloud Architecture completions."
      }
    ],
    projects: [
      {
        title: "FixMyRoad Civic Platform",
        category: "Mobile & Cloud AI",
        tech: "Flutter, Google Maps, Cloud Vision",
        stars: 120,
        status: "Completed & Deployed"
      },
      {
        title: "Google Gemini Campus AI",
        category: "Generative AI",
        tech: "Gemini API, React, Firebase",
        stars: 95,
        status: "Active Campus Utility"
      },
      {
        title: "PU Smart Lab IoT Monitor",
        category: "IoT & Cloud",
        tech: "Cloud Functions, Firestore, ESP32",
        stars: 64,
        status: "Completed"
      }
    ]
  },
  archive2024: {
    year: "2024",
    theme: "Foundations of Cloud & Native Mobile",
    stats: {
      workshops: "14+ Workshops",
      participants: "750+ Attendees",
      cloudBadges: "190+ Badges",
      hackathonTeams: "35 Teams"
    },
    highlights: [
      {
        title: "Inaugural HackPoornima 24-Hour Hackathon",
        desc: "400+ participants built hardware and software solutions addressing UN Sustainable Development Goals."
      },
      {
        title: "Android Compose Camp",
        desc: "A month-long intensive training series covering modern Kotlin and declarative UI architecture."
      },
      {
        title: "Google Summer of Code (GSoC) Roadshow",
        desc: "Alumni-led panels demystifying open-source contributions and pull-request best practices."
      }
    ],
    projects: [
      {
        title: "CampusNav PU 3D",
        category: "Web & GIS",
        tech: "Three.js, Google Maps Platform",
        stars: 88,
        status: "Completed"
      },
      {
        title: "CloudAttend Smart Registry",
        category: "Cloud & Hardware",
        tech: "NFC, Firestore, Cloud Run",
        stars: 76,
        status: "Completed"
      },
      {
        title: "EcoSort AI Edge Classifier",
        category: "Edge Computer Vision",
        tech: "TensorFlow Lite, Raspberry Pi",
        stars: 82,
        status: "Top 100 Solution Nominee"
      }
    ]
  }
};

export const techTracks = [
  {
    id: "ai-gemini",
    name: "AI & Google Gemini",
    icon: "Sparkles",
    color: "#4285F4",
    description: "Hands-on implementation of Google Gemini API, Vertex AI, TensorFlow, and agentic workflows.",
    topics: ["Gemini 1.5 Pro & Flash", "Prompt Engineering", "Fine-tuning", "TensorFlow", "Multimodal RAG"]
  },
  {
    id: "cloud",
    name: "Google Cloud Platform",
    icon: "Cloud",
    color: "#EA4335",
    description: "Cloud computing infrastructure, serverless with Cloud Run, Kubernetes (GKE), and BigQuery.",
    topics: ["Google Cloud Skills Boost", "Cloud Run & Docker", "Kubernetes (GKE)", "Firestore", "IAM Security"]
  },
  {
    id: "android",
    name: "Android & Flutter",
    icon: "Smartphone",
    color: "#34A853",
    description: "Modern Android engineering with Jetpack Compose, Kotlin, and cross-platform Flutter applications.",
    topics: ["Jetpack Compose", "Kotlin Coroutines", "Flutter 3.x", "Material 3 Design", "Play Console"]
  },
  {
    id: "web",
    name: "Modern Web & Firebase",
    icon: "Globe",
    color: "#FBBC05",
    description: "High-performance fullstack web development with React, Next.js, and Firebase services.",
    topics: ["React 19 & Tailwind", "Next.js App Router", "Firebase Auth & Firestore", "Web Performance"]
  }
];

export const eventsData = [
  {
    id: "evt-01",
    title: "DevFest Poornima: The Age of Multimodal AI",
    category: "DevFest",
    status: "Upcoming",
    featured: true,
    date: "November 15, 2026",
    time: "10:00 AM - 05:00 PM IST",
    location: "Main Auditorium, Poornima University, Jaipur",
    mode: "In-Person",
    image: "/real_images/chapter_photo_1.png",
    description: "The flagship annual tech conference by GDG on Campus Poornima University! Featuring Google Developer Experts, keynote addresses on Gemini API, hands-on lab sprints, and Google swags.",
    tags: ["Gemini AI", "Google Cloud", "DevFest", "Networking"],
    speakers: [
      { name: "Dr. Rekha Nair", role: "Dean CSE, Poornima University" },
      { name: "Raghav Arora", role: "GDGoC Organizer" },
      { name: "Keshav Verma", role: "GDGoC Organizer" }
    ],
    registrationOpen: true
  },
  {
    id: "evt-02",
    title: "Google Cloud Study Jam: Generative AI Sprint",
    category: "Workshop",
    status: "Upcoming",
    featured: false,
    date: "November 22, 2026",
    time: "02:00 PM - 05:30 PM IST",
    location: "Computer Center Lab 3 & Online",
    mode: "Hybrid",
    image: "/real_images/chapter_photo_2.png",
    description: "Get hands-on lab access to Google Cloud Skills Boost. Complete cloud quests, learn how to prompt and fine-tune Gemini models on Vertex AI, and earn free Google Cloud skill badges.",
    tags: ["Cloud", "Vertex AI", "Certification"],
    speakers: [
      { name: "Devika Kanoongo", role: "GDGoC Organizer" }
    ],
    registrationOpen: true
  },
  {
    id: "evt-03",
    title: "Hack Jaipur: Solve for Tomorrow",
    category: "Hackathon",
    status: "Upcoming",
    featured: true,
    date: "December 05 - 06, 2026",
    time: "36-Hour Hackathon",
    location: "Incubation Center, Poornima University",
    mode: "In-Person",
    image: "/real_images/chapter_photo_3.png",
    description: "A 36-hour hackathon challenging students to build high-impact solutions for UN Sustainable Development Goals using Google Cloud, Flutter, Firebase, and Gemini.",
    tags: ["Hackathon", "Prizes", "Mentorship"],
    speakers: [
      { name: "Tech Jury Panel", role: "Industry Leaders & Tech Founders" }
    ],
    registrationOpen: true
  }
];

export const faqsData = [
  {
    q: "Who can join GDG on Campus Poornima University?",
    a: "Any student enrolled in Poornima University (B.Tech, BCA, MCA, M.Tech, Design, or other programs) with an interest in technology, software development, design, or leadership can join. No prior coding experience is required!"
  },
  {
    q: "Are the workshops and events free to attend?",
    a: "Yes! All workshops, tech talks, study jams, and hackathons hosted by GDG on Campus Poornima University are 100% free of charge for students."
  },
  {
    q: "What is the difference between GDSC and GDG on Campus?",
    a: "Google has unified student developer programs under the global 'Google Developer Groups on Campus' (GDG on Campus) brand to provide students direct access to Google Developer programs, experts, and global opportunities."
  },
  {
    q: "How can I earn Google Cloud Badges and Swags?",
    a: "By participating in our Google Cloud Study Jams and completing tracks on Google Cloud Skills Boost, you earn verifiable digital badges and exclusive Google Developer swags."
  },
  {
    q: "How can I become a Core Team Member?",
    a: "Core team recruitments take place at the beginning of each academic session. Active participation in events, contributing to community projects, and volunteering during hackathons will fast-track your selection."
  }
];

export const resourcesData = [
  {
    title: "Google Cloud Skills Boost",
    category: "Cloud Computing",
    description: "Hands-on labs and learning paths for Cloud Architecture, Kubernetes, and Data Engineering.",
    url: "https://www.cloudskillsboost.google/",
    type: "Official Lab Portal",
    badge: "Free Credits"
  },
  {
    title: "Google Gemini Developer API Docs",
    category: "Artificial Intelligence",
    description: "Documentation, SDKs, and code samples for Gemini 1.5 Pro, Flash, and multimodal AI development.",
    url: "https://ai.google.dev/",
    type: "SDK & Documentation",
    badge: "Trending"
  },
  {
    title: "Android Basics with Compose",
    category: "Mobile Development",
    description: "Google's official curriculum to learn modern Android development with Kotlin and Jetpack Compose.",
    url: "https://developer.android.com/courses/android-basics-compose/course",
    type: "Course Curriculum",
    badge: "Beginner Friendly"
  },
  {
    title: "Google Solution Challenge Guide",
    category: "Hackathons",
    description: "Global student competition to solve one or more of the UN 17 Sustainable Development Goals using Google tech.",
    url: "https://developers.google.com/community/gdsc-solution-challenge",
    type: "Global Challenge",
    badge: "Global Prizes"
  }
];
