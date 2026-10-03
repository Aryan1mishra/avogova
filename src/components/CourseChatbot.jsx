import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  User,
  Phone,
  GraduationCap,
  Sparkles,
  MessageCircle,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

const EXECUTIVE_WHATSAPP = "91XXXXXXXXXX";
// Replace with your executive's WhatsApp number.
// Example: 919876543210
// Do NOT add + or spaces.

const courseOptions = [
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "deep learning",
      "python",
      "robotics",
      "automation",
    ],
    description:
      "Learn Python, Machine Learning, Deep Learning, AI concepts and real-world AI projects.",
    internship:
      "AI/ML Internship — work on practical machine learning and AI projects.",
  },
  {
    name: "Full Stack Development",
    slug: "full-stack",
    keywords: [
      "web development",
      "web",
      "frontend",
      "backend",
      "full stack",
      "fullstack",
      "react",
      "node",
      "javascript",
      "software development",
    ],
    description:
      "Build complete web applications using modern frontend and backend technologies.",
    internship:
      "Full Stack Development Internship — build and deploy real-world web applications.",
  },
  {
    name: "Data Science",
    slug: "data-science",
    keywords: [
      "data science",
      "data scientist",
      "analytics",
      "analysis",
      "statistics",
      "python",
      "machine learning",
      "prediction",
    ],
    description:
      "Learn data analysis, statistics, Python, machine learning and predictive modeling.",
    internship:
      "Data Science Internship — work with datasets, analytics and predictive models.",
  },
  {
    name: "Data Analytics",
    slug: "data-analytics",
    keywords: [
      "data analytics",
      "data analyst",
      "analytics",
      "power bi",
      "excel",
      "dashboard",
      "business intelligence",
      "bi",
    ],
    description:
      "Learn data analysis, visualization, dashboards and business intelligence.",
    internship:
      "Data Analytics Internship — create dashboards and generate insights from real data.",
  },
  {
    name: "Embedded Systems",
    slug: "embedded-systems",
    keywords: [
      "embedded",
      "electronics",
      "hardware",
      "iot",
      "arduino",
      "microcontroller",
      "robotics",
      "circuit",
    ],
    description:
      "Explore embedded systems, electronics, microcontrollers and IoT technologies.",
    internship:
      "Embedded Systems Internship — work on practical hardware and IoT projects.",
  },
  {
    name: "Cyber Security",
    slug: "cyber-security",
    keywords: [
      "cyber security",
      "cybersecurity",
      "security",
      "ethical hacking",
      "network security",
      "hacking",
      "soc",
    ],
    description:
      "Learn cybersecurity fundamentals, network security and practical security concepts.",
    internship:
      "Cyber Security Internship — gain practical exposure to security and monitoring concepts.",
  },
  {
    name: "HR Management",
    slug: "hr-management",
    keywords: [
      "hr",
      "human resources",
      "management",
      "recruitment",
      "hiring",
      "people management",
      "talent",
    ],
    description:
      "Build skills in recruitment, employee management and modern HR practices.",
    internship:
      "HR Internship — gain practical exposure to recruitment and people operations.",
  },
];

function getRecommendations(field, interests) {
  const searchText = `${field} ${interests}`.toLowerCase();

  const scored = courseOptions.map((course) => {
    let score = 0;

    course.keywords.forEach((keyword) => {
      if (searchText.includes(keyword)) {
        score += keyword.length >= 5 ? 3 : 2;
      }
    });

    return {
      ...course,
      score,
    };
  });

  const matched = scored
    .filter((course) => course.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matched.length === 0) {
    return [
      courseOptions.find(
        (course) => course.name === "Full Stack Development"
      ),
      courseOptions.find((course) => course.name === "Data Science"),
      courseOptions.find(
        (course) => course.name === "AI & Machine Learning"
      ),
    ];
  }

  return matched.slice(0, 3);
}

export default function CourseChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    field: "",
    interests: "",
  });

  const [recommendations, setRecommendations] = useState([]);

  const [inputError, setInputError] = useState("");

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setInputError("");
  };

  const handleStart = () => {
    setStep(1);
  };

  const handlePersonalDetails = () => {
    if (!form.name.trim()) {
      setInputError("Please enter your name.");
      return;
    }

    if (!form.phone.trim()) {
      setInputError("Please enter your phone number.");
      return;
    }

    if (!/^[0-9+\-\s()]{10,15}$/.test(form.phone.trim())) {
      setInputError("Please enter a valid phone number.");
      return;
    }

    setInputError("");
    setStep(2);
  };

  const handleInterests = () => {
    if (!form.field.trim()) {
      setInputError("Please enter your field of study.");
      return;
    }

    if (!form.interests.trim()) {
      setInputError("Please tell us your area of interest.");
      return;
    }

    const results = getRecommendations(form.field, form.interests);

    setRecommendations(results);
    setInputError("");
    setStep(3);
  };

  const openWhatsApp = () => {
    const courseNames = recommendations
      .map((course) => course.name)
      .join(", ");

    const message = `Hi Avegenx Executive,

My name is ${form.name}.
Phone: ${form.phone}
Field of Study: ${form.field}
Area of Interest: ${form.interests}

The chatbot recommended:
${courseNames}

I would like to know more about the course and internship opportunities.`;

    const whatsappUrl = `https://wa.me/${EXECUTIVE_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const resetChat = () => {
    setStep(0);
    setForm({
      name: "",
      phone: "",
      field: "",
      interests: "",
    });
    setRecommendations([]);
    setInputError("");
  };

  return (
    <>
      {/* FLOATING CHATBOT BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-violet-600 text-white shadow-2xl shadow-violet-900/30 transition-colors hover:bg-violet-700"
        aria-label="Open course advisor"
      >
        <Bot size={24} />

        {/* Notification dot */}
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />

            {/* CHAT WINDOW */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-5 right-5 z-[70] flex h-[min(680px,calc(100vh-40px))] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* HEADER */}
              <div className="shrink-0 bg-gradient-to-r from-violet-700 to-indigo-700 px-5 py-5 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15">
                      <Bot size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold">Avegenx Course Advisor</h3>
                      <p className="mt-0.5 text-xs text-violet-100">
                        Find a course that fits you
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                  >
                    <X size={19} />
                  </button>
                </div>
              </div>

              {/* CHAT CONTENT */}
              <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
                {/* STEP 0 */}
                {step === 0 && (
                  <div className="flex min-h-full flex-col justify-center">
                    <div className="mb-6 text-center">
                      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-violet-100 text-violet-600">
                        <Sparkles size={30} />
                      </div>

                      <h2 className="text-xl font-bold text-slate-900">
                        Let's find the right course for you
                      </h2>

                      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                        Tell us a little about yourself and we'll suggest
                        suitable Avegenx courses and internship opportunities.
                      </p>
                    </div>

                    <button
                      onClick={handleStart}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-700"
                    >
                      Find My Course
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <ChatMessage>
                      Hi! 👋 Let's get to know you first.
                    </ChatMessage>

                    <div className="mt-5 space-y-4">
                      <InputField
                        icon={<User size={17} />}
                        label="Your Name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) =>
                          updateForm("name", e.target.value)
                        }
                      />

                      <InputField
                        icon={<Phone size={17} />}
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          updateForm("phone", e.target.value)
                        }
                      />

                      {inputError && (
                        <ErrorMessage message={inputError} />
                      )}

                      <button
                        onClick={handlePersonalDetails}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-700"
                      >
                        Continue
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <ChatMessage>
                      Nice to meet you,{" "}
                      <strong>{form.name}</strong>! 🎓
                      <br />
                      Now tell us what you're studying and what interests you.
                    </ChatMessage>

                    <div className="mt-5 space-y-4">
                      <InputField
                        icon={<GraduationCap size={17} />}
                        label="Field of Study"
                        placeholder="e.g. B.Tech CSE, BBA, BCA"
                        value={form.field}
                        onChange={(e) =>
                          updateForm("field", e.target.value)
                        }
                      />

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                          Area of Interest
                        </label>

                        <textarea
                          rows={4}
                          value={form.interests}
                          onChange={(e) =>
                            updateForm("interests", e.target.value)
                          }
                          placeholder="e.g. AI, web development, data analysis..."
                          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                        />
                      </div>

                      {inputError && (
                        <ErrorMessage message={inputError} />
                      )}

                      <button
                        onClick={handleInterests}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-700"
                      >
                        Show My Courses
                        <Sparkles size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <ChatMessage>
                      Based on your profile, here are some courses that may
                      match your interests:
                    </ChatMessage>

                    <div className="mt-4 space-y-3">
                      {recommendations.map((course, index) => (
                        <motion.div
                          key={course.slug}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                        >
                          <div className="mb-2 flex items-start justify-between gap-3">
                            <h4 className="font-bold text-slate-900">
                              {course.name}
                            </h4>

                            {index === 0 && (
                              <span className="shrink-0 rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-700">
                                Recommended
                              </span>
                            )}
                          </div>

                          <p className="text-xs leading-5 text-slate-500">
                            {course.description}
                          </p>

                          <div className="mt-3 flex gap-2 rounded-xl bg-emerald-50 p-3">
                            <BriefcaseBusiness
                              size={16}
                              className="mt-0.5 shrink-0 text-emerald-600"
                            />

                            <div>
                              <p className="text-[11px] font-bold text-emerald-700">
                                INTERNSHIP OPPORTUNITY
                              </p>

                              <p className="mt-1 text-xs leading-5 text-emerald-800">
                                {course.internship}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* EXECUTIVE CTA */}
                    <div className="mt-5 rounded-2xl bg-violet-50 p-4">
                      <div className="flex gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-600 text-white">
                          <MessageCircle size={19} />
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900">
                            Want to know more?
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-slate-600">
                            Talk directly with an Avegenx executive about the
                            course, internship and enrollment process.
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={openWhatsApp}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-white transition hover:bg-green-600"
                      >
                        <MessageCircle size={18} />
                        Talk to an Executive
                      </button>

                      <button
                        onClick={resetChat}
                        className="mt-2 w-full py-2 text-xs font-semibold text-slate-500 hover:text-violet-600"
                      >
                        Start Again
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* FOOTER */}
              <div className="shrink-0 border-t border-slate-100 bg-white px-4 py-3 text-center">
                <p className="text-[10px] text-slate-400">
                  Avegenx • Career & Skill Development
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ChatMessage({ children }) {
  return (
    <div className="flex items-start gap-2">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-600">
        <Bot size={16} />
      </div>

      <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
        {children}
      </div>
    </div>
  );
}

function InputField({
  icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon}
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
      />
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}