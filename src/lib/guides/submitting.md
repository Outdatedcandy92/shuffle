# Submitting

This guide covers what a shippable Shuffle project looks like and what you need to have before you submit.

The short version: if a complete stranger can open your repository and build your kit without asking you a single question, you are ready to submit. If not, you have more work to do.

---

## The review standard

When we review your project, we are asking one question: is this actually shippable?

That means checking that:

- The schematic is clean and readable
- The PCB is well laid out and properly labeled
- The repository is organized and complete
- The README explains the project clearly
- The journal documents the process honestly
- The KiCanvas link works and shows the board

If any of these are missing or below the bar, your project will be sent back with feedback. You fix it and resubmit. There is no penalty for this; it is just part of the process.

---

## What your repository needs to include

### Required files

- `README.md`
- `Journal.md`
- KiCad source files: `.kicad_pcb`, `.kicad_sch`, `.kicad_pro`, `.kicad_prl`
- Production files: gerbers, BOM, designator CSV
- 3D STEP file of your board

### Repository structure

Do not dump everything into the root folder. Organize it like this:

```
project-root/
├─ attachments/
│  ├─ image1.png
│  └─ image2.png
├─ production/
│  ├─ gerber.zip
│  ├─ bom.csv
│  └─ designator.csv
├─ src/
│  ├─ kicad.kicad_pcb
│  ├─ kicad.kicad_sch
│  ├─ kicad.kicad_pro
│  └─ 3D.STEP
├─ Journal.md
└─ README.md
```

---

## README checklist

Your README is the first thing a reviewer and the person building your kit will see. It needs to be complete and clear.

- [ ] Project title
- [ ] Short description of what it is and how it works
- [ ] PCB render or image
- [ ] Schematic image
- [ ] PCB image
- [ ] BOM in table format
- [ ] Assembly notes: step by step instructions someone can actually follow
- [ ] GitHub repository link on the PCB silkscreen

The assembly notes section is the one most people underwrite. It should be clear enough that someone who has never seen your board before can assemble it correctly. If you are not sure whether your instructions are clear enough, read them as if you have no idea what the project is. If anything is ambiguous, rewrite it.

---

## Journal checklist

Your journal will be reviewed alongside your project files. It needs to show a real design process, not a summary written after the fact.

- [ ] Daily entries covering each work session
- [ ] Reasoning behind design decisions, not just what you did but why
- [ ] Problems you ran into and how you solved them
- [ ] Images showing progress at different stages
- [ ] Time spent listed at the bottom of each entry

If your journal reads like it was written in one sitting, it will not pass review. See the [Journaling guide](journaling.md) for more detail on what a good journal looks like.

---

## KiCanvas link

Every submitted project needs a live KiCanvas link so anyone can inspect your board publicly.

To get one, head to [kicanvas.org](https://kicanvas.org), drag in your `.kicad_pcb` file, and copy the link. Paste it into your README.

---

## Submitting

Once your project meets the bar above, submit it using the form on the Shuffle website. Include your repository link and your KiCanvas link.

We will review it and get back to you. If something needs fixing, we will tell you exactly what and you can resubmit.

Once approved, sit tight. When the event wraps up, your kit ships.