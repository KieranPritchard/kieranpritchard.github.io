---
layout: portfolio_post
title: "RootPath"
description: A complete breakdown of my "Rootpath" development journey, where I transitioned a standard Link Tree clone into a professional, desktop-optimized web application. Each section of this log offers a deep dive into the technical challenges I faced, from refactoring component architecture and implementing responsive grid systems to refining the UI/UX for a native-app feel. I have documented every major pivot and milestone, providing a transparent look at my problem-solving process and the final codebase."
date: 2026-02-06
featured: false
topics: ["Web Design", "Social-Media"]
header_image: "../res/Header-Images/project-header-images/rootpath-header.webp"
icon: "../res/Icons/portfolio-icons/rootpath_Header.webp"
breadcrumb: ["RootPath"]
---

## The Blueprint & Vision

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm d-flex flex-column justify-content-center">
                <h4>Focus: Architecture over Speed</h4>
                <p>
                    The journey began with a realization: most link-in-bio tools fail to scale on desktop. I decided to strip back my original clone to build a high-performance web app. I established three pillars for the project: responsive grid engineering, a custom branding engine, and modular component architecture.
                </p>
                <p>
                    <b>Key Takeaway:</b> "Slowing down to speed up"—getting the architecture right early so I could scale later.
                </p>
            </div>
            <div class="col-sm order-first order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_1.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
        </div>
    </div>
</div>

## Bridging the Responsive Gap

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_2.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
            <div class="col-sm order-md-2 d-flex flex-column justify-content-center">
                <h4>Focus: UI/UX Design</h4>
                <p>
                    Before touching the code, I moved into a design-first phase. I mapped out a "desktop-first" optimization that utilized a horizontal grid rather than a single vertical column. This ensured the app would feel like a professional landing page on a 27-inch monitor while remaining a utility-first tool on mobile.
                </p>
                <p>
                    <b>Technical Note:</b> Designed with React modularity in mind to ensure a seamless transition from Figma to code.
                </p>
            </div>
        </div>
    </div>
</div>

## The Structural Refactor

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm d-flex flex-column justify-content-center">
                <h4>Focus: Clean Slate Foundation</h4>
                <p>
                    I officially entered the codebase by decluttering App.jsx and implementing an atomic folder structure. By organizing components into categories like /Backgrounds, /Bio, and /Buttons, I created a scalable environment. I also implemented the theme-color meta tag fix to sync the mobile browser UI with the app’s dark mode.
                </p>
                <p>
                    <b>Impact:</b> Established a foundation that handles custom desktop and mobile views without "spaghetti code."
                </p>
            </div>
            <div class="col-sm order-first order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_3.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
        </div>
    </div>
</div>

## Logic Consolidation (DRY)

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_4.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
            <div class="col-sm order-md-2 d-flex flex-column justify-content-center">
                <h4>Focus: Code Efficiency</h4>
                <p>
                    With the foundation set, I focused on the "Don't Repeat Yourself" (DRY) principle. I reformatted the Biography section and merged redundant elements that were performing similar tasks. This reduced the overall file size and made the layout much easier to maintain for future feature updates.
                </p>
                <p>
                    <b>Impact:</b> Higher maintainability. Shrinking the codebase while improving the functionality.
                </p>
            </div>
        </div>
    </div>
</div>

## The Design Pivot

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm d-flex flex-column justify-content-center">
                <h4>Focus: Product Intuition</h4>
                <p>
                    While coding, I realized my original Figma draft didn't feel "right" in the browser. I pivoted to a centered layout for better visual balance and refactored the "Download CV" button into a universal file-download component. I also introduced "Progressive Disclosure" by moving the QR code into a clean dropdown menu.
                </p>
                <p>
                    <b>Key Lesson:</b> Sometimes you have to break your own design rules to achieve the best user experience.
                </p>
            </div>
            <div class="col-sm order-first order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_5.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
        </div>
    </div>
</div>

## Launch & Identity

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-sm order-md-1 text-center d-flex justify-content-center">
                <img class="img-fluid w-75" src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_6.webp' | relative_url }}" alt="Kieran Pritchard working on a computer in a classroom.">
            </div>
            <div class="col-sm order-md-2 d-flex flex-column justify-content-center">
                <h4>Focus: Branding & Deployment</h4>
                <p>
                    In the final phase, I rebranded the project as Rootpath. The name reflects the hacker-inspired aesthetic of giving users "root access" to my professional presence. I finalized the responsive transitions and deployed the build to GitHub Pages for live testing and community feedback.
                </p>
                <p>
                    <b>Current Status:</b> Live, responsive, and ready for "root" navigation.
                </p>
            </div>
        </div>
    </div>
</div>

## Tech Stack & Links

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <ul>
                <li>
                    <b>Tech:</b> React.js, Tailwind CSS, GitHub Pages.
                </li>
                <li>
                    <a href='https://kieranpritchard.github.io/RootPath/'>Live Demo</a> | <a href='https://github.com/KieranPritchard/RootPath'>GitHub Repo</a>
                </li>
            </ul>
        </div>
    </div>
</div>

## Feedback Video

<div class="px-5">
    <div class="content-container h-100">
        <div class="row h-100 align-items-center">
            <div class="ratio ratio-16x9">
                <video controls>
                    <source src="{{ '../res/Portfolio-Post-Images/RootPath/RootPath_Video.mp4' | relative_url }}" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
