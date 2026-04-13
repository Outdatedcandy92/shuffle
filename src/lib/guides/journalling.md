# Journaling

Since Shuffle has no coding component, there is no way to automatically track the time you spend on your project. So instead, you document it yourself through a journal.

Your journal is not just a time log though. It is a record of how you thought through your project, the decisions you made, the problems you ran into, and how you solved them. Journals are reviewed as part of the submission process and held to a high standard, so this is not something you can throw together at the end.

The good news is that if you journal as you go, it basically writes itself.

---

## What is a journal?

A journal is a `Journal.md` file in the root of your repository that you update throughout your project. Each entry covers a session of work: what you did, what you were thinking, what went wrong, and how you moved forward.

The goal is that someone, including future you, can read it and understand not just what you built but how and why you built it that way.

---

## What makes a good journal entry?

A good entry answers three questions:

1. What did I work on today?
2. Why did I make the decisions I made?
3. What problems did I run into, and how did I deal with them?

You do not need to write an essay. A few clear paragraphs per session is enough. What matters is that the thinking is actually there. Vague entries like "worked on schematic for 2 hours" tell us nothing and will not pass review.

A good entry looks more like:

> Today I started laying out the PCB. I placed the 555 and its surrounding RC components first, keeping them grouped close to the relevant pins. I ran into an issue where my traces kept violating DRC because I had the clearance set too tight, turns out I had it at 0.1mm instead of 0.2mm. Fixed that and re-routed the ground plane.

That entry tells us what you did, why you made a layout decision, what went wrong, and how you fixed it. That is the bar.

---

## What to include

At minimum, a good journal covers:

- **Project goal** — what are you building and why
- **Initial research** — what did you look up, what inspired the design
- **Design decisions** — why did you pick certain components, certain values, certain layout choices
- **Problems encountered** — what broke, what confused you
- **How you fixed them** — what you tried, what worked
- **Reflections** — what you would do differently, what you learned

You do not need a dedicated section for each of these. They should come out naturally as you write about your sessions.

---

## How to actually write it

Create a `Journal.md` file in the root of your repository and write in it after every work session. Do not leave it until the end.

You can write it in any markdown editor. [Obsidian](https://obsidian.md/) is a great option since it supports markdown natively and lets you embed images easily, but any editor works. If you are not familiar with markdown, it is very simple to pick up.

Here is a template to get you started:

```markdown
# Project Name

I'm building X because Y.

---

## Month Day — Session Title

What I worked on today and why.

![image description](attachments/image.png)

A problem I ran into and how I solved it.

**Time spent: X hours**

---

## Month Day — Session Title

What I worked on today and why.

![image description](attachments/image.png)

A problem I ran into and how I solved it.

**Time spent: X hours**
```

---

## A few things to keep in mind

**Write as you go.** Journals written after the fact are obvious and read like a summary, not a process. Update yours at the end of each session while it is still fresh.

**Include images.** Screenshots of your schematic progress, your PCB layout at different stages, a DRC error you had to fix, anything visual that shows the work happening. A journal with no images is a journal that is hard to believe.

**Be honest about problems.** Running into issues and solving them is not a bad look. It is literally what the journal is for. A journal where everything went perfectly with no problems is a red flag, not a green one.

**Time per session goes at the bottom of each entry.** Keep it honest.

---

## What will get your journal rejected

- Entries that are vague and do not explain any decisions or reasoning
- A journal that looks like it was written all in one sitting at the end
- No images
- Missing sessions that leave large unexplained gaps in the timeline

If your journal does not meet the bar, your project will not be approved. It is part of the submission, not an afterthought.