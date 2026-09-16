import { NextResponse } from "next/server";

export async function GET() {
  const resources = [
  {
    id: 1,
    title: "MDN Web Docs",
    description: "A comprehensive resource for learning HTML, CSS, JavaScript, and web APIs.",
    url: "https://developer.mozilla.org/",
    category: "Web Development",
    readTime: "10 min",
    author: "MDN Web Docs",
  },
  {
    id: 2,
    title: "React Documentation",
    description: "Learn the fundamentals of React and how to build modern user interfaces.",
    url: "https://react.dev/",
    category: "React",
    readTime: "15 min",
    author: "React Team",
  },
  {
    id: 3,
    title: "Next.js Documentation",
    description: "Learn how to build full-stack web applications with Next.js.",
    url: "https://nextjs.org/docs",
    category: "Next.js",
    readTime: "12 min",
    author: "Vercel",
  },
  {
    id: 4,
    title: "Google AI for Developers",
    description: "Explore AI concepts, tools, and resources for building AI-powered applications.",
    url: "https://ai.google.dev/",
    category: "Artificial Intelligence",
    readTime: "8 min",
    author: "Google",
  },
  {
    id: 5,
    title: "SQLBolt",
    description: "Interactive lessons for learning SQL and understanding relational databases.",
    url: "https://sqlbolt.com/",
    category: "Databases",
    readTime: "7 min",
    author: "SQLBolt",
  },
  {
    id: 6,
    title: "GitHub Skills",
    description: "Interactive courses that help you learn GitHub, Git, and collaborative development.",
    url: "https://skills.github.com/",
    category: "Git & GitHub",
    readTime: "10 min",
    author: "GitHub",
  },
  {
    id: 7,
    title: "freeCodeCamp",
    description: "Free interactive courses covering programming, web development, data analysis, and more.",
    url: "https://www.freecodecamp.org/",
    category: "Programming",
    readTime: "20 min",
    author: "freeCodeCamp",
  },
  {
    id: 8,
    title: "Figma Learn",
    description: "Learn UI design, prototyping, and collaborative design workflows with Figma.",
    url: "https://help.figma.com/",
    category: "UI/UX Design",
    readTime: "9 min",
    author: "Figma",
  },
  {
    id: 9,
    title: "Python Documentation",
    description: "Official documentation and tutorials for learning Python programming.",
    url: "https://docs.python.org/3/tutorial/",
    category: "Python",
    readTime: "14 min",
    author: "Python Software Foundation",
  },
];

  return NextResponse.json({ resources });
}