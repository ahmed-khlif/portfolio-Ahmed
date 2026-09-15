---
title: "From 30 Seconds to 3: Reimagining Professional Networking with NFC"
date: "2023-08-20"
description: "How I built a contactless professional profile-sharing platform for a FabLab community — replacing manual card exchanges with a single tap, and cutting reprint costs by an estimated 90%."
tags: ["React", "Node.js", "NFC", "MongoDB", "Product"]
coverImage: "/projects/fablab-tap/cover.svg"
featured: true
readingTime: 6
---

In the summer of 2023 I interned at Djagora FabLab, where members shared their professional profiles the old-fashioned way: manually exchanging contact details or printing business cards. A card exchange took around 30 seconds and a reprint took days.

I built a contactless profile-sharing platform that replaced the whole process with a single tap — under 3 seconds per interaction, with real-time updates synced across shared cards.

## The Problem

The FabLab community is tight-knit but busy. Members meet, want to stay in touch, and reach for whatever's closest. The existing options:

- Verbal exchange of contact details (slow, error-prone).
- Printing and handing out business cards (expensive to reprint when profiles change).

The core issue: profile sharing was a manual, one-time action. If your profile changed, every card you'd already handed out was outdated.

## The Solution

A contactless profile-sharing platform with three parts:

1. **A web profile** — each member has a public profile page with their professional info.
2. **NFC-enabled sharing** — a single tap shares the profile instantly with the person you're meeting.
3. **Real-time sync** — update your profile once, and every shared card reflects the change immediately.

The pilot ran with 34 FabLab members, and the results were clear:

- Profile sharing time dropped from ~30s (manual exchange) to under 3s per interaction.
- Real-time updates removed the need for reprints — an estimated 90% reduction in related material costs.
- Members could update their profile once and trust that every shared card was current.

## Architecture

The stack was React for the front end, Node.js and Express.js for the API, MongoDB for storage, and NFC for the contactless interaction, all containerised with Docker.

The key design choice: a single source of truth for each profile. Every shared card points to the same profile — so an update is one write, not dozens of reprint cycles.

## The Pilot & Feedback

I ran a 2-week pilot with the FabLab team and iterated on 3 rounds of feedback before final handover. The pilot surfaced things I wouldn't have anticipated:

- Offline behaviour matters — people try to tap in places with poor connectivity.
- The tap needs to feel instant — any perceptible delay breaks the mental model.
- Profiles need to be rich enough to be useful but light enough to load fast on a phone.

Each round of feedback tightened the experience. By handover, the flow felt natural: tap, profile opens, connection made.

## What I'd Do Differently

- Design the offline fallback earlier — a cached profile snapshot would have smoothed the connectivity edge cases.
- Add a way to see who viewed your profile — it turns a passive share into a conversation starter.
- Standardise the profile structure earlier so the 34 pilot profiles weren't each slightly different.

## Closing

The FabLab Tap project is the one that taught me the most about the gap between "works on my machine" and "works when a real person taps it in a real room".

The 90% reprint cost reduction is the headline number, but the real value was in watching people adopt a new behavior because it was noticeably easier than the old one.

---

**Role:** Full-Stack Developer — Intern @ Djagora FabLab