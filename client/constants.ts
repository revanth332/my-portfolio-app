import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Revathipathi Lanka",
  role: "Full Stack Developer",
  contact: {
    phone: "+91 9959965916",
    email: "revathipathilanka347@gmail.com",
    linkedin: "https://linkedin.com/in/revathipathi-lanka",
    github: "https://github.com/revanth332",
    location: "Tadepalligudem, Andhra Pradesh, India",
  },
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1lCP9QfwY7Nmclfz8JBdVRCqkQwnvrb95",
  summary: "Full Stack Developer with experience building enterprise AI systems using Python (FastAPI), Node.js, and React. Developed production conversational platforms using RAG pipelines, Azure AI Search, and streaming LLM responses. Skilled in API development, SQL schema design, and cloud deployment across Azure and GCP.",
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Node.js", "Express", "REST APIs", "Async Programming"],
    },
    {
      category: "AI Systems",
      items: ["RAG Systems", "Azure AI Search", "OpenAI APIs", "Gemini"],
    },
    {
      category: "Databases",
      items: ["SQL","MongoDB"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure", "GCP", "Docker"],
    },
  ],
  experience: [
    {
      company: "Miracle Software Systems",
      role: "Software Developer",
      period: "May 2024 – Present",
      location: "Visakhapatnam, India",
      points: [
        "Developed an Enterprise Conversational AI Platform using Python (FastAPI) and RAG pipelines with Azure AI Search, supporting ~100 internal users with sub-second streaming responses.",
        "Designed and implemented a robust MSSQL schema for persistent conversation history and dynamic context retrieval in production AI systems.",
        "Built an Industrial Device Intelligence Chatbot enabling natural language queries over InfluxDB time-series data using Vercel AI SDK and custom agent workflows.",
        "Developed a Voice-Based Invoice Generator using Azure Speech SDK and Blob Storage, reducing manual data entry time by 30–40% through automation.",
      ],
    },
  ],
  extractedProjects: [
    {
      title: "Enterprise Conversational AI Platform",
      description: "RAG-based chatbot using Azure AI Search, indexing ~200 enterprise documents and supporting ~100 internal users with streaming LLM responses.",
      technologies: ["Python", "FastAPI", "Azure AI Search", "MSSQL", "RAG"],
      icon: "MessageSquare",
    },
    {
      title: "Industrial Device Intelligence Chatbot",
      description: "AI assistant enabling engineers to query InfluxDB time-series sensor data using natural language and agent workflows.",
      technologies: ["Node.js", "SQL", "InfluxDB", "Vercel AI SDK"],
      icon: "Cpu",
    },
    {
      title: "Voice-Based Invoice Generator",
      description: "Hands-free invoice generation system utilizing Azure Speech SDK for real-time text-to-speech and speech-to-text interactions.",
      technologies: ["Azure Speech SDK", "Azure Blob Storage", "SQL", "Node.js"],
      icon: "Mic",
    },
    {
      title: "GenAI Code Migration Suite",
      description: "Automated code transformation tool enabling selective file extraction and version control using Gemini and Monaco Editor.",
      technologies: ["Gemini API", "Monaco Editor", "React", "TypeScript"],
      icon: "Code2",
    },
    {
      title: "AI Use Case Hub",
      description: "Searchable repository of AI implementations featuring infinite scroll, debounce search optimization, and chat previews.",
      technologies: ["React", "Search Algorithms", "UI/UX"],
      icon: "Database",
    },
  ],
  education: [
    {
      institution: "R.V.R & J.C Engineering College",
      degree: "B.Tech – Computer Science and Business Systems",
      period: "2020 – 2024",
      gpa: "CGPA: 8.49",
    },
  ],
  certifications: [
    { name: "Microsoft Azure AI Engineer Associate (AI-102)" },
    { name: "AWS Cloud Practitioner" },
    { name: "Infosys Springboard — Associate React Developer" },
  ],
  achievements: [
    { description: "Awarded Performer of the Month for high-impact AI solution delivery." },
    { description: "Secured 2nd place in company-wide internal AI Hackathon." },
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
