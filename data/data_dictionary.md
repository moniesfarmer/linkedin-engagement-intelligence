# 📖 Data Dictionary

## `post_metrics.csv`

| Column | Type | Values / Range | Description |
|--------|------|----------------|-------------|
| `post_id` | str | P001, P002... | Unique post identifier |
| `date_posted` | datetime | YYYY-MM-DD | Date of publication |
| `day_of_week` | str | Mon–Sun | Day published |
| `time_of_day` | str | Morning / Afternoon / Evening | Posting time bucket |
| `post_type` | str | See below | Content category |
| `content_format` | str | List / Story / Poll / Debate / Short | Structural format |
| `word_count` | int | 0–500 | Total words in post body |
| `hashtag_count` | int | 0–15 | Number of hashtags |
| `has_cta` | bool | TRUE / FALSE | Ends with engagement question |
| `impressions` | int | 0–∞ | Total views |
| `reactions` | int | 0–∞ | Total emoji reactions |
| `comments` | int | 0–∞ | Total comments |
| `shares` | int | 0–∞ | Total reshares |
| `saves` | int | 0–∞ | Total bookmarks (strongest LinkedIn signal) |
| `engagement_rate` | float | 0.0–1.0 | (reactions+comments+shares) / impressions |
| `topic_category` | str | AI / DataScience / Career / SQL / Mindset / Tools | Content topic |
| `hook_type` | str | Question / Statement / Statistic / Story | Opening line type |
| `series_post` | bool | TRUE / FALSE | Part of multi-post series |
| `notes` | str | Free text | Analyst notes |

## Post Type Reference

| Type | Description |
|------|-------------|
| Announcement | New role, milestone, life update |
| Educational | Teaching a concept or framework |
| Insight | Opinion or observation from experience |
| Career | Career path, advice, journey |
| Resource | Curated tools, lists, guides |
| Reflection | Personal lessons and growth |
| Interactive | Polls, debates, questions |
| Motivational | Mindset, inspiration (low performers — avoid) |

## Engagement Rate Benchmarks (LinkedIn 2024)

| Level | Rate |
|-------|------|
| Below average | < 0.5% |
| Average | 0.5% – 1.0% |
| Good | 1.0% – 2.0% |
| Excellent | > 2.0% |

## Notes on Data Collection
- Data is manually exported from LinkedIn Creator Analytics
- LinkedIn provides analytics for posts from the past 365 days
- Saves data available only for posts after LinkedIn introduced the feature
- Scheduled posts have 0 values — update weekly after publishing
