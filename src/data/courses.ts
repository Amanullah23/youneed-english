/*
 * TODO: this file ships with placeholder curriculum details on purpose.
 * The module/topic structure below is reasonable starter content (IELTS
 * and TOEFL really do test Listening/Reading/Writing/Speaking, for
 * example), but exact lesson counts, student counts, and duration are all
 * bracketed [X] placeholders. Replace them with real numbers once the
 * actual course content is finalized.
 */

export type Level = "Beginner" | "Intermediate" | "Speaking" | "Test Prep";

export type CourseDetail = {
  slug: string;
  title: string;
  level: Level;
  format: string;
  studentsLabel: string;
  tagline: string;
  description: string[];
  outcomes: string[];
  curriculum: { title: string; lessonCount: string; topics: string[] }[];
};

export const COURSES: CourseDetail[] = [
  {
    slug: "beginner",
    title: "Beginner English",
    level: "Beginner",
    format: "Self-paced · Video lessons",
    studentsLabel: "[X]+ students enrolled",
    tagline:
      "Start from zero — everyday vocabulary, basic grammar, and simple conversations to get you speaking with confidence.",
    description: [
      "Beginner English is built for learners starting from scratch. Every lesson focuses on the words and phrases you'll actually use in daily life — greetings, shopping, asking for directions, ordering food — before moving on to the grammar that supports them.",
      "You'll build a solid foundation step by step, with plenty of repetition and real example conversations, so you're ready to move on to Intermediate English with genuine confidence.",
    ],
    outcomes: [
      "Introduce yourself and hold a basic conversation",
      "Use present, past, and future tense correctly",
      "Understand and use everyday vocabulary (~500+ words)",
      "Ask and answer common questions confidently",
      "Read and understand simple English texts",
    ],
    curriculum: [
      {
        title: "Everyday Vocabulary",
        lessonCount: "[X] lessons",
        topics: ["Greetings & introductions", "Numbers, dates & time", "Shopping & food vocabulary"],
      },
      {
        title: "Basic Grammar Foundations",
        lessonCount: "[X] lessons",
        topics: ["Present simple & continuous", "Past simple", "Articles & basic sentence structure"],
      },
      {
        title: "Simple Conversations",
        lessonCount: "[X] lessons",
        topics: ["Asking for directions", "Ordering at a restaurant", "Small talk basics"],
      },
      {
        title: "Listening & Pronunciation Basics",
        lessonCount: "[X] lessons",
        topics: ["Common sound patterns", "Slow, clear listening practice", "Word stress basics"],
      },
    ],
  },
  {
    slug: "intermediate",
    title: "Intermediate English",
    level: "Intermediate",
    format: "Self-paced · Video lessons",
    studentsLabel: "[X]+ students enrolled",
    tagline:
      "Build fluency with real conversations, expanded vocabulary, and the grammar you'll actually use day to day.",
    description: [
      "Intermediate English picks up where the basics leave off. You'll expand your vocabulary into more natural, everyday topics and start handling grammar that trips up most learners — phrasal verbs, conditionals, and more complex sentence structures.",
      "Lessons lean heavily on real conversation practice, so you're not just learning rules — you're learning how English actually sounds and flows when people speak it.",
    ],
    outcomes: [
      "Hold natural conversations on everyday topics",
      "Use phrasal verbs and idioms correctly",
      "Understand conditionals and more complex grammar",
      "Follow native speakers at a normal pace",
      "Write clear, well-structured paragraphs",
    ],
    curriculum: [
      {
        title: "Expanding Vocabulary",
        lessonCount: "[X] lessons",
        topics: ["Common phrasal verbs", "Everyday idioms", "Topic-based vocabulary sets"],
      },
      {
        title: "Grammar in Context",
        lessonCount: "[X] lessons",
        topics: ["Conditionals", "Present perfect vs. past simple", "Reported speech"],
      },
      {
        title: "Real-World Conversations",
        lessonCount: "[X] lessons",
        topics: ["Workplace conversations", "Making plans & opinions", "Handling disagreements politely"],
      },
      {
        title: "Listening to Native Speakers",
        lessonCount: "[X] lessons",
        topics: ["Natural speed listening", "Understanding accents", "Following podcasts & videos"],
      },
    ],
  },
  {
    slug: "speaking",
    title: "Speaking & Pronunciation",
    level: "Speaking",
    format: "Live + recorded sessions",
    studentsLabel: "[X]+ students enrolled",
    tagline:
      "Practice real conversations, fix common pronunciation mistakes, and build the confidence to speak without hesitation.",
    description: [
      "This course is built for one goal: helping you speak with confidence. Through live practice sessions and recorded pronunciation drills, you'll work directly on the habits that hold most learners back — hesitation, unclear pronunciation, and translating in your head before speaking.",
      "You'll get real feedback on how you actually sound, not just theory, so progress is something you can hear for yourself.",
    ],
    outcomes: [
      "Speak with fewer pauses and more confidence",
      "Fix the most common pronunciation mistakes",
      "Think in English instead of translating",
      "Handle real-time conversations naturally",
      "Sound clearer and more understandable",
    ],
    curriculum: [
      {
        title: "Pronunciation Fundamentals",
        lessonCount: "[X] lessons",
        topics: ["Vowel & consonant sounds", "Word stress", "Sentence rhythm & intonation"],
      },
      {
        title: "Common Speaking Mistakes",
        lessonCount: "[X] lessons",
        topics: ["Sounds learners often mix up", "Fixing hesitation habits", "Self-correction techniques"],
      },
      {
        title: "Live Conversation Practice",
        lessonCount: "[X] sessions",
        topics: ["Guided speaking practice", "Real-time feedback", "Group discussion practice"],
      },
      {
        title: "Confidence & Fluency Building",
        lessonCount: "[X] lessons",
        topics: ["Speaking without over-planning", "Handling silence & mistakes", "Building speaking stamina"],
      },
    ],
  },
  {
    slug: "ielts-toefl",
    title: "IELTS & TOEFL Prep",
    level: "Test Prep",
    format: "Self-paced · Practice tests",
    studentsLabel: "[X]+ students enrolled",
    tagline:
      "Focused practice for reading, writing, listening, and speaking — built around the real exam format.",
    description: [
      "This course is built around the actual structure of the IELTS and TOEFL exams — Listening, Reading, Writing, and Speaking — with focused practice for each section rather than generic English study.",
      "You'll work through exam-style questions, timed practice, and sample answers so you know exactly what to expect on test day, along with strategies for managing time and avoiding the most common mistakes.",
    ],
    outcomes: [
      "Understand the format of each exam section",
      "Apply timing and strategy techniques for Reading & Listening",
      "Structure Writing Task 1 & Task 2 responses clearly",
      "Speak confidently in the exam's speaking format",
      "Practice with exam-style mock tests",
    ],
    curriculum: [
      {
        title: "Listening Practice",
        lessonCount: "[X] lessons",
        topics: ["Note-taking strategies", "Exam-style listening exercises", "Common question types"],
      },
      {
        title: "Reading Practice",
        lessonCount: "[X] lessons",
        topics: ["Skimming & scanning techniques", "Academic passage practice", "Time management strategies"],
      },
      {
        title: "Writing Practice",
        lessonCount: "[X] lessons",
        topics: ["Task 1 & Task 2 structure", "Sample essays & model answers", "Common scoring mistakes"],
      },
      {
        title: "Speaking Practice",
        lessonCount: "[X] sessions",
        topics: ["Mock interview sessions", "Fluency & coherence practice", "Common exam topics"],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return COURSES.find((course) => course.slug === slug);
}