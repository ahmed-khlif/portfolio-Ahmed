---
title: "Building the TDG Management Platform: From Scratch to Production"
date: "2026-06-20"
description: "How I consolidated project execution, time tracking and infrastructure monitoring into a single workspace for two business units — and what the architecture looks like under the hood."
tags: ["Full Stack", "Next.js", "NestJS", "PostgreSQL", "DevOps"]
coverImage: "/projects/tdg-platform/cover.svg"
featured: true
readingTime: 7
---

In early 2026 I started my professional master's internship at Tawer Digital Group with a deliberately open brief: consolidate how two business units plan, track and ship work. At the time, project execution, time tracking and infrastructure monitoring lived in separate tools — per business unit. Engineers switched contexts constantly, and reporting meant stitching exports together by hand.

This post is the story of what I built, the architecture decisions that mattered, and the lessons I'd carry into the next one.

## The Problem Concretely

The two business units were using different tooling for the same kind of work:

- Project execution lived in one tool, time tracking in another, infrastructure monitoring in a third.
- Each unit had its own reporting process.
- Permissions were inconsistent — some modules checked roles in the UI, others not at all.
- There was no single workspace a team lead could open and see the real state of delivery.

The brief was not "build a dashboard". It was "make delivery visible and consistent across the business". That distinction matters: a dashboard shows data, a workspace supports decisions.

## Architecture Overview

I went with a Next.js front end on a NestJS API, with Prisma over PostgreSQL for the relational workload, Redis for caching frequent reads, and Firebase for push notifications. The whole thing runs containerised behind Nginx, with a 4-stage Jenkins pipeline from source control to deployment.

A simplified view:

User Query → Next.js (App Router, SSR) → NestJS API (role-scoped) → Prisma / PostgreSQL, Redis, Firebase → Jenkins CI/CD → Nginx → containerised services

On the observability side, Grafana k6 load tests validate performance before release, and Redis absorbs the read-heavy profile/search workloads that would otherwise hit Postgres on every request.

## Role-Based Access: 12 Roles, Scoped Properly

The part I'm most proud of is the access control model. Rather than sprinkling role checks throughout components, I designed a granular system covering 12 user roles, with permissions scoped and enforced across every module — checked at the API layer, not just hidden in the UI.

Concretely:

- Each role maps to a set of permissions.
- Permissions are scoped per module (project execution, time tracking, infrastructure monitoring).
- The API enforces them on every request — the UI is a convenience, not the gate.

This is the kind of decision that looks boring on a résumé and prevents an entire class of bugs in production.

## AI Planning Assistant (Advisory-Only)

One of the more interesting pieces: I integrated Google's Gemini API into an AI planning assistant that suggests task estimates and sprint priorities. The key constraint: the assistant is advisory-only. It never writes to the plan. Engineers stay in control; the model suggests, humans decide.

That constraint simplified the architecture considerably — the AI layer is read-only from the planner's perspective — and it keeps the product honest.

## Quality & Delivery

626 end-to-end tests reaching 94.23% code coverage is the number I keep coming back to. Automated quality matters more than impressive architecture, because architecture degrades gracefully only if you can trust the tests to tell you when it does.

On the delivery side, the 4-stage Jenkins pipeline takes code from source control to production through build, test, staging validation and deploy — no manual steps, no heroics on release day.

## What I'd Do Differently

Given another pass:

- Start the RBAC model earlier — it shaped everything downstream.
- Add the notification engine before launch rather than after; assignment and deadline events were the most-requested feature during the pilot.
- Put Redis caching in from day one for the read-heavy endpoints rather than retrofitting it.

## Closing

The TDG Management Platform was my final-year engineering project, and it's the one I point to when someone asks what "full-stack with real constraints" looks like: real users, real permissions, real uptime expectations, real delivery cadence.

The repository and case study are on my GitHub — links below.

---

**Source:** [github.com/ahmed-khlif](https://github.com/ahmed-khlif) · **Role:** Full-Stack Developer — PFE Intern @ Tawer Digital Group