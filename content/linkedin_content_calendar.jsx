import { useState } from "react";

const posts = [
  {
    id: 1,
    day: "Mon",
    date: "Mar 9",
    week: 1,
    type: "Announcement",
    typeColor: "#00E5FF",
    title: "New Role at Turing",
    hook: "I just started a new role — and four days in, it's already shifting how I think about AI.",
    content: `I just started a new role — and four days in, it's already shifting how I think about AI.

I've spent six years working on the data side of AI.
Labeling it. Annotating it. Cleaning it.

Now I'm evaluating it.

At a high level, my work involves assessing AI-generated outputs — looking at things like factual accuracy, how completely a task was handled, and overall model performance. Then making a judgment call on quality.

It sounds straightforward. It isn't.

What strikes me most in these first few days is how much human judgment still matters at this stage of AI development. The models are impressive. But the gap between "technically answered" and "actually correct and useful" is wider than most people realize.

That gap is where my work lives.

I'm also expecting the role to expand into data analysis over time — and I'm genuinely excited about that. After years of building the foundation, I want to see what the data reveals about how these systems perform at scale.

Six years of annotation taught me to see data clearly.
This role is teaching me to evaluate intelligence.

More updates to come as I settle in.

#AIEvaluation #BusinessAnalysis #Turing #AITraining #MachineLearning #NewRole`,
    cta: "What's the biggest gap you've noticed between what AI says and what's actually correct?",
    format: "Text post"
  },
  {
    id: 2,
    day: "Tue",
    date: "Mar 10",
    week: 1,
    type: "Educational",
    typeColor: "#B2FF59",
    title: "What Makes an AI Response 'Good'?",
    hook: "Most people judge AI responses by how confident they sound. That's the wrong metric.",
    content: `Most people judge AI responses by how confident they sound.
That's the wrong metric.

Here are the 4 things that actually determine whether an AI response is good:

1. FACTUAL ACCURACY
Does it get the facts right?
Not "does it sound right" — does it actually check out?
Confident + wrong is more dangerous than uncertain + correct.

2. TASK COMPLETION
Did it answer the actual question?
AI models are remarkably good at answering a slightly different question than the one you asked.
Always check: did it address the core request, or just the surface?

3. REASONING QUALITY
Did it arrive at the right answer for the right reasons?
A correct answer with flawed reasoning will fail on the next variation of the same question.

4. USEFULNESS IN CONTEXT
Is the response actually usable?
Technically correct but poorly structured, too long, or missing key context makes an answer functionally useless.

I evaluate these things every day in my work with AI systems.

The more you train yourself to think this way, the harder it becomes to take AI outputs at face value — and the more valuable you become as a professional who works alongside AI.

What metric do you use to judge an AI response? Drop it below 👇

#AI #AIEvaluation #MachineLearning #DataScience #AITraining #LLM #QualityAssurance`,
    cta: "What metric do you use to judge an AI response?",
    format: "List post"
  },
  {
    id: 3,
    day: "Wed",
    date: "Mar 11",
    week: 1,
    type: "Insight",
    typeColor: "#FF6B6B",
    title: "The Hidden Cost of Bad Training Data",
    hook: "Bad data doesn't just create bad AI. It creates confidently wrong AI.",
    content: `Bad data doesn't just create bad AI.
It creates confidently wrong AI.

And that's far more dangerous.

Here's something I've learned across 6 years of data annotation work:

The quality problem in AI doesn't announce itself.
Bad models don't say "I'm not sure."
They generate fluent, structured, convincing outputs — built on a shaky foundation.

The real cost of poor training data:

❌ Models that pass benchmarks but fail in production
❌ Bias baked in at the annotation stage — invisible until it causes harm
❌ Edge cases that were never labeled, so the model has never learned to handle them
❌ Compounding errors — one bad label in a dataset of millions still shapes the model

This is why annotation isn't "just labeling."

Every label is a vote for what the model believes is true.

I've maintained a 95%+ accuracy rate across my annotation work not because of speed — but because I understood that each decision had downstream consequences I'd never see directly.

The best AI systems aren't built on the most data.
They're built on the most trustworthy data.

Has poor data quality ever affected a project you worked on? I'd genuinely like to hear it.

#DataQuality #AITraining #DataAnnotation #MachineLearning #DataScience #AI #LLM`,
    cta: "Has poor data quality ever affected a project you worked on?",
    format: "Storytelling post"
  },
  {
    id: 4,
    day: "Thu",
    date: "Mar 12",
    week: 1,
    type: "Career",
    typeColor: "#FFD54F",
    title: "From Annotator to Evaluator",
    hook: "There's a career path inside AI that nobody talks about — and I've been walking it for 6 years.",
    content: `There's a career path inside AI that nobody talks about — and I've been walking it for 6 years.

It doesn't start with a CS degree.
It doesn't require a research background.
It starts with attention to detail and a willingness to go deep.

Here's how the path looks from where I'm standing:

2019 → Data Entry Specialist
Learning how data is structured, cleaned, and moved.

2023 → Data Annotator at SuperAnnotate
Learning what makes data useful for AI training. Computer vision, NLP, quality review.

2025 → Audio Transcriptionist + Atomic Action Labeler
Specializing. Learning multimodal data. Pattern recognition at scale.

2026 → AI Evaluator / Business Analyst at Turing
Evaluating model outputs. Assessing quality, accuracy, task completion.

Each role built on the last.
Each one gave me a deeper understanding of how AI actually works — not in theory, but in production.

The lesson:
You don't have to start at the top of the AI field.
You start at the data layer — where the intelligence is actually built.

And if you do the work with genuine curiosity and precision, the path opens up.

Are you currently in the data/AI space? Where are you on the journey?

#CareerDevelopment #AITraining #DataScience #DataAnnotation #MachineLearning #AI #CareerAdvice`,
    cta: "Are you currently in the data/AI space? Where are you on the journey?",
    format: "Career story"
  },
  {
    id: 5,
    day: "Fri",
    date: "Mar 13",
    week: 1,
    type: "Resource",
    typeColor: "#CE93D8",
    title: "5 Signs an AI Response is Failing You",
    hook: "Save this. You'll need it the next time you're deciding whether to trust an AI output.",
    content: `Save this. You'll need it the next time you're deciding whether to trust an AI output.

5 signs an AI response is failing you:

🚩 1. It answers a question you didn't ask
Read the response carefully. AI models often reframe your question into something easier to answer — and answer that instead.

🚩 2. It's vague where it should be specific
"There are several factors to consider..." is a flag. Good responses name the factors.

🚩 3. It can't show its work
If you ask "why?" and the model can't walk through its reasoning clearly, the original answer is suspect.

🚩 4. It's uniformly confident
Real experts hedge. They say "typically," "in most cases," "it depends." A model that never qualifies its statements is overfit to sound authoritative.

🚩 5. It doesn't acknowledge what it doesn't know
Knowledge cutoffs, domain gaps, missing context — a trustworthy model flags these. One that doesn't is hiding its limitations.

I evaluate AI outputs against frameworks like these every day.

The better you get at spotting failure modes, the more effectively you can work with — and around — AI systems.

Which of these have you encountered most often?

#AI #LLM #AIEvaluation #PromptEngineering #DataScience #MachineLearning #AITools #CriticalThinking`,
    cta: "Which of these have you encountered most often?",
    format: "List/Save post"
  },
  {
    id: 6,
    day: "Mon",
    date: "Mar 16",
    week: 2,
    type: "Reflection",
    typeColor: "#00E5FF",
    title: "Week 1 at Turing — What I Learned",
    hook: "One week into my new role. Here's what actually surprised me.",
    content: `One week into my new role. Here's what actually surprised me.

I came in expecting the technical side to be the challenge.
Learning new systems. New workflows. New benchmarks.

That part was fine.

What I didn't expect was how much the work would require philosophical judgment.

When you're evaluating AI outputs for quality, you're not just checking facts.
You're making decisions about:

→ What "complete" actually means for a given task
→ When a technically accurate answer is still misleading
→ How to apply a consistent standard across wildly different types of content
→ Where the model's reasoning breaks down — not just where the answer is wrong

These aren't algorithmic questions. They require human judgment built on experience and domain knowledge.

That's the insight I'm sitting with after week one:

The most important thing AI evaluation needs isn't more computing power.
It's more people who can think critically about what "good" actually means.

I didn't expect a new job to deepen my appreciation for human judgment.
But here we are.

What's the hardest judgment call you've had to make in your work?

#AIEvaluation #Turing #BusinessAnalysis #AI #MachineLearning #HumanInTheLoop #DataScience`,
    cta: "What's the hardest judgment call you've had to make in your work?",
    format: "Reflection post"
  },
  {
    id: 7,
    day: "Tue",
    date: "Mar 17",
    week: 2,
    type: "Educational",
    typeColor: "#B2FF59",
    title: "What Business Analysts Need to Know About AI",
    hook: "The role of Business Analyst is being redefined by AI — and most BAs aren't ready for it.",
    content: `The role of Business Analyst is being redefined by AI — and most BAs aren't ready for it.

Not because AI is replacing them.
Because the job description is quietly changing.

Here's what modern Business Analysts increasingly need to understand about AI:

📌 AI outputs are not ground truth
When AI generates a report, a summary, or a recommendation — someone has to evaluate it. That someone is increasingly a BA. You need a framework for assessing accuracy, not just a copy-paste reflex.

📌 Prompt quality determines output quality
The way you interact with AI tools directly affects what you get back. BAs who understand how to structure prompts get dramatically better results than those who don't.

📌 Data quality is still your problem
AI doesn't fix bad data. It amplifies it. Understanding where your data comes from, how it was collected, and where it might be biased is still a core BA skill — arguably more important now.

📌 The human judgment layer is your competitive advantage
AI can generate options. It can surface patterns. But it can't decide what matters to your business, your client, or your stakeholder. That's still yours.

📌 AI evaluation is a real skill
Knowing how to assess whether an AI-generated output is actually good — factually, logically, contextually — is a skill that will separate strong BAs from average ones in the next 3 years.

Are you upskilling in AI as a BA? What's the biggest gap you're seeing?

#BusinessAnalysis #AI #DataScience #BusinessIntelligence #AITools #CareerDevelopment #Analytics`,
    cta: "Are you upskilling in AI as a BA? What's the biggest gap you're seeing?",
    format: "List post"
  },
  {
    id: 8,
    day: "Wed",
    date: "Mar 18",
    week: 2,
    type: "Interactive",
    typeColor: "#FF6B6B",
    title: "Human vs AI Judgment Poll",
    hook: "Genuine question for my network — and I want to hear your real answer.",
    content: `Genuine question for my network — and I want to hear your real answer.

I work in AI evaluation. Every day, I compare AI-generated outputs and make judgment calls about which one is better — more accurate, more complete, more useful.

And it's made me think hard about this question:

In your field, what percentage of decisions currently made by humans could be made just as well — or better — by AI?

Be honest.

Not what you're supposed to say.
Not the "AI is a tool, not a replacement" line.

What do you actually observe?

I'll share my honest take in the comments after I see some responses.

Because the answer, in my experience, is more complicated than either the AI optimists or the AI pessimists want to admit.

Drop your number and your field below 👇

#AI #FutureOfWork #BusinessAnalysis #DataScience #MachineLearning #HumanInTheLoop #AIDebate`,
    cta: "Drop your percentage and your field below 👇",
    format: "Engagement/debate post"
  },
  {
    id: 9,
    day: "Thu",
    date: "Mar 19",
    week: 2,
    type: "Educational",
    typeColor: "#FFD54F",
    title: "SQL for AI Professionals",
    hook: "SQL is 50 years old. It's also one of the most important skills you can have in the AI era.",
    content: `SQL is 50 years old. It's also one of the most important skills you can have in the AI era.

Here's why it hasn't been replaced — and why it won't be anytime soon.

AI models are trained on data.
That data lives in databases.
Databases speak SQL.

If you work in AI, data science, or analytics, understanding SQL means you can:

✅ Query training datasets directly — no waiting for a data engineer
✅ Validate data quality at the source before it becomes a model problem
✅ Audit AI outputs by cross-referencing against ground truth data
✅ Build your own analysis pipelines without depending on others

The 5 SQL concepts that matter most for AI work:

1. JOIN — combining tables to build complete datasets
2. GROUP BY + aggregations — understanding distributions in your data
3. WHERE + filtering — isolating the subset you actually need to analyze
4. Subqueries — answering layered questions about your data
5. Window functions — calculating running totals, rankings, and trends

I use SQL alongside Python in my data work constantly.

Not because it's trendy.
Because it's the most direct path between a question and an answer.

What SQL concept took you the longest to truly understand?

#SQL #DataScience #DataAnalytics #AI #Python #DataEngineering #MachineLearning #CareerDevelopment`,
    cta: "What SQL concept took you the longest to truly understand?",
    format: "Educational/technical post"
  },
  {
    id: 10,
    day: "Fri",
    date: "Mar 20",
    week: 2,
    type: "Resource",
    typeColor: "#CE93D8",
    title: "How to Break Into AI Evaluation Roles",
    hook: "AI evaluation is one of the fastest-growing roles in tech right now. Here's how to get in.",
    content: `AI evaluation is one of the fastest-growing roles in tech right now.
Here's how to get in — from someone currently doing it.

First, understand what the role actually is:
AI evaluators assess model outputs for accuracy, quality, reasoning, and task completion. It sits between data annotation and data analysis — and it requires both precision and judgment.

What companies are actually looking for:

✅ Attention to detail — not just "I'm detail-oriented" on a CV. Demonstrated through test tasks and accuracy rates.

✅ Ability to follow complex guidelines — evaluation rubrics are detailed. If you can't follow a 40-page annotation guide consistently, this isn't your role yet.

✅ Domain knowledge — the more specialized your background, the more valuable you are. Science, medicine, law, finance, engineering — if you have depth in any field, there's an AI evaluation role that needs you.

✅ Critical thinking about language — spotting subtle errors, logical inconsistencies, and gaps in reasoning is core to the work.

Platforms currently hiring for evaluation roles:
🔹 Turing
🔹 Scale AI
🔹 Surge AI
🔹 Remotasks
🔹 Invisible Technologies

The honest reality:
Entry-level evaluation pays modestly. Senior evaluation — especially with domain expertise — pays very well. The path is clear if you're willing to build your accuracy record and demonstrate consistent quality.

I started at the data entry level. Six years later, I'm evaluating AI systems.

The path is real. The work is demanding. The opportunity is growing.

Any questions about getting started? Drop them below.

#AIEvaluation #AIJobs #RemoteWork #DataScience #AITraining #CareerAdvice #MachineLearning #TechCareers`,
    cta: "Any questions about getting started? Drop them below.",
    format: "Resource/career guide"
  }
];

const typeOrder = ["Announcement", "Educational", "Insight", "Career", "Resource", "Reflection", "Interactive"];

export default function LinkedInCalendar() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeWeek, setActiveWeek] = useState(1);

  const week1 = posts.filter(p => p.week === 1);
  const week2 = posts.filter(p => p.week === 2);
  const currentPosts = activeWeek === 1 ? week1 : week2;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0E17",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#E8EDF5",
      padding: "0"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0A0E17 0%, #111827 50%, #0A0E17 100%)",
        borderBottom: "1px solid rgba(0,229,255,0.15)",
        padding: "32px 40px 24px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,229,255,0.06) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        <div style={{ position: "relative" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px"
          }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#00E5FF", boxShadow: "0 0 12px #00E5FF"
            }} />
            <span style={{ fontSize: "11px", letterSpacing: "3px", color: "#00E5FF", textTransform: "uppercase", fontWeight: 600 }}>
              Solomon Uche
            </span>
          </div>
          <h1 style={{
            fontSize: "28px", fontWeight: 700, margin: "0 0 6px",
            background: "linear-gradient(135deg, #E8EDF5 0%, #00E5FF 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            LinkedIn Content Calendar
          </h1>
          <p style={{ color: "#6B7FA3", fontSize: "14px", margin: 0 }}>
            2-Week AI & Data Science Content Strategy · March 2026
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
          {[["10", "Posts Ready"], ["2", "Weeks Covered"], ["5", "Post Formats"]].map(([num, label]) => (
            <div key={label} style={{
              background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.1)",
              borderRadius: "8px", padding: "10px 16px"
            }}>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#00E5FF" }}>{num}</div>
              <div style={{ fontSize: "11px", color: "#6B7FA3", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 180px)" }}>
        {/* Left Panel - Calendar */}
        <div style={{
          width: "380px", flexShrink: 0,
          borderRight: "1px solid rgba(255,255,255,0.06)",
          overflowY: "auto", padding: "24px 20px"
        }}>
          {/* Week Toggle */}
          <div style={{
            display: "flex", background: "rgba(255,255,255,0.04)",
            borderRadius: "10px", padding: "4px", marginBottom: "20px",
            border: "1px solid rgba(255,255,255,0.06)"
          }}>
            {[1, 2].map(w => (
              <button key={w} onClick={() => { setActiveWeek(w); setSelectedPost(null); }} style={{
                flex: 1, padding: "8px", borderRadius: "7px", border: "none",
                cursor: "pointer", fontSize: "13px", fontWeight: 600,
                transition: "all 0.2s",
                background: activeWeek === w ? "rgba(0,229,255,0.15)" : "transparent",
                color: activeWeek === w ? "#00E5FF" : "#6B7FA3",
                boxShadow: activeWeek === w ? "inset 0 0 0 1px rgba(0,229,255,0.3)" : "none"
              }}>
                Week {w} · Mar {w === 1 ? "9–13" : "16–20"}
              </button>
            ))}
          </div>

          {/* Post Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {currentPosts.map(post => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                style={{
                  background: selectedPost?.id === post.id
                    ? "rgba(0,229,255,0.08)"
                    : "rgba(255,255,255,0.03)",
                  border: selectedPost?.id === post.id
                    ? "1px solid rgba(0,229,255,0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px", padding: "14px 16px",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  if (selectedPost?.id !== post.id) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }
                }}
                onMouseLeave={e => {
                  if (selectedPost?.id !== post.id) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  }
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      background: "rgba(255,255,255,0.06)", borderRadius: "6px",
                      padding: "2px 8px", fontSize: "11px", fontWeight: 700,
                      color: "#A0B0C8", letterSpacing: "0.5px"
                    }}>
                      {post.day} {post.date}
                    </div>
                  </div>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "1px",
                    color: post.typeColor, textTransform: "uppercase",
                    background: `${post.typeColor}15`, borderRadius: "4px",
                    padding: "2px 7px", border: `1px solid ${post.typeColor}30`
                  }}>
                    {post.type}
                  </span>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#D4DCE8", marginBottom: "4px", lineHeight: "1.4" }}>
                  {post.title}
                </div>
                <div style={{ fontSize: "11px", color: "#5A6A85", lineHeight: "1.5" }}>
                  {post.format}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Post Detail */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          {!selectedPost ? (
            <div style={{
              height: "100%", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "16px"
            }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%",
                background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px"
              }}>
                📋
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#A0B0C8", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>
                  Select a post to preview
                </div>
                <div style={{ color: "#4A5A73", fontSize: "13px" }}>
                  Click any post on the left to see the full draft
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Post Header */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: "24px"
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
                      color: selectedPost.typeColor, textTransform: "uppercase"
                    }}>
                      {selectedPost.type}
                    </span>
                    <span style={{ color: "#3A4A63", fontSize: "11px" }}>·</span>
                    <span style={{ color: "#6B7FA3", fontSize: "12px" }}>
                      {selectedPost.day}, {selectedPost.date}
                    </span>
                    <span style={{ color: "#3A4A63", fontSize: "11px" }}>·</span>
                    <span style={{ color: "#6B7FA3", fontSize: "12px" }}>{selectedPost.format}</span>
                  </div>
                  <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#E8EDF5", margin: 0 }}>
                    {selectedPost.title}
                  </h2>
                </div>
                <button
                  onClick={() => copyToClipboard(selectedPost.content)}
                  style={{
                    background: copied ? "rgba(178,255,89,0.15)" : "rgba(0,229,255,0.1)",
                    border: copied ? "1px solid rgba(178,255,89,0.4)" : "1px solid rgba(0,229,255,0.3)",
                    borderRadius: "8px", padding: "10px 18px",
                    color: copied ? "#B2FF59" : "#00E5FF",
                    fontSize: "13px", fontWeight: 600, cursor: "pointer",
                    transition: "all 0.2s", whiteSpace: "nowrap"
                  }}
                >
                  {copied ? "✓ Copied!" : "Copy Post"}
                </button>
              </div>

              {/* Hook callout */}
              <div style={{
                background: `linear-gradient(135deg, ${selectedPost.typeColor}10, transparent)`,
                border: `1px solid ${selectedPost.typeColor}25`,
                borderLeft: `3px solid ${selectedPost.typeColor}`,
                borderRadius: "0 8px 8px 0",
                padding: "12px 16px", marginBottom: "20px"
              }}>
                <div style={{ fontSize: "10px", color: selectedPost.typeColor, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>
                  Opening Hook
                </div>
                <div style={{ fontSize: "14px", color: "#C8D4E8", fontStyle: "italic", lineHeight: "1.6" }}>
                  "{selectedPost.hook}"
                </div>
              </div>

              {/* Full Post */}
              <div style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px", padding: "20px 24px", marginBottom: "16px"
              }}>
                <div style={{
                  fontSize: "11px", color: "#4A5A73", fontWeight: 700,
                  letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px"
                }}>
                  Full Post Draft
                </div>
                <pre style={{
                  fontSize: "13.5px", lineHeight: "1.8", color: "#C8D4E8",
                  whiteSpace: "pre-wrap", fontFamily: "inherit", margin: 0
                }}>
                  {selectedPost.content}
                </pre>
              </div>

              {/* CTA */}
              <div style={{
                background: "rgba(255,213,79,0.06)", border: "1px solid rgba(255,213,79,0.15)",
                borderRadius: "8px", padding: "12px 16px"
              }}>
                <div style={{ fontSize: "10px", color: "#FFD54F", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>
                  Engagement CTA
                </div>
                <div style={{ fontSize: "13px", color: "#B8A848" }}>
                  {selectedPost.cta}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
