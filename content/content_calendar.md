# 📅 LinkedIn Content Calendar — March 2026

## Brand Voice
**Professional but personal. Data-driven. Educative. Authentic.**  
Every post positions Solomon Uche as an AI/Data practitioner sharing real insights from real work.

---

## Week 1: March 9–13, 2026

| Date | Day | Type | Title | Format | CTA |
|------|-----|------|-------|--------|-----|
| Mar 9 | Mon | Announcement | New Role at Turing | Story | What gap have you noticed between AI and accuracy? |
| Mar 10 | Tue | Educational | What Makes an AI Response 'Good'? | List (4 points) | What metric do you use? |
| Mar 11 | Wed | Insight | The Hidden Cost of Bad Training Data | Story | Has data quality affected your projects? |
| Mar 12 | Thu | Career | From Annotator to Evaluator | Career arc story | Where are you on the journey? |
| Mar 13 | Fri | Resource | 5 Signs an AI Response is Failing You | Save list | Which have you encountered? |

---

## Week 2: March 16–20, 2026

| Date | Day | Type | Title | Format | CTA |
|------|-----|------|-------|--------|-----|
| Mar 16 | Mon | Reflection | Week 1 at Turing — What I Learned | Story | Hardest judgment call you've made? |
| Mar 17 | Tue | Educational | What Business Analysts Need to Know About AI | List (5 points) | Are you upskilling in AI? |
| Mar 18 | Wed | Interactive | Human vs AI Judgment Poll | Debate | Drop your % and field |
| Mar 19 | Thu | Educational | SQL for AI Professionals | List + value prop | Which SQL concept was hardest? |
| Mar 20 | Fri | Resource | How to Break Into AI Evaluation Roles | Career guide | Questions about getting started? |

---

## Content Strategy Notes

### Post Performance Targets
- Impressions: 200+ per post (current avg ~185)
- Engagement rate: >1.5%
- Comments per post: 2+
- Weekly saves: 5+

### Optimal Posting Time
- **Best days:** Tuesday, Wednesday, Thursday
- **Best time:** 9:00 AM WAT (Lagos)
- **Avoid:** Weekends, Motivational content without data

### Hashtag Strategy
- 6–8 hashtags per post
- Mix: 2 broad (#AI, #DataScience) + 3 niche (#AIEvaluation, #DataAnnotation) + 1–2 career (#CareerAdvice)

### CTA Best Practices
- Must reference the reader's real experience
- Specific > Vague ("What labeling challenges have you faced?" > "What do you think?")
- One clear question at the end only

---

## Automation Setup
- **Google Calendar:** 10 reminders set at 9:00 AM WAT with full post text in notes
- **Gmail Draft:** Full post library saved as HTML email draft
- **GitHub:** Data tracking in `data/raw/post_metrics.csv` — update weekly

---

## Performance Tracking (Update Weekly)

After each post publishes, update `data/raw/post_metrics.csv` with:
1. Actual impressions (from LinkedIn analytics)
2. Reactions, comments, shares, saves
3. Calculated engagement rate

Then re-run `analysis/notebooks/02_eda.ipynb` to refresh insights.
