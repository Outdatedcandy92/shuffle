# Polishing Your Project

This is the most important guide in Shuffle.

Anyone can design a PCB. The hard part, and the part most people skip, is packaging it so a complete stranger can actually build it without getting confused or asking you questions.

That is what polishing means. It is not just aesthetics. It is making your project understandable, complete, and buildable by someone who has never seen it before. Because in Shuffle, that is exactly what is going to happen.

This guide covers three areas:

- Clean schematics
- Clean PCB design
- Shipping your project (files, repository, README)

---

## Clean Schematics

You have probably heard people say your schematics need to be clean. But what does that actually mean?

### 1. Readability

At a minimum, your schematic should be easy to read. That means no crowded symbols, no overlapping wires, and no designators sitting on top of each other.

Here is what a poor schematic looks like:

![Bad schematic example](https://cdn.hackclub.com/019d5bc1-46dc-702e-8d4b-0e00628a6d8f/kicad_R7EqwHBaLT.png)

It might be technically correct, but it is not easy to read. Reviewers will not spend extra effort figuring out what is going on, and potential problems get missed. The community expects you to put in the effort.

Here is how to fix it:

#### Space Out Components

Give each part room to breathe. Wires should have clear paths and not overlap.

![Spaced out schematic](https://cdn.hackclub.com/019d5bc1-4919-7f5c-aa75-f1bc075d0fb9/kicad_kJ4WHrJTT5.png)

Already looks much better.

#### No Overlapping

Move any designators that are covering a symbol. Nothing should overlap anything else.

![No overlapping](https://cdn.hackclub.com/019d5bc1-4b40-719b-a5a8-d29e33d8b56c/kicad_DJ48kjRNG0.png)

#### Assign Component Values

Always assign values to your components. Without them, it is impossible to know whether a resistor is 10kΩ or 1kΩ, and that leads to mistakes when someone tries to build it.

![Component values](https://cdn.hackclub.com/019d5bc1-4d81-7624-8f5b-8a62affb9943/kicad_QAZwgluT67.png)

#### Use Power Flags and Net Labels

For complex schematics, use net labels instead of drawing long wires across the sheet. Separate your power supply section from your signal section so it is obvious what is connected to what.

![Power flags](https://cdn.hackclub.com/019d5bc1-55d9-717e-a41b-028c91202ed2/kicad_AvUb0c6Xk3.png)

#### Use NC Flags

For pins that are intentionally left unconnected, place an NC (No Connect) flag. Without it, someone reviewing your schematic will assume the connection is missing.

![NC flags](https://cdn.hackclub.com/019d5bc1-5873-7c46-bfc9-3ce3a68f6f1d/kicad_iqEibBm6UA.png)

### 2. Include Notes

Add short text notes in your schematic to explain what things do. You do not need paragraphs, one sentence is usually enough. A note near your 555 explaining what the RC network controls, or a note next to an IC explaining what it does, goes a long way.

![Schematic notes](https://cdn.hackclub.com/019d5bc1-5af6-7e20-aaa9-42376e9e844c/kicad_zLaE35sAtI.png)

![IC notes](https://cdn.hackclub.com/019d5bc1-5d2e-741e-99c8-eeccc604b463/kicad_OVI3SumqDl.png)

---

## Clean PCB Design

A clean PCB matters because this is what someone is physically going to build. The key idea is simple: your layout should look intentional, not random.

### 1. Group Related Components Together

Do not scatter components across the board. If a potentiometer and a capacitor connect to your 555 in the schematic, place them near the corresponding pins on the PCB too.

A useful trick: open your schematic alongside the PCB editor. Selecting a component in the schematic will highlight it in the PCB editor, making it easier to arrange things logically.

![Grouping components](https://cdn.hackclub.com/019d5bc1-604b-7247-9811-f63024f26b4e/UikRPAz65k.gif)

### 2. Keep Components Aligned

If parts are sitting next to each other, take ten seconds to align them. Select them, right-click, and choose align. That is it.

Before:

![Unaligned](https://cdn.hackclub.com/019d5bc1-62b1-7ffb-9e53-d9f0541b9a3f/kicad_onSInSj7xj.png)

After:

![Aligned](https://cdn.hackclub.com/019d5bc1-6813-7aea-92b6-cd8799e33291/Figma_Xcheh9U5Ex.png)

### 3. Maintain Spacing

Leave enough space between components for soldering. Parts placed too close together lead to solder bridges and a bad assembly experience for whoever receives your kit.

![Component spacing](https://cdn.hackclub.com/019d5bc1-6a68-7804-b69f-9681faf26c97/Figma_FbyR6W9jwk.png)

### 4. Use a Ground Plane

Use a ground plane. Almost always. It simplifies routing, makes your board cleaner, and only takes a few seconds to add.

In KiCad: click `Draw Filled Zones`, click a board edge, select your ground layer (usually B.Cu), set the net to GND, draw a polygon covering your board, then press `B` to fill. Refill it every time you make routing changes.

![Ground plane](https://cdn.hackclub.com/019d5bc1-6dc5-7315-9ae4-23c4326d8a70/kicad_hq5a6wMjme.gif)

### 5. Fillet Your Corners

Sharp corners look bad and can actually cut you. Select the board outline, right-click, choose Shape Modification, then Fillet Corners. Takes five seconds.

![Fillet corners](https://cdn.hackclub.com/019d5bc1-7113-7bff-b6ea-c363ca0d7c36/kicad_LczZvg17Dr.gif)

---

## Clear Silkscreen Labels

Silkscreen is what gets printed on your physical board. It is how the person assembling your kit knows which part goes where. Ask yourself: can someone place every component correctly without guessing?

### No Overlapping

Silkscreen text should never overlap. It makes the board look sloppy and makes assembly harder.

![Silkscreen overlap](https://cdn.hackclub.com/019d5bc1-7442-76b4-b3ee-a0177f2abb49/Figma_W1U9YEu9z0.png)

### Include Reference Designators and Values

Reference designators like R1, C1, and U1 should always be present. If there is room, include values too, like 10k, 100nF, NE555. This makes it obvious which part goes where.

![Reference designators](https://cdn.hackclub.com/019d5bc1-7680-7e23-9fb9-4447842a1d77/Figma_k4P42dkQ4a.png)

### Keep Text Consistent

Same orientation whenever possible. Labels close to their components. No ambiguity.

![Consistent text](https://cdn.hackclub.com/019d5bc1-7917-7909-8388-62f75de76a76/Figma_w6ot3L8YcT.png)

### Label Your Connectors

This one is critical and something a lot of people skip. If your board has any connectors for power or off-board signals, every pin needs to be labeled. Clearly.

![Connector labels](https://cdn.hackclub.com/019d5bc1-7b5d-7372-9cd3-60077480d8c4/Figma_mV426iCTNc.png)

Your PCB should also have your GitHub repository link somewhere on the silkscreen.

---

## Shipping Your Project

Once your design is done, it is time to actually ship it. A shipped project is one that someone else can open, understand, and build without asking you a single question.

Here is what that looks like in practice.

### 1. All Project Files

Your repository needs to include everything someone would need to view, order, and assemble your board.

**Source files** — your four KiCad files: `.kicad_pcb`, `.kicad_prl`, `.kicad_pro`, and `.kicad_sch`. These let others inspect or modify your design.

**Production files** — gerbers, BOM, designators, and anything else needed to order the board. Use the KiCad Fabrication Plugin to generate these.

**3D STEP file** — export this from the PCB editor via File → Export → STEP. It lets others visualize the board in 3D and check component placement.

![Exporting STEP](https://cdn.hackclub.com/019d5bc1-7e7a-7ff5-88b3-0eda53027eb6/kicad_vBXIDI7rmJ.gif)

### 2. Organized Repository

Do not dump everything into the root folder. Create folders for different file types. This takes about a minute and makes your repository look much more professional.

![Organized repo](https://cdn.hackclub.com/019d5bc1-80c4-78d4-a5d9-82955739d123/Figma_kfxCmLb1RV.png)

Keep your images and attachments in a separate folder too.

![Attachments folder](https://cdn.hackclub.com/019d5bc1-834f-7f06-8f06-905c4895ce3a/Figma_QcZdQ15rSe.png)

A good structure looks like this:

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

### 3. A Clear README

Your README is the front page of your project. Someone should be able to open it and immediately understand what the project is, how it works, and how to build it.

It should include:

- [ ] Project title
- [ ] Short description of what it is and how it works
- [ ] PCB render or image
- [ ] Schematic image
- [ ] PCB image
- [ ] BOM in table format
- [ ] Assembly notes

Here is a template you can use:

```markdown
# Project Title

I made a thing which does a cool thing, it uses two cool things to light up some other cool things.

![Hero Image](attachments/render.png)

## Schematic

![Schematic](attachments/sch.png)

## PCB

![PCB](attachments/pcb.png)

## BOM

| Designator | Value |
| ---------- | ----- |
| R1         | 10K   |
| C1         | 100nF |
| U1         | NE555 |

## Assembly

[Add assembly steps here]
```

### 4. Make a Render

A render makes your repository look a lot more impressive and only takes a few minutes. Export your PCB as a STEP file, open it in Fusion 360 or OnShape, and set up a nice shot.

![Fusion 360 render](https://cdn.hackclub.com/019d5bc1-896d-75fb-8501-26572e5ebac1/Fusion360_WyR3a9TiQD.gif)

You can go fancy with lighting and materials, or keep it simple with a wireframe look.

![Wireframe render](https://cdn.hackclub.com/019d5bc1-8cb8-7cd2-a7d3-745c6356d52c/Fusion360_TqKkYHKT1E.gif)

### 5. Make a Banner (Bonus)

Take your render and drop it into Figma, Canva, or Photopea. Add your project name and GitHub handle. Make it **1280px × 640px**. Use it as the hero image in your README.

![Banner example](https://cdn.hackclub.com/019d5bc1-92d1-73f6-98be-e025ac6c28d7/Figma_itOHGSXUjh.png)

It takes five minutes and makes your project look ten times more polished.

---

## The Test

Before you submit, ask yourself one question:

**Can someone build this without asking me anything?**

If the answer is no, figure out what is missing and fix it. That is the whole point.