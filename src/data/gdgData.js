export const chapterInfo = {
  name: "Google Developer Groups on Campus",
  university: "Poornima University",
  location: "Jaipur, Rajasthan, India",
  tagline: "Building Tomorrow's Tech Leaders at Poornima University",
  description: "GDG on Campus Poornima University is a dynamic, student-run developer community backed by Google Developers. We empower students to grow as software developers, designers, and innovators through hands-on workshops, hackathons, and Google cloud certifications.",
  stats: [
    { label: "Active Members", value: "1,800+", color: "google-blue", icon: "Users" },
    { label: "Events & Workshops", value: "35+", color: "google-red", icon: "Calendar" },
    { label: "Community Projects", value: "24+", color: "google-yellow", icon: "Code2" },
    { label: "Google Cloud Badges", value: "450+", color: "google-green", icon: "Award" },
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

export const techTracks = [
  {
    id: "ai-gemini",
    name: "AI & Gemini",
    icon: "Sparkles",
    color: "#4285F4",
    bgLight: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    description: "Explore Generative AI, Google Gemini API, Vertex AI, TensorFlow, and deep learning architectures to build intelligent solutions.",
    topics: ["Gemini 1.5 Pro & Flash", "Prompt Engineering", "Fine-tuning", "TensorFlow & Keras", "LangChain & Agents"]
  },
  {
    id: "cloud",
    name: "Google Cloud Platform",
    icon: "Cloud",
    color: "#EA4335",
    bgLight: "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
    description: "Master modern cloud architecture, serverless with Cloud Functions & Cloud Run, Kubernetes (GKE), and BigQuery.",
    topics: ["Google Cloud Skills Boost", "Kubernetes Engine (GKE)", "Cloud Run & Docker", "BigQuery Analytics", "IAM & Security"]
  },
  {
    id: "android",
    name: "Android & Flutter",
    icon: "Smartphone",
    color: "#34A853",
    bgLight: "bg-green-50 text-green-600 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800",
    description: "Craft performant native Android apps using Kotlin and Jetpack Compose, plus multi-platform experiences with Flutter.",
    topics: ["Jetpack Compose", "Kotlin Coroutines", "Flutter 3.x & Dart", "Material 3 Design", "Play Console Publishing"]
  },
  {
    id: "web",
    name: "Modern Web & Firebase",
    icon: "Globe",
    color: "#FBBC05",
    bgLight: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
    description: "Build ultra-fast, accessible web applications with React, Next.js, Progressive Web Apps (PWA), and Firebase fullstack.",
    topics: ["React 19 & Tailwind", "Next.js App Router", "Firebase Auth & Firestore", "Web Vitals & Performance", "REST & GraphQL"]
  },
  {
    id: "cybersec",
    name: "Security & Open Source",
    icon: "ShieldCheck",
    color: "#05488B",
    bgLight: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800",
    description: "Foster secure code practices, ethical hacking, and open source collaboration contributing to global repositories.",
    topics: ["Google Summer of Code (GSoC)", "Git & GitHub Pro", "OWASP Top 10", "Zero Trust Architecture", "Cryptographic Basics"]
  }
];

export const eventsData = [
  {
    id: "evt-01",
    title: "DevFest Poornima 2026: The Age of Multimodal AI",
    category: "DevFest",
    status: "Upcoming",
    featured: true,
    date: "November 15, 2026",
    time: "10:00 AM - 05:00 PM IST",
    location: "Main Auditorium, Poornima University, Jaipur",
    mode: "In-Person",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    description: "The flagship annual tech conference by GDG on Campus Poornima University! Featuring Google Developer Experts (GDE), keynote speeches on Gemini API, hands-on workshops, a hack sprint, and official Google swags.",
    tags: ["Gemini AI", "Google Cloud", "DevFest", "Networking", "Swag"],
    speakers: [
      { name: "Dr. Arvind Agarwal", role: "President, Poornima University", company: "Poornima University" },
      { name: "Ananya Sharma", role: "Google Developer Expert (AI/ML)", company: "Google Cloud Partner" },
      { name: "Rohan Verma", role: "GDG On-Campus Lead", company: "Poornima University" }
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
    location: "Computer Center Lab 3 & Online Stream",
    mode: "Hybrid",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    description: "Get hands-on lab access to Google Cloud Skills Boost. Complete cloud quests, learn how to prompt and fine-tune Gemini models on Vertex AI, and earn free Google Cloud skill badges and certificates.",
    tags: ["Cloud", "Vertex AI", "Certification", "Hands-on"],
    speakers: [
      { name: "Kunal Meena", role: "Cloud & DevOps Lead", company: "GDG-PU" }
    ],
    registrationOpen: true
  },
  {
    id: "evt-03",
    title: "Hack Jaipur 2026: Solve for Tomorrow",
    category: "Hackathon",
    status: "Upcoming",
    featured: true,
    date: "December 05 - 06, 2026",
    time: "36-Hour Hackathon",
    location: "Incubation Center, Poornima University",
    mode: "In-Person",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    description: "A 36-hour hackathon challenging students to build high-impact solutions for UN Sustainable Development Goals using Google Cloud, Flutter, Firebase, and Gemini. Cash prizes worth ₹1,50,000 + incubation mentorship.",
    tags: ["Hackathon", "Prizes", "Mentorship", "SDGs"],
    speakers: [
      { name: "Tech Jury Panel", role: "Industry Leaders & Tech Founders", company: "Jaipur Tech Hub" }
    ],
    registrationOpen: true
  },
  {
    id: "evt-04",
    title: "Android Compose Camp: Build Modern Apps",
    category: "Workshop",
    status: "Past",
    featured: false,
    date: "October 10, 2026",
    time: "11:00 AM - 03:00 PM IST",
    location: "Seminar Hall B, Poornima University",
    mode: "In-Person",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format&fit=crop&q=80",
    description: "Deep dive into declarative UI development for Android with Jetpack Compose. Over 180 students built their first interactive Android app and deployed to real Android devices.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Mobile"],
    speakers: [
      { name: "Priya Rathore", role: "Android Track Lead", company: "GDG-PU" }
    ],
    registrationOpen: false
  },
  {
    id: "evt-05",
    title: "Intro to Open Source & Google Summer of Code (GSoC)",
    category: "Info Session",
    status: "Past",
    featured: false,
    date: "September 24, 2026",
    time: "04:00 PM - 06:00 PM IST",
    location: "Virtual (Google Meet)",
    mode: "Online",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    description: "A session dedicated to navigating open source organizations, making your first pull request, finding mentor orgs in GSoC, and learning git fundamentals.",
    tags: ["Open Source", "GSoC", "GitHub", "Career"],
    speakers: [
      { name: "Devansh Pareek", role: "Former GSoC Contributor", company: "Chromium Project" }
    ],
    registrationOpen: false
  }
];

export const teamMembers = [
  {
    name: "Rohan Verma",
    role: "GDG On-Campus Lead",
    domain: "Leadership & Community",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bio: "Passionate about empowering student developers, full-stack engineer, and Google Cloud enthusiast at Poornima University.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    badge: "Chapter Lead"
  },
  {
    name: "Dr. Rekha Nair",
    role: "Faculty Advisor",
    domain: "Academic Mentorship",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Dean of Computer Science & Engineering, Poornima University. Guiding students towards excellence in technical research and innovation.",
    social: {
      linkedin: "https://linkedin.com"
    },
    badge: "Faculty Advisor"
  },
  {
    name: "Aarav Sharma",
    role: "AI / ML Technical Lead",
    domain: "AI & Data Science",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Deep learning practitioner, Gemini API researcher, and mentor for student AI hackathons.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    badge: "AI Lead"
  },
  {
    name: "Kunal Meena",
    role: "Cloud & DevOps Lead",
    domain: "Google Cloud & Infra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Certified Google Cloud Associate Cloud Engineer. Orchestrating Kubernetes, Terraform, and cloud native workshops.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    badge: "Cloud Lead"
  },
  {
    name: "Priya Rathore",
    role: "Mobile Lead (Android/Flutter)",
    domain: "Mobile Engineering",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    bio: "Building sleek, responsive mobile experiences with Kotlin Jetpack Compose and Flutter for thousands of campus users.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    badge: "Mobile Lead"
  },
  {
    name: "Sneha Goyal",
    role: "UI/UX & Design Lead",
    domain: "Product Design",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    bio: "Material 3 enthusiast, Figma wizard, and passionate about creating delightful accessibility-first experiences.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    badge: "Design Lead"
  },
  {
    name: "Vikram Shekhawat",
    role: "Event Operations & PR Lead",
    domain: "Community Management",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    bio: "Organizing smooth hackathons, logistics, speaker hosting, and university collaborations across Rajasthan.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    badge: "Ops Lead"
  },
  {
    name: "Isha Jain",
    role: "Web & Fullstack Lead",
    domain: "Web Technologies",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    bio: "TypeScript, React, and Supabase builder. Creator of campus utility tools and open source enthusiast.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    badge: "Web Lead"
  }
];

export const projectsData = [
  {
    id: "proj-01",
    title: "PU Gemini Campus AI Assistant",
    category: "AI & ML",
    techStack: ["Google Gemini API", "React", "Node.js", "Firebase"],
    description: "An intelligent bilingual AI assistant trained on Poornima University syllabi, exam schedules, and administrative queries for students and faculty.",
    github: "https://github.com/gdg-pu/pu-gemini-assistant",
    liveDemo: "https://gdg-pu.github.io/pu-gemini-assistant",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    stars: 84
  },
  {
    id: "proj-02",
    title: "FixMyRoad - Civic Issue Tracker",
    category: "Mobile & Cloud",
    techStack: ["Flutter", "Google Maps Platform", "Cloud Vision API", "Cloud Run"],
    description: "Crowdsourced pothole and civic hazard reporting app using computer vision to detect road damage in Jaipur and notify local authorities.",
    github: "https://github.com/gdg-pu/fixmyroad-pu",
    liveDemo: "https://fixmyroad.poornima.edu",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
    stars: 120
  },
  {
    id: "proj-03",
    title: "CloudAttend: Smart NFC & QR Attendance",
    category: "IoT & Cloud",
    techStack: ["Google Cloud Functions", "Firestore", "Next.js", "ESP32"],
    description: "Real-time automated classroom attendance system replacing paper registers with RFID/NFC cards, syncing data instantly to university portals.",
    github: "https://github.com/gdg-pu/cloud-attend",
    liveDemo: "#",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    stars: 65
  },
  {
    id: "proj-04",
    title: "EcoSort AI: Smart Waste Segregator",
    category: "AI & Hardware",
    techStack: ["TensorFlow Lite", "Raspberry Pi", "Android", "Firebase"],
    description: "Automated trash classification bin that sorts recyclable, biodegradable, and e-waste using custom trained edge computer vision models.",
    github: "https://github.com/gdg-pu/ecosort-ai",
    liveDemo: "#",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80",
    stars: 92
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
    a: "By participating in our Google Cloud Study Jams and completing tracks on Google Cloud Skills Boost, you earn verifiable digital badges and exclusive Google Developer swags (T-shirts, stickers, backpacks)."
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
    badge: "$10,000 Prizes"
  }
];
