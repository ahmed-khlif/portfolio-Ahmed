---
title: "Building an AI Chatbot That Resolves 78% of Student Queries Autonomously"
date: "2024-01-15"
description: "A practical account of building a student administrative support chatbot with Flask, React, and classical NLP techniques — and how it reached 78% autonomous resolution without a single LLM call."
tags: ["AI", "NLP", "Flask", "React", "Python"]
coverImage: "/projects/student-qa/cover.svg"
featured: true
readingTime: 7
---

Before LLMs were cheap and everywhere, I built a student administrative support chatbot using classical NLP techniques — NLTK, TF-IDF, Word2Vec, FastText — and ML models (Naive Bayes, KNN).

The target: answer student administrative queries without human intervention.

The result: 78% autonomous resolution.

This post is the story of how I got there, what worked, and what I'd do differently now.

## The Problem

Students at the institution had a steady stream of administrative queries: enrollment processes, deadline questions, document requirements, administrative contacts. Each query was small, but the aggregate volume was enough that the administrative team was spending real time on repeat questions.

A chatbot that could handle the repeatable 78% would free that time for the cases that actually needed a human.

## The Stack

The chatbot was a full-stack application:

- **Backend:** Flask — lightweight, easy to iterate on, and a good fit for an ML-backed service.
- **Frontend:** React — a simple conversational UI.
- **NLP/ML:** NLTK for preprocessing, TF-IDF and Word2Vec/FastText for representations, Naive Bayes and KNN for classification.

No LLM. This was a deliberate constraint: the project predates the current wave, and classical techniques were more than enough for a structured, repeatable query space.

## Why Classical NLP Was Enough

The query space was bounded and repetitive. Students ask the same questions in different words. That's exactly the kind of problem TF-IDF + Word2Vec + a classifier handles well:

- **TF-IDF** captures the important terms in a query.
- **Word2Vec / FastText** give semantic similarity so rephrasings map to the same intent.
- **Naive Bayes / KNN** classify the intent and route to the right answer.

For a bounded query set, this pipeline is fast, interpretable, and cheap to run — none of which a large model guarantees.

## The 78% Figure

78% autonomous resolution means: of all queries that came in, 78% were answered correctly without human intervention. The remaining 22% were the long tail — ambiguous queries, novel questions, or cases where the answer depended on context the bot didn't have.

That long tail is healthy: it's the cases where a human should be involved, and the bot's job is to route them there cleanly rather than guess.

## What Made It Work

- **A well-defined query taxonomy.** The bot could only be as good as the intents it knew about. Investing time in mapping the real query space — the actual questions students asked — was the highest-leverage activity.
- **Representations that capture rephrasing.** TF-IDF alone misses synonyms; Word2Vec/FastText fill that gap. The combination is what let rephrasings of the same question land in the same bucket.
- **A clear fallback.** When the bot wasn't confident, it escalated to a human rather than guessing. The 78% is honest precisely because the bot knew when not to answer.

## What I'd Do Differently Today

If I were building it now:

- I'd add an LLM-based retrieval layer on top for the long-tail queries — classical techniques for the structured 78%, an LLM for the ambiguous remainder.
- I'd instrument intent confidence and fallback rate properly — the first version was too light on observability.
- I'd treat the query taxonomy as a living artifact, updated as new question patterns emerged.

## Closing

This project is the one that taught me the most about matching the tool to the problem. LLMs are powerful, but for a bounded, repetitive query space, classical NLP was the right tool — fast, cheap, interpretable, and good enough to hit 78% autonomous resolution.

The lesson isn't "use old tools" — it's "start with the problem, not the newest model".

---

**Role:** Full-Stack Developer / AI Engineer — Part-Time Freelance