---
layout: portfolio_post
title: "BTEC First Foundation in Digital"
description: "A complete overview of my time on Bournemouth & Poole College’s “T-Level Foundation in Digital” course, where I explored everything from the online world and technology systems to web development, digital graphics, and networking. Each section of this page gives a personal look at the different units, with work samples where i am able to give them as well."
date: 2025-06-25
featured: true
topics: ["Education", "Technology", "College"]
header_image: "/res/Header-Images/Digital-Logo-BPC.webp"
icon: "/res/Icons/portfolio-icons/Digital-Logo-BPC.webp"
breadcrumb: ["My College Course"]
online_world_images:
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Online-World/Online-World-1.webp"
    alt: "Screenshot of a revision website used for the Online World unit."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Online-World/Online-World-2.webp"
    alt: "Screenshot of another online resource for studying technology topics."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Online-World/Online-World-3.webp"
    alt: "Example of software introduced during the Online World unit."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Online-World/Online-World-4.webp"
    alt: "Screenshot of a cloud computing tool used in the course."
tech_systems_images:
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Tech-Systems/Tech-Systems-1.webp"
    alt: "Cover of a textbook with exam-style questions for Technology Systems."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Tech-Systems/Tech-Systems-2.webp"
    alt: "Screenshot of KnowItAllNinja website for exam revision."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Tech-Systems/Tech-Systems-3.webp"
    alt: "Sample exam question from Technology Systems unit."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Tech-Systems/Tech-Systems-4.webp"
    alt: "Diagram explaining computer components from the course material."
web_dev_images:
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Web-Devlopment/Web_Devlopement_Image_1.webp"
    alt: "Screenshot of the portfolio website developed during the unit."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Web-Devlopment/Web_Devlopement_Image_2.webp"
    alt: "Comparison of two different website designs."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Web-Devlopment/Web_Devlopement_Image_3.webp"
    alt: "Code editor showing HTML and CSS for the portfolio project."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Web-Devlopment/Web_Devlopement_Image_4.webp"
    alt: "Final version of the portfolio website homepage."
digital_graphics_images:
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Digital-Graphics/Digital_Graphics_1.webp"
    alt: "Digital graphic created using Canva AI tools."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Digital-Graphics/Digital_Graphics_2.webp"
    alt: "Digital graphic created using Canva AI tools."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Digital-Graphics/Digital_Graphics_3.webp"
    alt: "Digital graphic created using Canva AI tools."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Digital-Graphics/Digital_Graphics_4.webp"
    alt: "Digital graphic created using Canva AI tools."
networking_images:
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Networking/Networking_1.webp"
    alt: "Network topology diagram created during the Networking unit."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Networking/Networking_2.webp"
    alt: "Network protocol documentation from the course."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Networking/Networking_3.webp"
    alt: "Network security assignment work."
  - src: "/res/Portfolio-Post-Images/btec-first-foundation-in-tech/Networking/Networking_4.webp"
    alt: "Practical networking setup and configuration."
---

## Online World

<div class="container-fluid content-container">
    <div class="row h-100">
        <div class="col-md align-content-center">
            <p>
                This unit is based around how technology is used in our day to day life.
                The unit covers many topics from cloud computing to online software, the lessons for this unit also had me working hands on with new tools and software.
                The unit one of two that is graded based on an exam score, as supposed to assignments like all but one other of the units.
                As you see the images I have chosen are the websites we used for revision, but I have also included screenshots of some of the software I was introduced to.
                You can learn more about the unit if you <a href="{{ '/portfolio/online-world-unit' | relative_url }}">click here</a>
            </p>
        </div>
        {% include carousel.html 
            images=page.online_world_images 
            carousel_id="online-world-carousel" %}
    </div>
</div>

## Technology Systems

<div class="container-fluid content-container">
    <div class="row h-100">
        {% include carousel.html 
            images=page.tech_systems_images 
            carousel_id="tech-systems-carousel" %}
        <div class="col-md order-md-1 order-first align-content-center">
            <p>
                This unit like online world is based around a how technology is used in the world; however, unlike online world this unit is more about the technology works as opposed to how it is used.
                This means it goes into computer componants, programming terminlogy, etc. This is the other exam unit that is based around an exam, not assignments. 
                In the images below I have given you a view into the ways of revision that both exams use. The first are text books with examstyle questions and the other is a website called KnowItAllNinja. 
                <a href="{{ '/portfolio/technology-systems-unit' | relative_url }}">click here to learn more.</a>
            </p>
        </div>
    </div>
</div>

## Web Development & Design

<div class="container-fluid content-container">
    <div class="row h-100">
        <div class="col-md align-content-center">
            <p>
                This has been the unit of the course that has been my favorite to work through.
                It allowed me to put to use my coding skills and work towards devloping this portfolio website.
                This unit started by researching and comparing two different websites and then ended by building this website.
                You are able to read more about this on the page on the other end of <a href="{{ '/portfolio/web-development-unit' | relative_url }}">this link</a>
            </p>
        </div>
        {% include carousel.html 
            images=page.web_dev_images 
            carousel_id="web-dev-carousel" %}
    </div>
</div>

## Digital Graphics

<div class="container-fluid content-container">
    <div class="row h-100">
        {% include carousel.html 
            images=page.digital_graphics_images 
            carousel_id="digital-graphics-carousel" %}
        <div class="col-md order-md-1 order-first align-content-center">
            <p>
                This was the unit which I found the most challenging, this was because this was the unit where I had no prior exposure to the tools.
                The tools in question. Adobe Photoshop and Illustrator, were tools I would of liked to have had used before but unfortunately pricing and other things ment I
                I couldn't be exposed to it. To learn more <a href="{{ '/portfolio/digital-graphics-unit' | relative_url }}">click here</a>
            </p>
        </div>
    </div>
</div>

## Networking

<div class="container-fluid content-container">
    <div class="row h-100">
        <div class="col-md align-content-center">
            <p>
                This unit was the unit that I found the most interesting, this was because it was the unit that I had the most prior knowledge about.
                This unit covered topics such as network topologies, network protocols, and network security. The unit was based around assignments and I was able to
                use my prior knowledge to help me with the assignments. You can learn more about this unit if you <a href="{{ '/portfolio/networking-unit' | relative_url }}">click here</a>
            </p>
        </div>
        {% include carousel.html 
            images=page.networking_images 
            carousel_id="networking-carousel" %}
    </div>
</div> 