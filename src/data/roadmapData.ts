import { RoadmapMonth, SyllabusCategory, LearningResource } from '../types/roadmap';

export const ROADMAP_MONTHS: RoadmapMonth[] = [
  // Year 1 (Months 1-12)
  {
    monthId: 1,
    monthRange: "মাস ১-২",
    year: 1,
    title: "Programming Foundation (Python + C Refresh)",
    bengaliTitle: "প্রোগ্রামিং ফাউন্ডেশন (Python + C ঝালাই)",
    targetCategory: "Foundation",
    learningFocus: [
      "Variables, Data types (int, float, string, boolean)",
      "Loops (for, while), nested loops, break/continue",
      "Functions, parameters, return values, *args, **kwargs",
      "Arrays/Lists, Tuples, Sets, Dictionaries (key-value, iteration)",
      "Recursion basics (factorial, fibonacci)",
      "File I/O (read/write text, CSV/JSON), Modules & packages, pip & venv"
    ],
    bengaliLearningFocus: [
      "variables, loops, functions, arrays/lists, strings, dictionaries, recursion বেসিক, file I/O",
      "C ল্যাঙ্গুয়েজের পয়েন্টার ও মেমরি মডেল আবার ঝালাই করে পাইথনে শিফট করা",
      "ফাংশনাল কনসেপ্ট: lambda, map/filter/reduce ও বেসিক ডিবাগিং"
    ],
    sources: [
      {
        name: "CS50x (Harvard University)",
        url: "https://cs50.harvard.edu/x/",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি (YouTube + edX)। প্রথম কয়েক সপ্তাহ C আবার দারুণভাবে ঝালাই হয়ে যাবে।"
      },
      {
        name: "freeCodeCamp - Python for Beginners",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        type: "YouTube",
        isFree: true,
        notes: "৪-৫ ঘণ্টার পূর্ণ কোর্স, বিগিনারদের জন্য সেরা হ্যান্ডস-অন গাইড।"
      },
      {
        name: "Corey Schafer - Python Playlist",
        url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyMTDIRhPZ4o49N4",
        type: "YouTube",
        isFree: true,
        notes: "পাইথনের ইন-ডেপথ টিউটোরিয়াল ও অত্যন্ত স্পষ্ট ব্যাখ্যা।"
      },
      {
        name: "HackerRank - Python Track",
        url: "https://www.hackerrank.com/domains/python",
        type: "Practice",
        isFree: true,
        notes: "সপ্তাহে অন্তত ২০টা ছোট প্রবলেম সলভ করার প্র্যাকটিস প্ল্যাটফর্ম।"
      }
    ],
    proof: "Daily code commits to GitHub. Solve at least 20 small problems/week on HackerRank Python track.",
    bengaliProof: "প্রতিদিনের কোড GitHub-এ commit; সপ্তাহে অন্তত ২০টা ছোট প্রবলেম সলভ (HackerRank 'Python' ট্র্যাক)।",
    syllabusCategoryIds: ["python-foundation"],
    keyMilestone: "20+ problems/week solved on HackerRank + daily GitHub commit streak"
  },
  {
    monthId: 2,
    monthRange: "মাস ১-২",
    year: 1,
    title: "Programming Foundation (OOP & Deep Python)",
    bengaliTitle: "প্রোগ্রামিং ফাউন্ডেশন (অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ও ফাইল I/O)",
    targetCategory: "Foundation",
    learningFocus: [
      "Object-Oriented Programming (Classes & Objects, __init__ constructor)",
      "Inheritance (single & multiple), Polymorphism, Encapsulation, Abstraction",
      "Magic / Dunder methods (__str__, __repr__, __len__)",
      "Exception handling (try/except/finally, custom exceptions)",
      "Project work: CLI tools, file parsers, mini game/automation"
    ],
    bengaliLearningFocus: [
      "ক্লাস ও অবজেক্ট, কনস্ট্রাক্টর, ইনহেরিটেন্স, পলিমরফিজম, এনক্যাপসুলেশন ও অ্যাবস্ট্রাকশন",
      "ম্যাজিক/ডান্ডার মেথড ও এক্সেপশন হ্যান্ডলিং",
      "ভার্চুয়াল এনভায়রনমেন্ট (venv) ও প্যাকেজ ম্যানেজমেন্ট"
    ],
    sources: [
      {
        name: "Corey Schafer - Python OOP Tutorials",
        url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIAb376EYmvOTzMtVD3r",
        type: "YouTube",
        isFree: true,
        notes: "OOP-র প্রতিটি কনসেপ্ট বাস্তব উদাহরণ সহ ব্যাখ্যা।"
      },
      {
        name: "CS50P - CS50's Intro to Programming with Python",
        url: "https://cs50.harvard.edu/python/",
        type: "Course",
        isFree: true,
        notes: "হার্ভার্ডের অফিশিয়াল পাইথন কোর্স উইথ ভ্যালিডেটেড প্রজেক্টস।"
      }
    ],
    proof: "Build 2 mini CLI tools or automation scripts with OOP structure and push to GitHub.",
    bengaliProof: "OOP আর্কিটেকচার ব্যবহার করে অন্তত ২টা ছোট CLI টুল বানিয়ে GitHub-এ পুশ করা।",
    syllabusCategoryIds: ["python-foundation"],
    keyMilestone: "Solid mastery of Python OOP, dunder methods & file I/O"
  },
  {
    monthId: 3,
    monthRange: "মাস ৩-৪",
    year: 1,
    title: "Data Structures & Algorithms (Part 1) + Git",
    bengaliTitle: "ডাটা স্ট্রাকচার ও অ্যালগরিদম (পর্ব ১) + Git",
    targetCategory: "DSA",
    learningFocus: [
      "Complexity analysis: Time & Space complexity, Big-O notation (O(1), O(log n), O(n), O(n log n), O(n²))",
      "Arrays & Strings: Two-pointer technique, Sliding window, Prefix sum",
      "Linked Lists: Singly, Doubly, Circular, Reversal, Floyd's cycle detection",
      "Git & GitHub: init, commit, branch, merge, pull requests, push"
    ],
    bengaliLearningFocus: [
      "array, linked list, stack, queue, hashmap, sorting, searching, Big-O",
      "Git ও GitHub-এর প্রফেশনাল ওয়ার্কফ্লো আয়ত্ত করা",
      "LeetCode-এ প্রফেশনাল প্রোফাইল তৈরি ও নিয়মিত ট্র্যাকিং"
    ],
    sources: [
      {
        name: "Abdul Bari - Algorithms Playlist",
        url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
        type: "YouTube",
        isFree: true,
        notes: "উপমহাদেশে সবচেয়ে জনপ্রিয় ও স্পষ্ট DSA কোর্স।"
      },
      {
        name: "freeCodeCamp - Git and GitHub for Beginners",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        type: "YouTube",
        isFree: true,
        notes: "গিট ব্রাঞ্চিং, মার্জিং ও রিমোট রিপোজিটরির সহজ টিউটোরিয়াল।"
      },
      {
        name: "LeetCode (Beginner Curated)",
        url: "https://leetcode.com/problemset/all/",
        type: "Practice",
        isFree: true,
        notes: "Easy লেভেলের অন্তত ৫০টা প্রবলেম সলভ করার টার্গেট।"
      }
    ],
    proof: "Open LeetCode profile, solve at least 25-50 Easy problems, all code committed to GitHub via Git CLI.",
    bengaliProof: "LeetCode-এ প্রোফাইল খোলো, Easy লেভেলের অন্তত ৫০টা প্রবলেম সলভ করো, GitHub-এ সব push।",
    syllabusCategoryIds: ["dsa", "devops"],
    keyMilestone: "First 25 LeetCode Easy problems solved + Git proficient"
  },
  {
    monthId: 4,
    monthRange: "মাস ৩-৪",
    year: 1,
    title: "DSA (Part 1 Continued: Stacks, Queues & Hashing)",
    bengaliTitle: "ডাটা স্ট্রাকচার ও অ্যালগরিদম (স্ট্যাক, কিউ ও হ্যাশিং)",
    targetCategory: "DSA",
    learningFocus: [
      "Stack implementation, parenthesis matching, expression evaluation",
      "Queue, circular queue, deque, monotonic stack/queue basics",
      "Hashing: HashMap/HashSet internals, collision handling, frequency counters",
      "Sorting & Searching: Merge sort, Quick sort, Binary search variants"
    ],
    bengaliLearningFocus: [
      "স্ট্যাক ও কিউ এর বাস্তব ব্যবহার (যেমন প্যারেন্থেসিস ভ্যালিডেশন, ব্যাক-ট্র্যাকিং)",
      "হ্যাশম্যাপ দিয়ে O(1) লুকআপ প্যাটার্ন সমাধান করা",
      "মার্জ সর্ট এবং কুইক সর্টের রিকার্সিভ আর্কিটেকচার বোঝা"
    ],
    sources: [
      {
        name: "Abdul Bari - Divide and Conquer & Sorting",
        url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
        type: "YouTube",
        isFree: true,
        notes: "Quick sort, Merge sort এবং রিকার্শন ট্রি অ্যানালাইসিস।"
      },
      {
        name: "NeetCode - Arrays & Hashing Roadmap",
        url: "https://neetcode.io/roadmap",
        type: "Platform",
        isFree: true,
        notes: "ভিজ্যুয়াল ড্রয়িং সহ প্রবলেম সল্যুশন গাইড।"
      }
    ],
    proof: "Complete 50 total LeetCode problems (Array, Hashing, Two-Pointer, Stack).",
    bengaliProof: "LeetCode-এ মোট ৫০+ প্রবলেম কমপ্লিট করা এবং গিটহাবে সমাধান ডকুমেন্ট করা।",
    syllabusCategoryIds: ["dsa"],
    keyMilestone: "50 LeetCode Easy Milestone achieved"
  },
  {
    monthId: 5,
    monthRange: "মাস ৫-৬",
    year: 1,
    title: "Web Development (Frontend: HTML, CSS & Modern JS)",
    bengaliTitle: "ওয়েব ডেভেলপমেন্ট (ফ্রন্টএন্ড: HTML, CSS ও মডার্ন জাভাস্ক্রিপ্ট)",
    targetCategory: "Web Frontend",
    learningFocus: [
      "Semantic HTML5 (header, nav, main, section, article, footer)",
      "CSS Box model, Flexbox, Grid, Responsive media queries, CSS variables",
      "JavaScript Core: let/const, types, scope, arrow functions, closures",
      "Array methods (map, filter, reduce), DOM manipulation, Event loop, Promises, Fetch API"
    ],
    bengaliLearningFocus: [
      "HTML, CSS, JavaScript (DOM, async/await, fetch API)",
      "রেসপন্সিভ ডিজাইন ও ফ্লিপবক্স/গ্রিড দিয়ে পিক্সেল-পারফেক্ট লেআউট তৈরি",
      "জাভাস্ক্রিপ্টের ইভেন্ট লুপ ও অ্যাসিনক্রোনাস আর্কিটেকচার আয়ত্ত করা"
    ],
    sources: [
      {
        name: "The Odin Project (odinproject.com)",
        url: "https://www.theodinproject.com/",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি স্ট্রাকচার্ড কারিকুলাম, ওয়েব ডেভের জন্য সেরা ফ্রি রিসোর্স।"
      },
      {
        name: "freeCodeCamp - Responsive Web Design",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        type: "Course",
        isFree: true,
        notes: "সার্টিফিকেশন ট্র্যাক সহ লাইভ কোডিং প্র্যাকটিস।"
      },
      {
        name: "freeCodeCamp - JavaScript Algorithms and Data Structures",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
        type: "Course",
        isFree: true,
        notes: "মডার্ন জাভাস্ক্রিপ্ট ও ফান্ডামেন্টালস।"
      }
    ],
    proof: "Build 1 responsive portfolio/landing page and deploy to GitHub Pages / Vercel.",
    bengaliProof: "একটি সম্পূর্ণ রেসপন্সিভ ওয়েবসাইট বানিয়ে GitHub Pages বা Vercel-এ লাইভ ডিপ্লয় করা।",
    syllabusCategoryIds: ["frontend"],
    keyMilestone: "First live deployed responsive web page"
  },
  {
    monthId: 6,
    monthRange: "মাস ৫-৬",
    year: 1,
    title: "Web Development (Frontend: React Basics & SPAs)",
    bengaliTitle: "ওয়েব ডেভেলপমেন্ট (ফ্রন্টএন্ড: React বেসিক ও সিঙ্গেল পেজ অ্যাপ)",
    targetCategory: "Web Frontend",
    learningFocus: [
      "JSX, functional components, component tree",
      "Props, State, useState, useEffect, conditional & list rendering",
      "Controlled forms, basic component lifecycle",
      "React Router for multi-view single page applications"
    ],
    bengaliLearningFocus: [
      "React বেসিক, হুকস (useState, useEffect) ও কম্পোনেন্ট আর্কিটেকচার",
      "API থেকে ডাটা এনে UI-তে রেন্ডার করা এবং লোডিং/এরর স্টেট হ্যান্ডলিং",
      "২টা স্ট্যাটিক/ইন্টারেক্টিভ ওয়েবসাইট বানিয়ে ডিপ্লয় করা"
    ],
    sources: [
      {
        name: "Traversy Media - React Crash Course",
        url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        type: "YouTube",
        isFree: true,
        notes: "সহজ ভাষায় রিয়্যাক্ট কম্পোনেন্ট, হুকস ও স্টেট ম্যানেজমেন্টের দ্রুত সূচনা।"
      },
      {
        name: "React Official Documentation (react.dev)",
        url: "https://react.dev/learn",
        type: "Docs",
        isFree: true,
        notes: "নতুন ইন্টারঅ্যাক্টিভ অফিশিয়াল ডকুমেন্টেশন।"
      }
    ],
    proof: "Build 2 static/interactive websites and deploy them to GitHub Pages or Vercel.",
    bengaliProof: "২টা static/interactive ওয়েবসাইট বানিয়ে GitHub Pages/Vercel-এ deploy করা।",
    syllabusCategoryIds: ["frontend"],
    keyMilestone: "2 live interactive React websites on Vercel"
  },
  {
    monthId: 7,
    monthRange: "মাস ৭-৮",
    year: 1,
    title: "Backend + Database (Node.js/Express & SQL)",
    bengaliTitle: "ব্যাকএন্ড + ডাটাবেস (Node.js/Express ও SQL/MongoDB)",
    targetCategory: "Web Backend",
    learningFocus: [
      "HTTP methods (GET, POST, PUT, PATCH, DELETE), Status codes, REST principles",
      "Express server: Routing, Middleware, Request body parsing, Error handling",
      "Relational Database: SQL schema design, primary/foreign keys, joins (inner, left, right), indexes, normalization",
      "ORM: Prisma or Sequelize / Mongoose"
    ],
    bengaliLearningFocus: [
      "Node.js + Express (অথবা Python + Django/FastAPI — একটা বেছে নাও), REST API",
      "PostgreSQL/MongoDB, authentication (JWT), password hashing (bcrypt)",
      "ডাটাবেস কানেক্টিভিটি ও Postman দিয়ে API টেস্টিং"
    ],
    sources: [
      {
        name: "freeCodeCamp - Back End Development and APIs",
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
        type: "Course",
        isFree: true,
        notes: "সার্টিফিকেশন ট্র্যাক — Express, MongoDB ও API ডিজাইন।"
      },
      {
        name: "Net Ninja - Node.js & Express Playlist",
        url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU",
        type: "YouTube",
        isFree: true,
        notes: "অত্যন্ত গোছানো ও বিগিনার-বান্ধব প্লেলিস্ট।"
      },
      {
        name: "freeCodeCamp - Relational Database / SQL Course",
        url: "https://www.freecodecamp.org/learn/relational-database/",
        type: "Course",
        isFree: true,
        notes: "SQL বেসিক ও ইন্টারমিডিয়েট কোয়েরি হ্যান্ডস-অন।"
      }
    ],
    proof: "Build a REST API connected to database, tested thoroughly with Postman.",
    bengaliProof: "একটা REST API বানাও যেটা database-এর সাথে কানেক্টেড, Postman দিয়ে টেস্ট করা।",
    syllabusCategoryIds: ["backend"],
    keyMilestone: "Complete CRUD REST API with DB & Postman collection"
  },
  {
    monthId: 8,
    monthRange: "মাস ৭-৮",
    year: 1,
    title: "Backend Auth & Security (JWT, bcrypt & Architecture)",
    bengaliTitle: "ব্যাকএন্ড সিকিউরিটি ও অথেনটিকেশন (JWT, হ্যাশিং ও আর্কিটেকচার)",
    targetCategory: "Web Backend",
    learningFocus: [
      "Authentication & Authorization: Session vs Token-based auth",
      "JWT (JSON Web Token) generation & verification middleware",
      "Password hashing using bcrypt, salting",
      "OAuth concept-level overview (Google/GitHub login flow)",
      "Environment variables & secret management (.env)"
    ],
    bengaliLearningFocus: [
      "ইউজার রেজিস্ট্রেশন, লগইন এবং সুরক্ষিত রাউট গার্ড তৈরি",
      "পাসওয়ার্ড হ্যাশিং এবং নিরাপদ টোকেন স্টোরেজ",
      "রেট লিমিটিং ও ইনপুট ভ্যালিডেশন মিডলওয়্যার"
    ],
    sources: [
      {
        name: "Net Ninja - Node.js Auth Tutorial (JWT)",
        url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT",
        type: "YouTube",
        isFree: true,
        notes: "JWT ভিত্তিক সুরক্ষিত অথেনটিকেশন সিস্টেমের বিস্তারিত টিউটোরিয়াল।"
      },
      {
        name: "OWASP Top 10 Security Checklist",
        url: "https://owasp.org/www-project-top-ten/",
        type: "Docs",
        isFree: true,
        notes: "ওয়েব অ্যাপ্লিকেশন সিকিউরিটির বৈশ্বিক স্ট্যান্ডার্ড।"
      }
    ],
    proof: "Build secure auth API with register, login, refresh token, and protected user endpoints.",
    bengaliProof: "একটি পূর্ণাঙ্গ সিকিউর অথেনটিকেশন API তৈরি ও টেস্ট করা।",
    syllabusCategoryIds: ["backend"],
    keyMilestone: "Production-ready JWT Auth system"
  },
  {
    monthId: 9,
    monthRange: "মাস ৯-১০",
    year: 1,
    title: "First Full-Stack Project + AI Integration (Planning & Backend)",
    bengaliTitle: "প্রথম Full-Stack প্রজেক্ট + AI ইন্টিগ্রেশন (পর্ব ১: ব্যাকএন্ড ও এআই কানেকশন)",
    targetCategory: "Full-Stack + AI",
    learningFocus: [
      "Bridging Frontend + Backend + Database seamlessly",
      "Integrating AI APIs (OpenAI / Claude / Gemini API)",
      "Prompt engineering (effective prompt structures, system prompts, structured outputs)",
      "Server-side API proxying to keep API keys secure"
    ],
    bengaliLearningFocus: [
      "frontend + backend + database জোড়া লাগানো",
      "একটা AI API (OpenAI/Claude/Gemini) ইন্টিগ্রেট করা",
      "Anthropic/OpenAI/Google AI-এর অফিশিয়াল API ডকুমেন্টেশন নিজে পড়ে ইমপ্লিমেন্ট করা"
    ],
    sources: [
      {
        name: "Official Google AI / Gemini API Docs",
        url: "https://ai.google.dev/docs",
        type: "Docs",
        isFree: true,
        notes: "অফিশিয়াল ডকুমেন্টেশন নিজে পড়ে ইমপ্লিমেন্ট করা এখানে শেখার সবচেয়ে বড় অংশ।"
      },
      {
        name: "OpenAI API Documentation",
        url: "https://platform.openai.com/docs",
        type: "Docs",
        isFree: true,
        notes: "চ্যাট কমপ্লিশন ও স্ট্রাকচার্ড প্রম্পটিং গাইড।"
      }
    ],
    proof: "Server endpoint connected to an AI model with custom prompt pipeline.",
    bengaliProof: "সার্ভারে এআই এপিআই প্লাগ করে কাস্টম প্রম্পট পাইপলাইন টেস্ট করা।",
    syllabusCategoryIds: ["fullstack", "ai-ml"],
    keyMilestone: "Functional AI proxy backend running with secure credentials"
  },
  {
    monthId: 10,
    monthRange: "মাস ৯-১০",
    year: 1,
    title: "First Full-Stack Project + AI Integration (Deploy & Polish)",
    bengaliTitle: "প্রথম Full-Stack প্রজেক্ট + AI ইন্টিগ্রেশন (পর্ব ২: ডিপ্লয়মেন্ট ও পোর্টফোলিও)",
    targetCategory: "Full-Stack + AI",
    learningFocus: [
      "Polished UI/UX for AI features (streaming responses, loading skeletons, error states)",
      "Cloud deployment: Vercel/Netlify for client, Render/Railway/Cloud Run for server",
      "Writing clean README with architecture diagram, screenshots, and live link",
      "Setting up project as headline resume showcase"
    ],
    bengaliLearningFocus: [
      "একটা সম্পূর্ণ ডিপ্লয়েড অ্যাপ যেটাতে AI-powered একটা ফিচার আছে (chatbot, summarizer, recommendation)",
      "এটা তোমার portfolio-র হেডলাইন প্রজেক্ট হবে",
      "প্রফেশনাল ডকুমেন্টেশন ও গিটহাব রিডমি তৈরি"
    ],
    sources: [
      {
        name: "Railway / Render Deployment Docs",
        url: "https://docs.railway.app/",
        type: "Docs",
        isFree: true,
        notes: "ফুলস্ট্যাক নোড/পাইথন অ্যাপ ক্লাউডে সহজে হোস্টিং।"
      },
      {
        name: "Vercel Frontend Deployment",
        url: "https://vercel.com/docs",
        type: "Docs",
        isFree: true,
        notes: "রিয়্যাক্ট ফ্রন্টএন্ড ডিপ্লয়মেন্ট ও এনভায়রনমেন্ট ভেরিয়েবল সেটআপ।"
      }
    ],
    proof: "A fully deployed live web application with a real AI feature (chatbot, summarizer, or recommendation engine). Headline portfolio project.",
    bengaliProof: "একটা সম্পূর্ণ ডিপ্লয়েড অ্যাপ যেটাতে AI-powered একটা ফিচার আছে (chatbot, summarizer, recommendation) — এটা তোমার portfolio-র হেডলাইন প্রজেক্ট হবে।",
    syllabusCategoryIds: ["fullstack", "devops"],
    keyMilestone: "Deployed AI-Powered Full-Stack Headline Project"
  },
  {
    monthId: 11,
    monthRange: "মাস ১১-১২",
    year: 1,
    title: "AI/ML Basics + Math Foundation",
    bengaliTitle: "AI/ML বেসিক শুরু + গণিত ভিত্তি",
    targetCategory: "AI/ML",
    learningFocus: [
      "Math for ML: Linear Algebra (vectors, matrices, dot product), Probability & Statistics intuition (mean, variance, normal distributions, Bayes' theorem), Calculus intuition (derivatives, gradients)",
      "Data handling: NumPy array ops, Pandas DataFrame (filtering, groupby, data cleaning)",
      "Data visualization: Matplotlib / Seaborn basics"
    ],
    bengaliLearningFocus: [
      "Math for ML: linear algebra, probability, statistics বেসিক (ভয় পাওয়ার দরকার নেই, শুধু intuition লাগবে এখন)",
      "NumPy এবং Pandas দিয়ে বাস্তব ডেটাসেট প্রসেসিং ও ক্লিনিং",
      "Kaggle Learn-এর মাইক্রো-কোর্সগুলো দ্রুত শেষ করা"
    ],
    sources: [
      {
        name: "Kaggle Learn (kaggle.com/learn)",
        url: "https://www.kaggle.com/learn",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি, ছোট ছোট মাইক্রো-কোর্স (Python, Pandas, Intro to ML, Intermediate ML)।"
      },
      {
        name: "3Blue1Brown - Essence of Linear Algebra",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        type: "YouTube",
        isFree: true,
        notes: "লিনিয়ার অ্যালজেবরার ভিজ্যুয়াল ইনটুইশন পাওয়ার সেরা চ্যানেল।"
      },
      {
        name: "Andrew Ng - Machine Learning Specialization",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        type: "Course",
        isFree: true,
        notes: "Coursera/DeepLearning.AI — ফ্রি অডিট করা যায়, ML শেখার গোল্ড স্ট্যান্ডার্ড।"
      }
    ],
    proof: "Complete Kaggle Pandas and Intro to ML certificates, analyze 1 dataset with visualization.",
    bengaliProof: "Kaggle-এর মাইক্রো-কোর্স শেষ করা এবং ডেটাসেট ক্লিনিং ও ভিজ্যুয়ালাইজেশন সম্পন্ন করা।",
    syllabusCategoryIds: ["ai-ml"],
    keyMilestone: "Kaggle Python & ML Micro-certifications completed"
  },
  {
    monthId: 12,
    monthRange: "মাস ১১-১২",
    year: 1,
    title: "Classical ML Algorithms + DSA (Part 2 Trees & Graphs)",
    bengaliTitle: "মেশিন লার্নিং ক্লাসিক্যাল অ্যালগরিদম + DSA পর্ব ২ (Trees & Graphs)",
    targetCategory: "AI/ML + DSA",
    learningFocus: [
      "ML Fundamentals: Supervised vs Unsupervised, Regression, Logistic Regression, Decision Tree, Random Forest, KNN",
      "Model evaluation: train/test split, accuracy, precision, recall, F1, ROC-AUC, scikit-learn",
      "DSA Part 2: Trees (BST, traversals: inorder, preorder, postorder, BFS), Graphs (BFS, DFS basics)"
    ],
    bengaliLearningFocus: [
      "Machine Learning বেসিক: scikit-learn লাইব্রেরি দিয়ে হাতে-কলমে প্র্যাকটিস",
      "DSA: trees, graphs, dynamic programming বেসিক",
      "Kaggle-এ একটা বেসিক কম্পিটিশন/ডেটাসেটে প্রথম মডেল বানানো ও সাবমিট করা"
    ],
    sources: [
      {
        name: "Abdul Bari / NeetCode - DSA Trees & Graphs",
        url: "https://www.youtube.com/c/AbdulBari",
        type: "YouTube",
        isFree: true,
        notes: "DSA পর্ব ২ (trees, graphs, recursion trees)।"
      },
      {
        name: "Kaggle Competitions (Titanic / House Prices)",
        url: "https://www.kaggle.com/c/titanic",
        type: "Practice",
        isFree: true,
        notes: "বিগিনারদের প্রথম মেশিন লার্নিং মডেল টেস্ট।"
      }
    ],
    proof: "Submit first predictive model to Kaggle competition. Reach 100+ total LeetCode problems.",
    bengaliProof: "Kaggle-এ একটা বেসিক কম্পিটিশন/ডেটাসেটে প্রথম মডেল বানানো ও সাবমিট করা। LeetCode ১০০+ সম্পন্ন।",
    syllabusCategoryIds: ["ai-ml", "dsa"],
    keyMilestone: "Year 1 Checkpoint: 4-5 projects, 100+ LeetCode, deployed AI app, CGPA 3.5+ target"
  },

  // Year 2 (Months 13-24)
  {
    monthId: 13,
    monthRange: "মাস ১৩-১৫",
    year: 2,
    title: "Advanced Web & TypeScript Architecture",
    bengaliTitle: "অ্যাডভান্সড ওয়েব ও TypeScript আর্কিটেকচার",
    targetCategory: "Web & Architecture",
    learningFocus: [
      "TypeScript: Basic types, interfaces, generics, type narrowing, utility types",
      "React with TypeScript: typing props, hooks, events, generics in components",
      "Advanced React patterns: Compound components, Custom hooks, Render props",
      "State management: Zustand / Redux Toolkit"
    ],
    bengaliLearningFocus: [
      "TypeScript, React-এর অ্যাডভান্সড প্যাটার্ন, caching, API design best practices",
      "টাইপসেফ ফুলস্ট্যাক কোডবেস ম্যানেজমেন্ট",
      "স্টেট ম্যানেজমেন্ট লাইব্রেরি ও কম্পোনেন্ট রিফ্যাক্টরিং"
    ],
    sources: [
      {
        name: "TypeScript Official Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
        type: "Docs",
        isFree: true,
        notes: "টাইপস্ক্রিপ্টের অফিশিয়াল হ্যান্ডবুক।"
      },
      {
        name: "Jack Herrington - Modern React & TypeScript",
        url: "https://www.youtube.com/c/JackHerrington",
        type: "YouTube",
        isFree: true,
        notes: "প্রফেশনাল লেভেলের টাইপস্ক্রিপ্ট ও রিয়্যাক্ট প্যাটার্ন।"
      }
    ],
    proof: "Migrate an existing JavaScript project to full strict TypeScript.",
    bengaliProof: "আগের যেকোনো একটি জাভাস্ক্রিপ্ট প্রজেক্টকে স্ট্রিক্ট টাইপস্ক্রিপ্টে রিফ্যাক্টর করা।",
    syllabusCategoryIds: ["frontend"],
    keyMilestone: "Full Type-Safety in Frontend and Backend codebases"
  },
  {
    monthId: 14,
    monthRange: "মাস ১৩-১৫",
    year: 2,
    title: "System Design Basics (Scalability & Caching)",
    bengaliTitle: "সিস্টেম ডিজাইন বেসিক (স্কেলেবিলিটি, লোড ব্যালেন্সার ও ক্যাশিং)",
    targetCategory: "System Design",
    learningFocus: [
      "Client-server model, DNS resolution, HTTP vs WebSockets",
      "Vertical vs Horizontal scaling, Stateless vs Stateful servers",
      "Load balancer: Round robin, least connections, sticky sessions",
      "Caching: Client cache, CDN, Server-side cache (Redis), Cache eviction strategies (LRU)"
    ],
    bengaliLearningFocus: [
      "basic system design (load balancer, database scaling, caching কী ও কেন)",
      "রেডিস (Redis) দিয়ে মেমরি ক্যাশিং ও সেশন ম্যানেজমেন্ট",
      "ডাটাবেস স্কেলিং: রেপ্লিকেশন ও শার্ডিং কনসেপ্ট"
    ],
    sources: [
      {
        name: "Gaurav Sen - System Design Playlist",
        url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
        type: "YouTube",
        isFree: true,
        notes: "বিগিনার-ফ্রেন্ডলি চমৎকার ভিজ্যুয়াল ব্যাখ্যা।"
      },
      {
        name: "NeetCode - System Design for Beginners",
        url: "https://www.youtube.com/playlist?list=PLot-Xpze53lf5C3HSn26645-P8RF_kSVO",
        type: "YouTube",
        isFree: true,
        notes: "সিস্টেম ডিজাইনের কোর কম্পোনেন্ট ও ট্রেডঅফ।"
      }
    ],
    proof: "Architect and document a high-level system design diagram for a URL shortener or Chat app.",
    bengaliProof: "URL shortener অথবা চ্যাট অ্যাপ্লিকেশনের হাই-লেভেল আর্কিটেকচার ডিজাইন ডায়াগ্রাম তৈরি করা।",
    syllabusCategoryIds: ["system-design"],
    keyMilestone: "First comprehensive system design document completed"
  },
  {
    monthId: 15,
    monthRange: "মাস ১৩-১৫",
    year: 2,
    title: "Refactoring & Production Architecture",
    bengaliTitle: "প্রজেক্ট রিফ্যাক্টরিং ও প্রোডাকশন আর্কিটেকচার",
    targetCategory: "Web & Architecture",
    learningFocus: [
      "Refactoring legacy code into modular micro-services or clean monolith",
      "Database indexing, query optimization, handling slow queries",
      "Implementing Redis caching layer in real application",
      "CI/CD pipeline with GitHub Actions (linting, tests, build)"
    ],
    bengaliLearningFocus: [
      "একটা মিডিয়াম-স্কেল প্রজেক্ট রিফ্যাক্টর করা ভালো architecture দিয়ে",
      "অটোমেটেড বিল্ড এবং টেস্ট ওয়ার্কফ্লো গিটহাব অ্যাকশনস দিয়ে কনফিগার করা",
      "কোড কোয়ালিটি ও পারফরম্যান্স মেট্রিকস যাচাই"
    ],
    sources: [
      {
        name: "ByteByteGo - System Design Concepts",
        url: "https://www.youtube.com/@ByteByteGo",
        type: "YouTube",
        isFree: true,
        notes: "সিস্টেম আর্কিটেকচার ও স্কেলিং ড্রয়িং।"
      },
      {
        name: "GitHub Actions Documentation",
        url: "https://docs.github.com/en/actions",
        type: "Docs",
        isFree: true,
        notes: "অফিশিয়াল সিআই/সিডি গাইড।"
      }
    ],
    proof: "Refactor a medium-scale project with clean layered architecture and Redis caching.",
    bengaliProof: "একটা মিডিয়াম-স্কেল প্রজেক্ট রিফ্যাক্টর করা ভালো architecture দিয়ে।",
    syllabusCategoryIds: ["system-design", "devops"],
    keyMilestone: "Medium-scale project refactored with clean architecture"
  },
  {
    monthId: 16,
    monthRange: "মাস ১৬-১৮",
    year: 2,
    title: "Deep Learning Foundations (Neural Networks & PyTorch)",
    bengaliTitle: "ডিপ লার্নিং ফাউন্ডেশন (নিউরাল নেটওয়ার্ক ও PyTorch বেসিক)",
    targetCategory: "Deep Learning",
    learningFocus: [
      "Neural Networks: Perceptron, hidden layers, activations (ReLU, Sigmoid, Softmax)",
      "Forward propagation, Backpropagation intuition, Loss functions, Optimizers (Adam, SGD)",
      "PyTorch: Tensors, autograd, nn.Module, custom training loop",
      "CNNs (Convolutional Neural Networks) for image tasks, RNN/LSTM sequence basics"
    ],
    bengaliLearningFocus: [
      "neural networks, PyTorch বেসিক, NLP বেসিক (embeddings, transformers concept)",
      "PyTorch দিয়ে টেনসর অপারেশন এবং বেসিক নিউরাল নেট ট্রেইনিং লুপ লেখা",
      "fast.ai এর প্র্যাকটিক্যাল ফার্স্ট অ্যাপ্রোচ ফলো করা"
    ],
    sources: [
      {
        name: "fast.ai - Practical Deep Learning for Coders",
        url: "https://course.fast.ai/",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি, প্র্যাকটিক্যাল-ফার্স্ট অ্যাপ্রোচ — ইন্ডাস্ট্রি লিডিং কোর্স।"
      },
      {
        name: "DeepLearning.AI - Deep Learning Specialization",
        url: "https://www.coursera.org/specializations/deep-learning",
        type: "Course",
        isFree: true,
        notes: "Coursera ফ্রি অডিট — অ্যান্ড্রু এনজি স্যারের নিউরাল নেটওয়ার্ক কোর্স।"
      },
      {
        name: "PyTorch Official Tutorials",
        url: "https://pytorch.org/tutorials/",
        type: "Docs",
        isFree: true,
        notes: "হাতে-কলমে ডিপ লার্নিং মডেল তৈরির অফিশিয়াল গাইড।"
      }
    ],
    proof: "Train and evaluate an image classifier or neural net in PyTorch from scratch.",
    bengaliProof: "PyTorch দিয়ে একটি ক্লাসিফিকেশন নিউরাল নেটওয়ার্ক মডেল ট্রেইন করা।",
    syllabusCategoryIds: ["ai-ml"],
    keyMilestone: "Trained first PyTorch neural network model"
  },
  {
    monthId: 17,
    monthRange: "মাস ১৬-১৮",
    year: 2,
    title: "Modern NLP, Transformers & LLM Architectures",
    bengaliTitle: "মডার্ন NLP, ট্রান্সফরমার ও এলএলএম আর্কিটেকচার",
    targetCategory: "NLP & LLM",
    learningFocus: [
      "Tokenization (BPE, WordPiece), Vector embeddings (Word2Vec to dense embeddings)",
      "Transformer architecture: Self-attention mechanism, Multi-head attention, Encoder-Decoder",
      "Hugging Face Transformers library: using pretrained models, pipelines, fine-tuning concepts",
      "Vector databases: Pinecone, ChromaDB, FAISS principles"
    ],
    bengaliLearningFocus: [
      "ট্রান্সফরমার আর্কিটেকচার ও অ্যাটেনশন মেকানিজম (এখনকার সব বড় AI মডেলের ভিত্তি)",
      "হাগিং ফেস (Hugging Face) লাইব্রেরি দিয়ে প্রি-ট্রেইন্ড মডেল ব্যবহার করা",
      "ভেক্টর ডাটাবেস ও এমবেডিংস দিয়ে সিমিলারিটি সার্চ"
    ],
    sources: [
      {
        name: "Hugging Face NLP Course",
        url: "https://huggingface.co/learn/nlp-course",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি ওপেন-সোর্স কোর্স অন ট্রান্সফরমারস ও এনএলপি।"
      },
      {
        name: "Jay Alammar - The Illustrated Transformer",
        url: "https://jalammar.github.io/illustrated-transformer/",
        type: "Docs",
        isFree: true,
        notes: "অ্যাটেনশন মেকানিজমের সবচেয়ে বিখ্যাত ভিজ্যুয়াল ব্যাখ্যা।"
      }
    ],
    proof: "Build an embedding search pipeline over a collection of documents using Chroma/FAISS.",
    bengaliProof: "ভেক্টর ডাটাবেস ব্যবহার করে ডকুমেন্ট সিমিলারিটি সার্চ ইঞ্জিন তৈরি করা।",
    syllabusCategoryIds: ["ai-ml"],
    keyMilestone: "Embedding retrieval pipeline operational"
  },
  {
    monthId: 18,
    monthRange: "মাস ১৬-১৮",
    year: 2,
    title: "Production RAG System (Retrieval-Augmented Generation)",
    bengaliTitle: "প্রোডাকশন RAG সিস্টেম (ডকুমেন্ট Q&A বট ও এআই প্রোডাক্ট)",
    targetCategory: "NLP & LLM",
    learningFocus: [
      "RAG Architecture: Document chunking, embedding generation, vector indexing, hybrid search, context reranking",
      "Building a production Q&A assistant over private custom documents / PDFs",
      "Prompt orchestration (LangChain / LlamaIndex or vanilla API pipeline)",
      "Evaluation of hallucination & retrieval accuracy"
    ],
    bengaliLearningFocus: [
      "কীভাবে LLM API-এর উপর ভিত্তি করে প্রোডাক্ট বানানো যায় (RAG — Retrieval Augmented Generation)",
      "একটা RAG-based প্রজেক্ট (নিজের ডকুমেন্ট/ডেটা দিয়ে একটা Q&A বট) — এটা এখন ইন্ডাস্ট্রিতে সবচেয়ে বেশি চাহিদাসম্পন্ন স্কিল",
      "ক্লাউডে এআই অ্যাপ ডিপ্লয় করা"
    ],
    sources: [
      {
        name: "DeepLearning.AI - Building Systems with ChatGPT API / RAG",
        url: "https://www.deeplearning.ai/short-courses/",
        type: "Course",
        isFree: true,
        notes: "অ্যান্ড্রু এনজির ফ্রি শর্ট কোর্স অন আরএজি অ্যান্ড প্রম্পটিং।"
      },
      {
        name: "fast.ai Community & Blog",
        url: "https://www.fast.ai/",
        type: "Docs",
        isFree: true,
        notes: "বাস্তব অ্যাপ্লিকেশন তৈরির সেরা গাইডলাইন।"
      }
    ],
    proof: "A deployed RAG project: Custom Q&A bot answering questions from user documents/PDFs.",
    bengaliProof: "একটা RAG-based প্রজেক্ট (নিজের ডকুমেন্ট/ডেটা দিয়ে একটা Q&A বট) — এটা এখন ইন্ডাস্ট্রিতে সবচেয়ে বেশি চাহিদাসম্পন্ন স্কিল।",
    syllabusCategoryIds: ["ai-ml", "fullstack"],
    keyMilestone: "Full RAG Q&A Product deployed live"
  },
  {
    monthId: 19,
    monthRange: "মাস ১৯-২১",
    year: 2,
    title: "Interview-Level DSA (NeetCode 150 & Patterns)",
    bengaliTitle: "ইন্টারভিউ-লেভেল DSA (NeetCode 150 ও কোর প্যাটার্নস)",
    targetCategory: "DSA Interview",
    learningFocus: [
      "Mastering LeetCode Medium/Hard patterns: Sliding Window, Two Pointers, Fast & Slow Pointers",
      "Backtracking: Subsets, Permutations, Combination Sum, Word Search, N-Queens",
      "Binary Trees & BST: Lowest Common Ancestor, Level Order Traversal, Serialize/Deserialize",
      "Heap / Priority Queue: Top K Frequent Elements, Merge K Sorted Lists, Find Median from Data Stream"
    ],
    bengaliLearningFocus: [
      "LeetCode Medium/Hard, কমন ইন্টারভিউ প্যাটার্ন (sliding window, two pointers, backtracking)",
      "NeetCode 150 শিটের প্রতিটি ক্যাটাগরির প্যাটার্ন নির্ভুলভাবে আয়ত্ত করা",
      "টাইম ও স্পেস কমপ্লেক্সিটি ইন্টারভিউয়ারকে বুঝিয়ে বলার প্র্যাকটিস"
    ],
    sources: [
      {
        name: "NeetCode 150 (neetcode.io)",
        url: "https://neetcode.io/practice",
        type: "Platform",
        isFree: true,
        notes: "সবচেয়ে জনপ্রিয় ও efficient প্রবলেম লিস্ট, প্যাটার্ন অনুযায়ী সাজানো।"
      },
      {
        name: "takeUforward / Striver - SDE Sheet",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        type: "YouTube",
        isFree: true,
        notes: "DSA শিট, ভিডিও সলিউশনসহ সম্পূর্ণ ফ্রি ইন্টারভিউ প্রিপারেশন।"
      }
    ],
    proof: "Solve 75+ curated Medium problems from NeetCode 150 with documented pattern notes.",
    bengaliProof: "NeetCode 150 থেকে ৭৫+ মিডিয়াম প্রবলেম সলভ করা এবং প্যাটার্ন নোটস তৈরি করা।",
    syllabusCategoryIds: ["dsa"],
    keyMilestone: "175+ Total LeetCode Problems Solved"
  },
  {
    monthId: 20,
    monthRange: "মাস ১৯-২১",
    year: 2,
    title: "Advanced DSA (Dynamic Programming & Graphs)",
    bengaliTitle: "অ্যাডভান্সড DSA (ডাইনামিক প্রোগ্রামিং ও গ্রাফ অ্যালগরিদম)",
    targetCategory: "DSA Interview",
    learningFocus: [
      "Graphs: BFS, DFS, Dijkstra shortest path, Topological sort, Disjoint Set Union (Union-Find)",
      "Dynamic Programming: 1D DP (Climbing Stairs, House Robber, Coin Change)",
      "2D DP: Unique Paths, Longest Common Subsequence (LCS), Edit Distance, 0/1 Knapsack",
      "Bit manipulation tricks (checking powers of 2, bitmasking)"
    ],
    bengaliLearningFocus: [
      "DP স্টেট ট্রানজিশন ইকুয়েশন লেখা এবং মেমোইজেশন বনাম ট্যাবুলার পদ্ধতি",
      "ডাইজকস্ট্রা এবং টপোলজিক্যাল সর্টের প্র্যাকটিক্যাল কোডিং",
      "টাইম বাউন্ডেড ইন্টারভিউ প্রবলেম সলভিং"
    ],
    sources: [
      {
        name: "Striver's DP Series (takeUforward)",
        url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY",
        type: "YouTube",
        isFree: true,
        notes: "ডাইনামিক প্রোগ্রামিংয়ের সবচেয়ে পরিপূর্ণ ও স্পষ্ট লেকচার সিরিজ।"
      },
      {
        name: "NeetCode - Advanced Algorithms",
        url: "https://neetcode.io/",
        type: "Platform",
        isFree: true,
        notes: "গ্রাফ এবং ডিপি প্রবলেম সেট।"
      }
    ],
    proof: "Solve 20+ DP and Graph Medium/Hard problems. Pass mock assessment.",
    bengaliProof: "২০+ ডিপি এবং গ্রাফ মিডিয়াম/হার্ড প্রবলেম সলভ করা।",
    syllabusCategoryIds: ["dsa"],
    keyMilestone: "220+ LeetCode Milestone + DP mastery"
  },
  {
    monthId: 21,
    monthRange: "মাস ১৯-২১",
    year: 2,
    title: "Open Source Contributions & Collaborative Git",
    bengaliTitle: "ওপেন সোর্স কন্ট্রিবিউশন ও গিটহাব কোলাবোরেশন",
    targetCategory: "Open Source",
    learningFocus: [
      "Finding real open source repositories using 'good first issue' / 'help wanted' labels",
      "Reading large unfamiliar codebases, navigating architecture, running local tests",
      "Writing clean pull requests (PRs) conforming to repo contributing guidelines and code styles",
      "Responding to maintainer code reviews with grace and technical precision"
    ],
    bengaliLearningFocus: [
      "একটা ওপেন সোর্স প্রজেক্টে অন্তত ৩-৫টা contribution (GitHub-এ 'good first issue' ট্যাগ খুঁজে দেখা)",
      "গিটহাব ইস্যু ট্র্যাকিং ও টিম কোলাবোরেশন মেথডলজি",
      "গিট রিবেস ও ইন্টারঅ্যাক্টিভ মার্জিং"
    ],
    sources: [
      {
        name: "Good First Issue (goodfirstissue.dev)",
        url: "https://goodfirstissue.dev/",
        type: "Platform",
        isFree: true,
        notes: "জনপ্রিয় ওপেন সোর্স রিপোজিটরিতে বিগিনার-ফ্রেন্ডলি ইস্যু খোঁজার সেরা টুল।"
      },
      {
        name: "First Contributions Repository",
        url: "https://github.com/firstcontributions/first-contributions",
        type: "Platform",
        isFree: true,
        notes: "প্রথম পিআর পাঠানোর হ্যান্ডস-অন প্র্যাকটিস।"
      }
    ],
    proof: "At least 3-5 merged or active PR contributions to established open-source projects on GitHub.",
    bengaliProof: "একটা ওপেন সোর্স প্রজেক্টে অন্তত ৩-৫টা contribution (GitHub-এ 'good first issue' ট্যাগ খুঁজে দেখো)।",
    syllabusCategoryIds: ["devops"],
    keyMilestone: "3-5 Verified Open-Source PR contributions merged"
  },
  {
    monthId: 22,
    monthRange: "মাস ২২-২৪",
    year: 2,
    title: "Real-World Experience (Freelance / Internship Search)",
    bengaliTitle: "প্রথম রিয়েল-ওয়ার্ল্ড অভিজ্ঞতা (ফ্রিল্যান্সিং / ইন্টার্নশিপ সার্চ)",
    targetCategory: "Career Experience",
    learningFocus: [
      "Freelance marketplace setup: Upwork / Fiverr profile optimization, proposal writing",
      "Local or remote tech startup internship applications",
      "German remote Werkstudent position search (LinkedIn, StepStone.de, Xing)",
      "Contracts, scope of work negotiation, delivering production-grade milestones"
    ],
    bengaliLearningFocus: [
      "freelance marketplace-এ (Upwork/Fiverr) ছোট gig, অথবা লোকাল/রিমোট কোম্পানিতে ইন্টার্নশিপ খোঁজা",
      "জার্মানির কোনো Werkstudent পজিশনে আবেদন (remote-friendly হলে)",
      "রিয়েল ক্লায়েন্ট রিকোয়ারমেন্ট অ্যানালাইসিস ও ডেলিভারি"
    ],
    sources: [
      {
        name: "Upwork & Fiverr Platforms",
        url: "https://www.upwork.com/",
        type: "Platform",
        isFree: true,
        notes: "ক্লায়েন্ট প্রজেক্ট ও রিয়েল-ওয়ার্ল্ড কাজের মার্কেটপ্লেস।"
      },
      {
        name: "LinkedIn & StepStone.de",
        url: "https://www.stepstone.de/",
        type: "Platform",
        isFree: true,
        notes: "জার্মান ইন্টার্নশিপ ও স্টুডেন্ট জব (Werkstudent) পোর্টাল।"
      }
    ],
    proof: "Land at least 1 paid gig, internship offer, or verified client project delivery.",
    bengaliProof: "কমপক্ষে একটা রিয়েল পেইড কাজ/ইন্টার্নশিপ অর্জন অথবা ক্লায়েন্ট প্রজেক্ট ডেলিভারি।",
    syllabusCategoryIds: ["career"],
    keyMilestone: "First paid commercial development milestone"
  },
  {
    monthId: 23,
    monthRange: "মাস ২২-২৪",
    year: 2,
    title: "German Language Prep (A1 Level Start)",
    bengaliTitle: "জার্মান ভাষা শিক্ষা (A1 লেভেল শুরু ও দৈনন্দিন কথোপকথন)",
    targetCategory: "German Prep",
    learningFocus: [
      "German Alphabet, Pronunciation, Articles (der, die, das)",
      "Present tense conjugation of regular and irregular verbs (sein, haben, etc.)",
      "Basic sentence structure (Verb in position 2), questions, negations (nicht / kein)",
      "Daily vocabulary: Introductions, numbers, time, hobbies, shopping, university life"
    ],
    bengaliLearningFocus: [
      "প্যারালালি: A1-A2 জার্মান শেখা শুরু করো (Goethe Institute বা 'Deutsch für Euch' নামের জনপ্রিয় ফ্রি YouTube চ্যানেল দিয়ে)",
      "প্রতিদিন ৩০ মিনিট অডিও শোনা ও ভোকেবুলারি রিভিশন",
      "জার্মান ভিসার জন্য ও দৈনন্দিন জীবনের জন্য প্রাথমিক দক্ষতা তৈরি"
    ],
    sources: [
      {
        name: "Deutsch für Euch (YouTube)",
        url: "https://www.youtube.com/c/DeutschFuerEuch",
        type: "YouTube",
        isFree: true,
        notes: "ইংরেজি মাধ্যমে জার্মান ব্যাকরণ ও উচ্চারণের সেরা ফ্রি চ্যানেল।"
      },
      {
        name: "Nicos Weg - DW (Deutsche Welle)",
        url: "https://learngerman.dw.com/en/nicos-weg/c-36519789",
        type: "Course",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি ইন্টারঅ্যাক্টিভ ভিডিও স্টোরি বেসড জার্মান কোর্স (A1-B1)।"
      },
      {
        name: "Goethe-Institut Free Practice",
        url: "https://www.goethe.de/",
        type: "Platform",
        isFree: true,
        notes: "অফিশিয়াল জার্মান পরীক্ষার স্যাম্পল পেপার ও গাইড।"
      }
    ],
    proof: "Complete Nicos Weg A1 course with 80%+ quiz score, pass basic A1 mock test.",
    bengaliProof: "A1 লেভেলের বেসিক গ্রামার ও স্পিকিং টেস্ট প্র্যাকটিস সম্পন্ন করা।",
    syllabusCategoryIds: ["career"],
    keyMilestone: "German A1 Foundation mastered"
  },
  {
    monthId: 24,
    monthRange: "মাস ২২-২৪",
    year: 2,
    title: "German Language (A2 Progress) & Year 2 Checkpoint",
    bengaliTitle: "জার্মান ভাষা (A2 প্রস্তুতি) ও ২য় বর্ষের সামগ্রিক মূল্যায়ন",
    targetCategory: "German Prep",
    learningFocus: [
      "Past tenses: Perfekt with haben/sein, Präteritum of modal verbs",
      "Dative & Accusative prepositions, adjective endings",
      "Expressing opinions, professional email writing in German",
      "Year 2 Checkpoint review: LeetCode count, portfolio projects, open source, CGPA"
    ],
    bengaliLearningFocus: [
      "Year 2 শেষে চেকপয়েন্ট: ৮-১০টা প্রজেক্ট (এর মধ্যে ২-৩টা AI/ML-ভিত্তিক), LeetCode-এ ২৫০+ প্রবলেম",
      "কমপক্ষে একটা রিয়েল পেইড কাজ/ইন্টার্নশিপ, ওপেন সোর্স contribution, A2 জার্মান",
      "ভার্সিটির সিজিপিএ ৩.৫+ ধরে রাখা নিশ্চিত করা"
    ],
    sources: [
      {
        name: "Nicos Weg A2 - Deutsche Welle",
        url: "https://learngerman.dw.com/en/overview",
        type: "Course",
        isFree: true,
        notes: "A2 লেভেলের অফিসিয়াল জার্মানি লার্নিং।"
      },
      {
        name: "Anki German 4000 Words Deck",
        url: "https://apps.ankiweb.net/",
        type: "Platform",
        isFree: true,
        notes: "স্পেসড রিপিটেশন দিয়ে শব্দভান্ডার বৃদ্ধি।"
      }
    ],
    proof: "Year 2 Checkpoint: 8-10 projects (2-3 AI/ML), LeetCode 250+ solved, 1 paid gig/internship, open source contributions, A2 German.",
    bengaliProof: "Year 2 শেষে চেকপয়েন্ট: ৮-১০টা প্রজেক্ট (এর মধ্যে ২-৩টা AI/ML-ভিত্তিক), LeetCode-এ ২৫০+ প্রবলেম, কমপক্ষে একটা রিয়েল পেইড কাজ/ইন্টার্নশিপ, ওপেন সোর্স contribution, A2 জার্মান।",
    syllabusCategoryIds: ["career", "dsa"],
    keyMilestone: "Year 2 Milestone Achieved: 250+ LeetCode, 8-10 Projects, A2 German"
  },

  // Year 3 (Months 25-36)
  {
    monthId: 25,
    monthRange: "মাস ২৫-২৮",
    year: 3,
    title: "System Design & Distributed Systems",
    bengaliTitle: "সিস্টেম ডিজাইন ও ডিস্ট্রিবিউটেড সিস্টেম আর্কিটেকচার",
    targetCategory: "System Design",
    learningFocus: [
      "Distributed System fundamentals: CAP Theorem, PACELC theorem, consistency models",
      "Database replication (Master-Slave, Multi-Master) and database sharding",
      "Message brokers: Kafka / RabbitMQ (producer-consumer patterns, event streaming)",
      "API rate limiting algorithms: Token bucket, Leaky bucket, sliding window counter"
    ],
    bengaliLearningFocus: [
      "সিস্টেম ডিজাইন + ক্লাউড: হাই-স্কেল আর্কিটেকচার বোঝা",
      "ক্যাপ থিওরেম ও ডাটাবেস পার্টিশনিং কৌশল",
      "মেসেজ ব্রোকার (Kafka/RabbitMQ) কনসেপ্ট ও বাস্তব ব্যবহার"
    ],
    sources: [
      {
        name: "Gaurav Sen - Distributed Systems",
        url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
        type: "YouTube",
        isFree: true,
        notes: "ডিস্ট্রিবিউটেড সিস্টেম কনসেপ্ট।"
      },
      {
        name: "Designing Data-Intensive Applications (DDIA)",
        url: "https://dataintensive.net/",
        type: "Docs",
        isFree: false,
        notes: "মার্টিন ক্লেপম্যানের বিখ্যাত সিস্টেম বুক সামারি।"
      }
    ],
    proof: "Complete end-to-end architectural design for high-concurrency real-time system.",
    bengaliProof: "হাই-কনকারেন্সি রিয়েল-টাইম সিস্টেমের আর্কিটেকচারাল ডিজাইন তৈরি করা।",
    syllabusCategoryIds: ["system-design"],
    keyMilestone: "Mastery of distributed architecture & trade-offs"
  },
  {
    monthId: 26,
    monthRange: "মাস ২৫-২৮",
    year: 3,
    title: "Cloud Infrastructure (AWS / GCP Hands-On)",
    bengaliTitle: "ক্লাউড ইনফ্রাস্ট্রাকচার (AWS/GCP ফ্রি টিয়ার ও ডিপ্লয়মেন্ট)",
    targetCategory: "Cloud & DevOps",
    learningFocus: [
      "Cloud fundamentals: AWS EC2 / S3 / IAM basics, GCP Cloud Run & Cloud Storage",
      "Dockerizing multi-container applications (Docker compose: frontend, API, database, redis)",
      "CI/CD automation with GitHub Actions (automated test suites, docker build, cloud deployment)",
      "Production monitoring, logs, SSL certificates, custom domain routing"
    ],
    bengaliLearningFocus: [
      "AWS/GCP-এর ফ্রি টিয়ার দিয়ে হাতে-কলমে deployment",
      "CI/CD বেসিক (GitHub Actions) দিয়ে টেস্ট ও ডিপ্লয় অটোমেশন",
      "এনভায়রনমেন্ট ভেরিয়েবল ও সিক্রেট কি ম্যানেজমেন্ট"
    ],
    sources: [
      {
        name: "freeCodeCamp - AWS Certified Cloud Practitioner",
        url: "https://www.youtube.com/watch?v=SOTamWNgDKc",
        type: "YouTube",
        isFree: true,
        notes: "ক্লাউডের প্রতিটি কোর সার্ভিসের স্পষ্ট ধারণা।"
      },
      {
        name: "Docker for Beginners (freeCodeCamp)",
        url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        type: "YouTube",
        isFree: true,
        notes: "ডকার ও কনটেইনারাইজেশনের হাতে-কলমে প্র্যাকটিস।"
      }
    ],
    proof: "Deploy a containerized full-stack application on AWS/GCP with automated GitHub Actions CI/CD pipeline.",
    bengaliProof: "AWS/GCP-এর ফ্রি টিয়ার দিয়ে হাতে-কলমে deployment, CI/CD বেসিক (GitHub Actions)।",
    syllabusCategoryIds: ["devops"],
    keyMilestone: "Full Cloud Automated CI/CD Deployment verified"
  },
  {
    monthId: 27,
    monthRange: "মাস ২৫-২৮",
    year: 3,
    title: "German Language B1 Acceleration",
    bengaliTitle: "জার্মান ভাষা B1 অগ্রগতি (ব্লু কার্ড ও পিআর প্রস্তুতি)",
    targetCategory: "German Prep",
    learningFocus: [
      "German B1 Grammar: Subordinate clauses (weil, dass, obwohl, wenn, als), Passive voice",
      "Reflexive verbs, Konjunktiv II (wishes, hypothetical situations, politeness)",
      "Reading German tech articles and official university program requirements",
      "Speaking fluency: 10-minute presentation in German on a tech topic"
    ],
    bengaliLearningFocus: [
      "জার্মান ভাষা: B1 টার্গেট রাখো — Blue Card permanent residency ২১ মাসে পেতে এটা সাহায্য করে (B1 ছাড়া ৩৩ মাস লাগে)",
      "জার্মানিতে জব ও মাস্টার্সের ক্লাসে সহজে মানিয়ে নেওয়ার প্রস্তুতি",
      "Goethe-Zertifikat B1 পরীক্ষার মডেল টেস্ট প্র্যাকটিস"
    ],
    sources: [
      {
        name: "DW Learn German - B1 Course",
        url: "https://learngerman.dw.com/en/learn-german/s-9528",
        type: "Course",
        isFree: true,
        notes: "ডয়চে ভেলের B1 ইন্টারঅ্যাক্টিভ লেসন।"
      },
      {
        name: "Easy German (YouTube Podcast)",
        url: "https://www.youtube.com/c/EasyGerman",
        type: "YouTube",
        isFree: true,
        notes: "বাস্তব জার্মান স্ট্রিট ইন্টারভিউ ও সাবটাইটেল সহ লিসেনিং।"
      }
    ],
    proof: "Pass B1 mock exam with 70%+ score; hold a 5-minute spoken monologue in German.",
    bengaliProof: "B1 মক টেস্ট সম্পন্ন করা ও জার্মানে স্পোকেন প্র্যাকটিস।",
    syllabusCategoryIds: ["career"],
    keyMilestone: "German B1 Level proficiency reached"
  },
  {
    monthId: 28,
    monthRange: "মাস ২৫-২৮",
    year: 3,
    title: "Portfolio Website & Technical Resume Polish",
    bengaliTitle: "পোর্টফোলিও ওয়েবসাইট ও টেকনিক্যাল রেজুমে পলিশ",
    targetCategory: "Career Prep",
    learningFocus: [
      "Building a custom ultra-fast portfolio site showcasing your top 4-5 headline projects with live links & GitHub code",
      "Crafting an ATS-compliant software engineering resume (Google/Microsoft standard, action verbs, quantified impact)",
      "LinkedIn profile optimization for international recruiters (Google, Amazon, German tech hubs Berlin/Munich)",
      "Writing clear technical blog posts explaining challenging bugs or system design implementations"
    ],
    bengaliLearningFocus: [
      "রেজুমে পলিশ, পোর্টফোলিও ওয়েবসাইট তৈরি ও আন্তর্জাতিক স্ট্যান্ডার্ডে প্রজেক্ট উপস্থাপন",
      "গুগল/মাইক্রোসফট বা জার্মান টেক কোম্পানি উপযোগী রেজুমে",
      "প্রজেক্টের আর্কিটেকচার ও লাইভ লিংক যুক্ত করা"
    ],
    sources: [
      {
        name: "Jake's Resume Template (Overleaf / LaTeX)",
        url: "https://www.overleaf.com/latex/templates/jakes-code-cv/nzcdsqbtpdzt",
        type: "Platform",
        isFree: true,
        notes: "বিশ্বজুড়ে শীর্ষ টেক কোম্পানিগুলোর সবচেয়ে পছন্দের রেজুমে ফরম্যাট।"
      },
      {
        name: "Tech Interview Handbook - Resume Guide",
        url: "https://www.techinterviewhandbook.org/resume/",
        type: "Docs",
        isFree: true,
        notes: "সফটওয়্যার ইঞ্জিনিয়ারদের জন্য বিস্তারিত রেজুমে গাইড।"
      }
    ],
    proof: "Live personal developer portfolio website deployed + ATS 90+ verified LaTeX resume.",
    bengaliProof: "লাইভ পোর্টফোলিও ওয়েবসাইট ডিপ্লয় ও প্রফেশনাল রেজুমে সম্পন্ন করা।",
    syllabusCategoryIds: ["career"],
    keyMilestone: "Elite ATS Resume & Live Portfolio online"
  },
  {
    monthId: 29,
    monthRange: "মাস ২৯-৩২",
    year: 3,
    title: "Mock Technical Interviews (DSA & Behavioral)",
    bengaliTitle: "মক টেকনিক্যাল ইন্টারভিউ (DSA, কোডিং ও আচরণগত প্রশ্ন)",
    targetCategory: "Interview Prep",
    learningFocus: [
      "Peer-to-peer coding interviews on real problems under strict 45-minute timed conditions",
      "Think-aloud protocol: communicating trade-offs, edge cases, and time/space complexity before coding",
      "Behavioral interviews: STAR method (Situation, Task, Action, Result) for leadership & conflict resolution",
      "Pramp platform live sessions with international peers"
    ],
    bengaliLearningFocus: [
      "Mock interview (Pramp-এর মতো ফ্রি প্ল্যাটফর্ম) দিয়ে বাস্তব ইন্টারভিউয়ের ভয় দূর করা",
      "টাইমড কোডিং এবং কোড করার আগে চিন্তা স্পষ্ট করে বুঝিয়ে বলা",
      "বিহেভিওরাল প্রশ্নগুলোর জন্য STAR মেথডে উত্তর সাজানো"
    ],
    sources: [
      {
        name: "Pramp (pramp.com)",
        url: "https://www.pramp.com/",
        type: "Platform",
        isFree: true,
        notes: "সম্পূর্ণ ফ্রি পিয়ার-টু-পিয়ার লাইভ ইন্টারভিউ প্ল্যাটফর্ম (কোডিং, সিস্টেম ডিজাইন ও বিহেভিওরাল)।"
      },
      {
        name: "Tech Interview Handbook - Coding & Behavioral",
        url: "https://www.techinterviewhandbook.org/",
        type: "Docs",
        isFree: true,
        notes: "ইন্টারভিউ স্ট্র্যাটেজি ও এফিসিয়েন্ট প্রিপারেশন গাইড।"
      }
    ],
    proof: "Complete at least 5-10 live peer mock interviews on Pramp with peer feedback ratings > 4/5.",
    bengaliProof: "Pramp-এ অন্তত ৫-১০টি লাইভ মক ইন্টারভিউ সেশন সম্পন্ন করা।",
    syllabusCategoryIds: ["career", "dsa"],
    keyMilestone: "10+ Live Mock Interviews successfully cleared"
  },
  {
    monthId: 30,
    monthRange: "মাস ২৯-৩২",
    year: 3,
    title: "Mock System Design Interviews & LeetCode Hard",
    bengaliTitle: "মক সিস্টেম ডিজাইন ইন্টারভিউ ও LeetCode Hard সমস্যা",
    targetCategory: "Interview Prep",
    learningFocus: [
      "45-minute whiteboard system design interview structure: Requirements -> Scale estimation -> High level architecture -> Deep dive -> Bottlenecks & metrics",
      "Designing complex platforms: URL shortener, Twitter timeline, Netflix video streaming, Uber location tracking",
      "Tackling tricky LeetCode Hard problems in dynamic programming and graph theory",
      "Concurrency & threading interview scenarios"
    ],
    bengaliLearningFocus: [
      "সিস্টেম ডিজাইন ইন্টারভিউতে হোয়াইটবোর্ডিং ও আর্কিটেকচার স্কেচিং প্র্যাকটিস",
      "রিকোয়ারমেন্টস অ্যানালাইসিস এবং স্কেল ক্যালকুলেশন",
      "কনকারেন্সি ও ডেটাবেস কনসিসটেন্সি ট্রেডঅফ ব্যাখ্যা"
    ],
    sources: [
      {
        name: "Pramp System Design Mocks",
        url: "https://www.pramp.com/",
        type: "Platform",
        isFree: true,
        notes: "সিস্টেম ডিজাইন মক ইন্টারভিউ লাইভ সেশন।"
      },
      {
        name: "Exponent - System Design Mock Interviews",
        url: "https://www.youtube.com/c/ExponentTV",
        type: "YouTube",
        isFree: true,
        notes: "গুগল, মেটা ও আমাজনের সাবেক ইঞ্জিনিয়ারদের বাস্তব ইন্টারভিউ ডেমো।"
      }
    ],
    proof: "Clear 3 system design mock interviews with detailed feedback rubric.",
    bengaliProof: "৩টি সিস্টেম ডিজাইন মক ইন্টারভিউ সফলভাবে সম্পন্ন করা।",
    syllabusCategoryIds: ["system-design", "career"],
    keyMilestone: "Senior-level System Design Communication fluency"
  },
  {
    monthId: 31,
    monthRange: "মাস ২৯-৩২",
    year: 3,
    title: "German Masters Application Prep (IELTS / TOEFL & SOP)",
    bengaliTitle: "জার্মান মাস্টার্স অ্যাপ্লিকেশন প্রস্তুতি (IELTS/GRE ও SOP ড্রাফটিং)",
    targetCategory: "German Masters",
    learningFocus: [
      "IELTS / TOEFL preparation (Target: IELTS 7.0+ / TOEFL 95+ for top German English-taught programs)",
      "Checking university-specific requirements (TUM, RWTH Aachen, LMU, TU Berlin, Stuttgart, Saarland)",
      "Verifying required course credits: Theoretical Computer Science, Math, Software Engineering",
      "Drafting compelling Statement of Purpose (SOP) linking your 8-10 projects to faculty research"
    ],
    bengaliLearningFocus: [
      "জার্মান মাস্টার্স অ্যাপ্লিকেশন: IELTS/TOEFL, Statement of Purpose (SOP), Letter of Recommendation (LOR)",
      "ভার্সিটির ক্রেডিট ম্যাচিং: থিওরেটিক্যাল সিএস, ডিসক্রিট ম্যাথ ও অ্যালগরিদম ক্রেডিট চেক করা",
      "কিছু ইউনিভার্সিটিতে GRE লাগে (TUM ইত্যাদি) — আগে থেকে নিশ্চিত হওয়া"
    ],
    sources: [
      {
        name: "DAAD International Programs Portal",
        url: "https://www.daad.de/en/study-and-research-in-germany/courses-of-study-in-germany/all-study-programmes-in-germany/",
        type: "Platform",
        isFree: true,
        notes: "জার্মানির সব মাস্টার্স প্রোগ্রামের ডেটাবেস, রিকোয়ারমেন্টস ও ডেডলাইন।"
      },
      {
        name: "uni-assist Official Portal",
        url: "https://www.uni-assist.de/en/",
        type: "Platform",
        isFree: true,
        notes: "ডকুমেন্ট ভেরিফিকেশন ও অ্যাপ্লিকেশন প্রসেসিং সার্ভিস।"
      },
      {
        name: "IELTS Liz / Road to IELTS",
        url: "https://ieltsliz.com/",
        type: "Docs",
        isFree: true,
        notes: "আইইএলটিএস প্রিপারেশনের সেরা ফ্রি টিপস ও ট্রিকস।"
      }
    ],
    proof: "Complete IELTS/TOEFL test with target score; finalize first master draft of SOP.",
    bengaliProof: "IELTS/TOEFL পরীক্ষা সম্পন্ন ও SOP এর পূর্ণ ড্রাফট প্রস্তুত করা।",
    syllabusCategoryIds: ["academic-german"],
    keyMilestone: "IELTS 7.0+ / TOEFL score achieved & SOP Drafted"
  },
  {
    monthId: 32,
    monthRange: "মাস ২৯-৩২",
    year: 3,
    title: "Letters of Recommendation & Document Attestation",
    bengaliTitle: "প্রফেসরদের কাছ থেকে LOR সংগ্রহ ও uni-assist ডকুমেন্টস প্রস্তুত",
    targetCategory: "German Masters",
    learningFocus: [
      "Securing 2-3 strong Academic Letters of Recommendation (LOR) from university professors",
      "Getting official university transcripts and degree certificates notarized / apostilled",
      "Course descriptions module catalog translation for German credit conversion (VPD)",
      "Setting up uni-assist account and uploading verified certificates"
    ],
    bengaliLearningFocus: [
      "বিশ্ববিদ্যালয়ের প্রফেসরদের কাছ থেকে স্ট্রং রিকমেন্ডেশন লেটার সংগ্রহ",
      "ভার্সিটির ট্রান্সক্রিপ্ট এবং কোর্স মডিউল ক্যাটালগ প্রস্তুত করা",
      "uni-assist-এর মাধ্যমে ডকুমেন্ট অ্যাটেস্টেশন প্রক্রিয়া শুরু করা"
    ],
    sources: [
      {
        name: "uni-assist Step-by-Step",
        url: "https://www.uni-assist.de/en/how-to-apply/",
        type: "Docs",
        isFree: true,
        notes: "অফিশিয়াল নির্দেশিকা ও ডকুমেন্ট চেকলিস্ট।"
      },
      {
        name: "German Embassy Student Visa Checklist",
        url: "https://bangladesch.diplo.de/",
        type: "Docs",
        isFree: true,
        notes: "জার্মান স্টুডেন্ট ভিসা প্রয়োজনীয় ডকুমেন্টের তালিকা।"
      }
    ],
    proof: "Receive 2 signed LORs from professors, university transcripts certified, VPD submitted.",
    bengaliProof: "২-৩টি LOR সংগ্রহ ও uni-assist-এ ডকুমেন্ট জমা দেওয়া।",
    syllabusCategoryIds: ["academic-german"],
    keyMilestone: "All German Masters verification documents submitted"
  },
  {
    monthId: 33,
    monthRange: "মাস ৩৩-৩৬",
    year: 3,
    title: "Global Tech Job Applications & German Masters Submissions",
    bengaliTitle: "গ্লোবাল টেক জব অ্যাপ্লিকেশন ও জার্মান মাস্টার্স সাবমিশন",
    targetCategory: "Applications",
    learningFocus: [
      "Submitting official university applications for German Masters (Winter/Summer semester)",
      "Targeted job applications to Microsoft, Google, Amazon, and German tech startups / scaleups",
      "Leveraging employee referrals via LinkedIn connections and alumni networks",
      "Tailoring cover letters and technical showcase for each specific job opening"
    ],
    bengaliLearningFocus: [
      "লক্ষ্য: হয় সরাসরি জব মার্কেটে প্রবেশ, অথবা জার্মান মাস্টার্সের জন্য শক্তিশালী অ্যাপ্লিকেশন তৈরি — দুটোই সমান্তরালে সম্ভব।",
      "Microsoft / Google / ইউরোপীয় টেক কোম্পানিতে সরাসরি অ্যাপ্লিকেশন ও রেফারেল সংগ্রহ",
      "uni-assist-এর মাধ্যমে টার্গেট ভার্সিটিগুলোতে আবেদন সম্পন্ন করা"
    ],
    sources: [
      {
        name: "Google Careers & Microsoft Jobs",
        url: "https://careers.google.com/",
        type: "Platform",
        isFree: true,
        notes: "গুগল ও মাইক্রোসফটের অফিশিয়াল ক্যারিয়ার পোর্টাল।"
      },
      {
        name: "LinkedIn Job Search & Alumni Network",
        url: "https://www.linkedin.com/jobs/",
        type: "Platform",
        isFree: true,
        notes: "ইন্টারন্যাশনাল জব ও রেফারেল রিকোয়েস্ট।"
      }
    ],
    proof: "Submit 20+ targeted job applications with referrals + submit 5-8 German university applications.",
    bengaliProof: "২০+ টেক জব অ্যাপ্লিকেশন এবং ৫-৮টি জার্মান মাস্টার্স প্রোগ্রামে ফাইনাল সাবমিশন।",
    syllabusCategoryIds: ["career", "academic-german"],
    keyMilestone: "25+ Professional & University Applications Submitted"
  },
  {
    monthId: 34,
    monthRange: "মাস ৩৩-৩৬",
    year: 3,
    title: "Interview Rounds & Technical Take-Home Challenges",
    bengaliTitle: "লাইভ ইন্টারভিউ রাউন্ড ও টেকনিক্যাল টেক-হোম চ্যালেঞ্জ",
    targetCategory: "Applications",
    learningFocus: [
      "First-round recruiter screenings: company research, pitching your 3-year journey",
      "Online assessments (OA): Hackerrank, Codility, Karat challenges with zero bugs",
      "Technical phone screens with senior engineers: live coding, edge cases, test cases",
      "Building clean, well-tested take-home projects in 48-72 hours if assigned"
    ],
    bengaliLearningFocus: [
      "অনলাইন অ্যাসেসমেন্ট (OA) ক্র্যাক করার স্ট্র্যাটেজি",
      "লাইভ কোডিং রাউন্ডে দ্রুত ও নির্ভুল কোড লেখার আত্মবিশ্বাস",
      "টেক-হোম অ্যাসাইনমেন্টে বেস্ট প্র্যাকটিস ও ইউনিট টেস্টিং নিশ্চিত করা"
    ],
    sources: [
      {
        name: "Karat & Codility Practice",
        url: "https://www.codility.com/programmers/",
        type: "Platform",
        isFree: true,
        notes: "কোম্পানিগুলোর টেকনিক্যাল স্ক্রিনিং ইন্টারফেস।"
      },
      {
        name: "LeetCode Contest Weekly",
        url: "https://leetcode.com/contest/",
        type: "Practice",
        isFree: true,
        notes: "লাইভ টাইম প্রেসারে ৪টি প্রবলেম সলভ করার উইকলি কনটেস্ট।"
      }
    ],
    proof: "Clear technical screening rounds and progress to final virtual onsite interviews.",
    bengaliProof: "টেকনিক্যাল স্ক্রিনিং রাউন্ডগুলো সফলভাবে অতিক্রম করা।",
    syllabusCategoryIds: ["career"],
    keyMilestone: "Final Onsite Interview Rounds scheduled"
  },
  {
    monthId: 35,
    monthRange: "মাস ৩৩-৩৬",
    year: 3,
    title: "Final Onsite Interviews, Offers & German Visa Prep",
    bengaliTitle: "অনসাইট ইন্টারভিউ, অফার নেগোসিয়েশন ও ভিসা প্রস্তুতি",
    targetCategory: "Final Stage",
    learningFocus: [
      "Virtual Onsite / Loop Interviews (4-5 back-to-back rounds: Coding, System Design, Cultural Fit)",
      "Receiving German university admissions / offer letters from tech companies",
      "Salary negotiation and compensation breakdown (Base, RSUs/Stocks, Signing bonus)",
      "German Blocked Account (Sperrkonto: Fintiba / Expatrio) and Health Insurance setup"
    ],
    bengaliLearningFocus: [
      "ভার্চুয়াল অনসাইট ইন্টারভিউ লুপ হ্যান্ডলিং",
      "জার্মান ভার্সিটির অফার লেটার সংগ্রহ এবং ব্লকড অ্যাকাউন্ট (Fintiba/Expatrio) সেটআপ",
      "জব অফার লেটার ও কম্পেনসেশন প্যাকেজ নেগোসিয়েশন"
    ],
    sources: [
      {
        name: "Levels.fyi - Salary & Leveling Negotiation",
        url: "https://www.levels.fyi/",
        type: "Platform",
        isFree: true,
        notes: "রিয়েল ইঞ্জিনিয়ারিং স্যালারি ও নেগোসিয়েশন ডাটা।"
      },
      {
        name: "Expatrio / Fintiba German Blocked Account",
        url: "https://www.expatrio.com/",
        type: "Platform",
        isFree: true,
        notes: "জার্মান স্টুডেন্ট ভিসা ব্লকড অ্যাকাউন্ট ও স্বাস্থ্যবীমা।"
      }
    ],
    proof: "Receive official offer letter or German university admission letter!",
    bengaliProof: "অফিশিয়াল জব অফার লেটার অথবা জার্মান বিশ্ববিদ্যালয়ের অ্যাডমিশন লেটার অর্জন!",
    syllabusCategoryIds: ["career", "academic-german"],
    keyMilestone: "Tech Job Offer or German Masters Admission Secured"
  },
  {
    monthId: 36,
    monthRange: "মাস ৩৩-৩৬",
    year: 3,
    title: "Launch: Microsoft/Google Level SWE / Germany Master's Departure",
    bengaliTitle: "চূড়ান্ত লক্ষ্য অর্জন: মাইক্রোসফট/গুগল লেভেল ইঞ্জিনিয়ার বা জার্মানিতে যাত্রা",
    targetCategory: "Achievement",
    learningFocus: [
      "Transitioning into full-time software engineering role or preparing for life in Germany",
      "Blue Card permanent residency roadmap: reaching 21 months fast-track with B1 German",
      "Continuous lifelong learning: staying ahead in AI, distributed systems, and leadership",
      "Giving back: mentoring juniors in the Bengali software engineering community"
    ],
    bengaliLearningFocus: [
      "লক্ষ্য অর্জিত: Microsoft/Google-লেভেল ইঞ্জিনিয়ার অথবা জার্মানিতে মাস্টার্স/জব!",
      "Blue Card permanent residency ২১ মাসে পাওয়ার জার্নি শুরু",
      "৩ বছরের পুরো পরিশ্রমের প্রতিফলন ও পরবর্তী ক্যারিয়ার গ্রোথ প্ল্যান"
    ],
    sources: [
      {
        name: "Make it in Germany (Official Federal Government Portal)",
        url: "https://www.make-it-in-germany.com/en/",
        type: "Platform",
        isFree: true,
        notes: "জার্মান সরকার পরিচালিত অফিশিয়াল অভিবাসন ও ব্লু কার্ড পোর্টাল।"
      }
    ],
    proof: "Three-year roadmap successfully completed. Destination achieved!",
    bengaliProof: "৩ বছরের মাস্টার রোডম্যাপ সফলভাবে সম্পন্ন। গন্তব্যে পৌঁছানোর গর্বিত মুহূর্ত!",
    syllabusCategoryIds: ["career"],
    keyMilestone: "Mission Germany & Google/Microsoft Level SWE Complete!"
  }
];

// Sub-topic Syllabus Breakdown from Pages 5-11
export const SYLLABUS_CATEGORIES: SyllabusCategory[] = [
  {
    id: "python-foundation",
    title: "1. Programming Foundation (Python)",
    bengaliTitle: "১. প্রোগ্রামিং ফাউন্ডেশন (Python)",
    iconName: "Code2",
    topics: [
      {
        name: "বেসিক সিনট্যাক্স (Basic Syntax)",
        subitems: [
          "Variables, data types (int, float, string, boolean)",
          "Operators (arithmetic, comparison, logical, assignment)",
          "Conditional statements (if / elif / else)",
          "Loops (for, while), nested loops, break/continue"
        ]
      },
      {
        name: "বিল্ট-ইন ডাটা স্ট্রাকচার (Built-in Data Structures)",
        subitems: [
          "List (indexing, slicing, methods)",
          "Tuple (immutability কেন গুরুত্বপূর্ণ)",
          "Set (union, intersection, difference)",
          "Dictionary (key-value, methods, iteration)"
        ]
      },
      {
        name: "ফাংশন (Functions)",
        subitems: [
          "Function definition, parameters, return values",
          "Default arguments, keyword arguments",
          "*args, **kwargs",
          "Recursion (বেসিক থেকে শুরু করে factorial, fibonacci দিয়ে practice)",
          "Lambda functions, map/filter/reduce"
        ]
      },
      {
        name: "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)",
        subitems: [
          "Class ও object",
          "Constructor (__init__)",
          "Inheritance (single, multiple)",
          "Polymorphism",
          "Encapsulation (private/protected attributes)",
          "Abstraction",
          "Magic/dunder methods (__str__, __repr__, __len__)"
        ]
      },
      {
        name: "অন্যান্য গুরুত্বপূর্ণ (Other Essentials)",
        subitems: [
          "Exception handling (try/except/finally, custom exceptions)",
          "File I/O (read/write text ও CSV/JSON ফাইল)",
          "Modules ও packages, import সিস্টেম",
          "pip ও virtual environment (venv)",
          "Basic debugging (print debugging থেকে debugger ব্যবহার পর্যন্ত)"
        ]
      }
    ]
  },
  {
    id: "dsa",
    title: "2. Data Structures & Algorithms (DSA)",
    bengaliTitle: "২. ডাটা স্ট্রাকচার ও অ্যালগরিদম (DSA)",
    iconName: "Binary",
    topics: [
      {
        name: "Complexity Analysis",
        subitems: [
          "Time complexity, space complexity",
          "Big-O notation (O(1), O(log n), O(n), O(n log n), O(n²), O(2^n))"
        ]
      },
      {
        name: "Arrays ও Strings",
        subitems: [
          "Two-pointer technique",
          "Sliding window technique",
          "Prefix sum",
          "String manipulation (reverse, palindrome check, anagram)"
        ]
      },
      {
        name: "Linked List",
        subitems: [
          "Singly linked list (insert, delete, traverse)",
          "Doubly linked list",
          "Circular linked list",
          "Reversal, cycle detection (Floyd's algorithm)"
        ]
      },
      {
        name: "Stack ও Queue",
        subitems: [
          "Stack implementation ও ব্যবহার (parenthesis matching, expression evaluation)",
          "Queue, circular queue, deque",
          "Monotonic stack/queue (অ্যাডভান্সড প্যাটার্ন)"
        ]
      },
      {
        name: "Hashing",
        subitems: [
          "HashMap/HashSet concept",
          "Collision handling",
          "Frequency counting প্যাটার্ন"
        ]
      },
      {
        name: "Recursion ও Backtracking",
        subitems: [
          "Recursion tree বোঝা",
          "Backtracking (N-Queens, subsets, permutations, combinations)"
        ]
      },
      {
        name: "Trees",
        subitems: [
          "Binary Tree, Binary Search Tree (BST)",
          "Tree traversal: inorder, preorder, postorder, level-order (BFS)",
          "Height, balance factor",
          "AVL Tree / Red-Black Tree (concept-level)",
          "Trie (prefix tree) — autocomplete-এর মতো ফিচারের জন্য"
        ]
      },
      {
        name: "Heap / Priority Queue",
        subitems: [
          "Min-heap, max-heap",
          "Heapify, heap sort",
          "Priority queue ব্যবহার (k-th largest element, top-k প্রবলেম)"
        ]
      },
      {
        name: "Graph",
        subitems: [
          "Adjacency list vs adjacency matrix",
          "BFS, DFS",
          "Shortest path: Dijkstra, Bellman-Ford",
          "Minimum Spanning Tree: Kruskal, Prim",
          "Topological sort",
          "Union-Find (Disjoint Set Union)"
        ]
      },
      {
        name: "Dynamic Programming (DP)",
        subitems: [
          "1D DP (fibonacci, climbing stairs)",
          "2D DP (grid path, edit distance)",
          "Knapsack (0/1 এবং unbounded)",
          "Longest Common Subsequence (LCS), Longest Increasing Subsequence (LIS)",
          "DP on trees (basic)"
        ]
      },
      {
        name: "Greedy Algorithms, Sorting & Searching",
        subitems: [
          "Activity selection, interval scheduling (কখন greedy কাজ করে, কখন করে না)",
          "Bubble, selection, insertion sort (concept)",
          "Merge sort, quick sort (deeply বোঝা দরকার — interview-এ প্রায়ই জিজ্ঞেস করে)",
          "Heap sort",
          "Binary search ও তার variants (search in rotated array, find boundary)"
        ]
      },
      {
        name: "Bit Manipulation",
        subitems: [
          "AND, OR, XOR, shift operators",
          "Common bit tricks (check power of 2, count set bits)"
        ]
      }
    ]
  },
  {
    id: "frontend",
    title: "3. Web Development — Frontend",
    bengaliTitle: "৩. ওয়েব ডেভেলপমেন্ট — ফ্রন্টএন্ড",
    iconName: "Layout",
    topics: [
      {
        name: "HTML/CSS",
        subitems: [
          "Semantic HTML5 (header, nav, main, footer, section, article)",
          "CSS box model",
          "Flexbox ও CSS Grid",
          "Responsive design, media queries",
          "CSS variables"
        ]
      },
      {
        name: "JavaScript (Core)",
        subitems: [
          "Variables (var/let/const), scope",
          "Data types, type coercion",
          "Functions, arrow functions, closures",
          "Array/Object methods (map, filter, reduce, forEach, spread/rest)",
          "Promises, async/await",
          "Event loop, callback queue (concept)",
          "DOM manipulation, event handling, Fetch API / AJAX"
        ]
      },
      {
        name: "React",
        subitems: [
          "JSX, components (functional)",
          "Props ও state",
          "Hooks: useState, useEffect, useContext, useRef, useMemo, useCallback",
          "Conditional rendering, list rendering (keys)",
          "Forms ও controlled components, React Router (routing)",
          "State management: Context API (আগে), পরে Redux/Zustand",
          "Component lifecycle বোঝা (mount, update, unmount — hooks দিয়ে)"
        ]
      },
      {
        name: "TypeScript (পরবর্তী ধাপ)",
        subitems: [
          "Basic types, interfaces",
          "Generics (বেসিক)",
          "React-এর সাথে TypeScript ব্যবহার"
        ]
      }
    ]
  },
  {
    id: "backend",
    title: "4. Web Development — Backend",
    bengaliTitle: "৪. ওয়েব ডেভেলপমেন্ট — ব্যাকএন্ড",
    iconName: "Server",
    topics: [
      {
        name: "HTTP ও REST",
        subitems: [
          "HTTP methods (GET, POST, PUT, PATCH, DELETE)",
          "Status codes",
          "REST API design principles",
          "Request/response cycle"
        ]
      },
      {
        name: "Server-Side Framework (Node.js/Express অথবা Python/Django/FastAPI)",
        subitems: [
          "Routing",
          "Middleware concept",
          "Request body parsing",
          "Error handling middleware"
        ]
      },
      {
        name: "Authentication ও Authorization",
        subitems: [
          "Session-based auth",
          "JWT (JSON Web Token)",
          "OAuth (concept-level, Google/GitHub login কীভাবে কাজ করে)",
          "Password hashing (bcrypt)"
        ]
      },
      {
        name: "Database & API Design",
        subitems: [
          "SQL: schema design, primary/foreign key, joins (inner, left, right), indexes, normalization",
          "NoSQL: MongoDB — document model, collections",
          "ORM/ODM: Prisma/Sequelize (Node) অথবা SQLAlchemy/Mongoose",
          "RESTful best practices, GraphQL (concept), API versioning, Rate limiting",
          "অতিরিক্ত ব্যাকএন্ড টপিক: Caching (Redis) — কেন ও কীভাবে, WebSockets (real-time ফিচারের জন্য, যেমন চ্যাট অ্যাপ), Background jobs/queues"
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "5. DevOps ও Deployment বেসিক",
    bengaliTitle: "৫. DevOps ও ডিপ্লয়মেন্ট বেসিক",
    iconName: "Terminal",
    topics: [
      {
        name: "Git, Docker & Cloud",
        subitems: [
          "Git: init, commit, branch, merge, rebase, pull request workflow",
          "GitHub: issue tracking, collaboration workflow",
          "Docker: image, container, Dockerfile বেসিক",
          "CI/CD: GitHub Actions দিয়ে একটা সিম্পল পাইপলাইন বানানো",
          "Cloud deployment: Vercel/Netlify (frontend), Render/Railway (backend), AWS EC2/S3 বেসিক পরিচিতি",
          "Environment variables ও secrets ম্যানেজমেন্ট"
        ]
      }
    ]
  },
  {
    id: "ai-ml",
    title: "6. AI / Machine Learning & NLP",
    bengaliTitle: "৬. AI / মেশিন লার্নিং ও NLP",
    iconName: "BrainCircuit",
    topics: [
      {
        name: "গণিত ভিত্তি (ইনটুইশনের উপর ফোকাস)",
        subitems: [
          "Linear Algebra: vectors, matrices, matrix multiplication, dot product",
          "Probability ও Statistics: mean, variance, standard deviation, probability distributions, Bayes' theorem",
          "Calculus বেসিক: derivative, gradient (gradient descent বোঝার জন্য যথেষ্ট)"
        ]
      },
      {
        name: "ডেটা হ্যান্ডলিং ও ML ফান্ডামেন্টাল",
        subitems: [
          "NumPy (array operations), Pandas (dataframe, data cleaning, filtering, groupby)",
          "Data visualization: Matplotlib/Seaborn বেসিক",
          "Supervised vs Unsupervised learning",
          "Linear Regression, Logistic Regression, Decision Tree, Random Forest, KNN",
          "Support Vector Machine (SVM) ও Clustering: K-Means, PCA (concept-level)",
          "Train/test split, cross-validation, evaluation metrics (accuracy, precision, recall, F1, ROC-AUC)",
          "Overfitting/underfitting, regularization (L1/L2), scikit-learn দিয়ে হাতে-কলমে প্র্যাকটিস"
        ]
      },
      {
        name: "Deep Learning & Neural Networks",
        subitems: [
          "Neural network বেসিক: perceptron, layers, activation function (ReLU, sigmoid, softmax)",
          "Forward propagation, backpropagation (concept বোঝা)",
          "Loss function, optimizer (gradient descent, Adam)",
          "CNN (Convolutional Neural Network) — ইমেজ টাস্কের জন্য",
          "RNN/LSTM — সিকোয়েন্স ডেটার জন্য (বেসিক পরিচিতি)",
          "Transformer architecture — attention mechanism (concept-level, এখনকার সব বড় AI মডেলের ভিত্তি)",
          "PyTorch: tensor operations, autograd, nn.Module, training loop লেখা"
        ]
      },
      {
        name: "NLP ও LLM Application (এখন সবচেয়ে চাহিদাসম্পন্ন অংশ)",
        subitems: [
          "Tokenization, word embeddings",
          "Pretrained মডেল ব্যবহার (Hugging Face লাইব্রেরি)",
          "Prompt engineering (effective prompt লেখার কৌশল)",
          "RAG (Retrieval-Augmented Generation): vector database (Pinecone/Chroma/FAISS), embeddings, retrieval pipeline",
          "Fine-tuning এর ধারণা (কবে দরকার, কবে দরকার নেই)",
          "AI API ইন্টিগ্রেশন (OpenAI/Claude/Gemini API ব্যবহার করে ফিচার বানানো)"
        ]
      }
    ]
  },
  {
    id: "system-design",
    title: "7. System Design (Entry-to-Intermediate লেভেল)",
    bengaliTitle: "৭. সিস্টেম ডিজাইন (Entry-to-Intermediate লেভেল)",
    iconName: "Cpu",
    topics: [
      {
        name: "কোর আর্কিটেকচার কনসেপ্ট",
        subitems: [
          "Client-server মডেল, DNS কীভাবে কাজ করে",
          "Vertical vs Horizontal scaling",
          "Load balancer কী ও কেন",
          "Caching strategies (client-side, server-side, CDN)",
          "Database scaling: replication, sharding (concept-level)",
          "CAP theorem (concept-level)",
          "Message queue (Kafka/RabbitMQ) — concept-level পরিচিতি",
          "API rate limiting, throttling",
          "একটা সিম্পল সিস্টেম ডিজাইন প্র্যাকটিস করো (যেমন: URL shortener, chat app আর্কিটেকচার)"
        ]
      }
    ]
  }
];

// Sources Cheat Sheet from Pages 4-5
export const SOURCE_CHEATSHEET = [
  { subject: "Python/C fundamentals", sources: "CS50, freeCodeCamp, Corey Schafer" },
  { subject: "DSA (Data Structures & Algorithms)", sources: "Abdul Bari, NeetCode, takeUforward / Striver" },
  { subject: "Web Dev (Frontend + Backend)", sources: "The Odin Project, freeCodeCamp, Traversy Media, Net Ninja" },
  { subject: "Machine Learning", sources: "Kaggle Learn, Andrew Ng (Coursera/DeepLearning.AI)" },
  { subject: "Deep Learning / NLP", sources: "fast.ai, DeepLearning.AI" },
  { subject: "System Design", sources: "Gaurav Sen, NeetCode, ByteByteGo" },
  { subject: "জার্মান ভাষা (German Language)", sources: "Goethe Institute, 'Deutsch für Euch' (YouTube), Nicos Weg (DW)" },
  { subject: "মক ইন্টারভিউ (Mock Interview)", sources: "Pramp" },
  { subject: "বাংলা রিসোর্স (Bangla Creators)", sources: "Stack Learner, Jhankar Mahbub, Anisul Islam" }
];

// Academic Guidelines for German Master's (Page 4)
export const ACADEMIC_GUIDELINES = {
  title: "একাডেমিক দিকটা ভুলে যেও না (জার্মান মাস্টার্সের জন্য জরুরি)",
  points: [
    {
      title: "CGPA",
      desc: "বেশিরভাগ ভালো ইউনিভার্সিটি ৭৫%+ (বা জার্মান স্কেলে ২.৫ এর ভালো) আশা করে — কিছু টপ ইউনি (যেমন TUM) আরও কড়া।"
    },
    {
      title: "নির্দিষ্ট কোর্স ক্রেডিট (Specific Course Credits)",
      desc: "Theoretical Computer Science, Mathematics, Software Engineering কোর্সে পর্যাপ্ত ক্রেডিট থাকা দরকার — তাই ভার্সিটির ডিসক্রিট ম্যাথ, অ্যালগরিদম, থিওরি অফ কম্পিউটেশনের মতো কোর্সগুলো হালকাভাবে নেওয়া যাবে না।"
    },
    {
      title: "GRE প্রয়োজনীয়তা",
      desc: "কিছু ইউনিভার্সিটিতে GRE লাগে (non-EU স্টুডেন্টদের জন্য), তাই GRE নেওয়া লাগবে কিনা তা টার্গেট ইউনিভার্সিটি অনুযায়ী আগে থেকে চেক করে রাখো।"
    },
    {
      title: "IELTS / TOEFL",
      desc: "ইংরেজি প্রোগ্রামের জন্য লাগে (সাধারণত ব্যান্ড ৭.০+ নিরাপদ)।"
    },
    {
      title: "SOP + LOR",
      desc: "এই রোডম্যাপে যেসব প্রজেক্ট/অভিজ্ঞতা তৈরি করছ, সেগুলোই তোমার SOP-এর মূল উপাদান হবে।"
    },
    {
      title: "গোল্ডেন রুল",
      desc: "ভার্সিটির রেজাল্ট আর এক্সট্রা-কারিকুলার স্কিল-বিল্ডিং — দুটোই সমান গুরুত্ব দিয়ে চালাতে হবে, একটাকে ছেড়ে অন্যটা না।"
    }
  ]
};
