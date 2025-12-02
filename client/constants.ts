import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  name: "Revathipathi Lanka",
  role: "Full-Stack Engineer & AI Specialist",
  contact: {
    phone: "+91 9959965916",
    email: "revathipathilanka347@gmail.com",
    linkedin: "https://linkedin.com/in/revathipathi-lanka",
    github: "https://github.com/revanth332",
    location: "Tadepalligudem, India",
  },
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1lCP9QfwY7Nmclfz8JBdVRCqkQwnvrb95",
  summary:
    "Full-stack engineer specializing in AI-powered web applications, LLM integrations, and real-time interactive systems. Experienced in building production-grade platforms using React, Next.js, Node.js, Azure, and modern UI frameworks. Delivered multiple GenAI features in production including intelligent chat workflows, document automation, voice-based tools, and code-transformation systems.",
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Shadcn",
        "Ant Design",
        "React Three Fiber",
        "Spline",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "AI / LLM",
      items: [
        "OpenAI APIs",
        "Azure OpenAI",
        "Gemini",
        "Vector Search",
        "Prompt Engineering",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Azure Logic Apps",
        "Azure AD (Entra ID)",
        "Docker",
        "Git",
        "CI/CD",
      ],
    },
    {
      category: "Real-Time Systems",
      items: ["WebSockets", "WebRTC"],
    },
    {
      category: "Other",
      items: ["Python (Automation)", "SQL Basics", "Agile Workflow"],
    },
  ],
  experience: [
    {
      company: "Miracle Software Systems",
      role: "Software Developer",
      period: "Jul 2024 – Present",
      location: "Visakhapatnam, India",
      points: [
        "Built an enterprise conversational chatbot using React and Azure AD with secure authentication and persistent chat history.",
        "Integrated LLM-driven charts, tables, and PDF generation, enabling richer interactive responses and improved user task completion.",
        "Developed a searchable AI Use Case Hub with infinite scroll, debounce search, and contextual chat previews.",
        "Built a voice-powered invoice generator using Azure Speech SDK with real-time TTS/STT interaction and automated PDF generation.",
        "Developed a GenAI-powered code migration suite using Monaco Editor and Gemini, enabling selective file extraction and version-controlled transformations.",
      ],
    },
  ],
  extractedProjects: [
    {
      title: "Enterprise AI Chatbot",
      description:
        "Secure conversational agent with persistent history, integrated authentication, and LLM-driven dynamic UI components (charts/tables).",
      technologies: ["React", "Azure AD", "Azure OpenAI", "Node.js"],
      icon: "MessageSquare",
    },
    {
      title: "GenAI Code Migration Suite",
      description:
        "Automated code transformation tool enabling selective file extraction and version control using Gemini and Monaco Editor.",
      technologies: ["Gemini API", "Monaco Editor", "React", "TypeScript"],
      icon: "Code2",
    },
    {
      title: "Voice Invoice Generator",
      description:
        "Hands-free invoice generation system utilizing Azure Speech SDK for real-time text-to-speech and speech-to-text interactions.",
      technologies: [
        "Azure Speech SDK",
        "PDF Generation",
        "React",
        "Web Speech API",
      ],
      icon: "Mic",
    },
    {
      title: "AI Use Case Hub",
      description:
        "Searchable repository of AI implementations featuring infinite scroll, debounce search optimization, and chat previews.",
      technologies: ["React", "Search Algorithms", "UI/UX"],
      icon: "Database",
    },
  ],
  education: [
    {
      institution: "R.V.R & J.C Engineering College",
      degree: "B.Tech in Computer Science and Business Systems",
      period: "2020 – 2024",
      gpa: "CGPA: 8.49",
    },
    {
      institution: "Chaithanya Junior College",
      degree: "Intermediate",
      period: "2018 – 2020",
      gpa: "GPA: 9.87",
    },
  ],
  certifications: [
    { name: "Microsoft Azure AI Engineer Associate (AI-102)" },
    { name: "AWS Cloud Practitioner" },
    { name: "Infosys Springboard — Associate React Developer" },
  ],
  achievements: [
    {
      description:
        "Delivered GenAI modernization suite reducing LLM token usage by 50%.",
    },
    {
      description:
        "Improved enterprise chatbot engagement with dynamic LLM-based visuals.",
    },
    {
      description:
        "Awarded Performer of the Month for high-impact GenAI delivery.",
    },
    { description: "Secured 2nd place in the internal company AI Hackathon." },
    { description: "Solved 300+ coding problems on LeetCode/CodeChef." },
  ],
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Revathipathi Lanka's portfolio website. Your role is to answer questions about Revathipathi based strictly on his resume data.

Here is the context:
${JSON.stringify(RESUME_DATA, null, 2)}

Guidelines:
1. Be professional, concise, and enthusiastic.
2. If asked about contact info, provide the email or LinkedIn link.
3. Highlight his expertise in AI, React, and Azure.
4. If asked about a specific project, describe it using the details provided.
5. If the user asks something not in the resume, politely say you don't have that information but suggest contacting him directly.
6. Keep answers short (under 100 words) unless detailed explanation is requested.
`;
