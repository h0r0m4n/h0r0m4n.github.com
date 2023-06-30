---
title: Design System
description: I led the end-to-end design process for creating a Design System for the web, which covered a complete redesign of over 10+ Saas products.
client: SIAE
css:
  primary: '#fff'
  secondary: '#2A97DF'
  tertiary: '#2A97DF'
  neutral4: 'rgba(255, 255, 255, 0.06);'
  thumbnailHover: 'rgba(255, 255, 255, 0.12)'
  colorBackground: '#2D3952'
role: Lead Designer
roles:
  - User Research
  - User Interface
  - Interaction Design
  - Design System
platform: Web
date: 2020-03-24
finished: true
thumbnail: src/static/work/siae-design-system.jpg
---

## Problem Statement

SIAE's growth was more rapid than they had expected. Today SIAE offers more than ten different services. As time passed, different product experiences began to sum up to an inconsistent whole with fragmentation at critical touchpoints, leftover experiments and mounting design debt. Other companies corrected the design several times, and the design continued to be poorly understood by the customers.

## Design Process

Working with a research team, we quantified the impact of usability issues on the SIAE products. We prioritised high-impact problems that would interfere with users' goals to use SIAE's services.

{% stats "Services" "10+" "Success rate" "-66%" "" "" %}

To understand how the ecosystem of current products works, I facilitated several workshops with key stakeholders that allowed my team to learn more about each service.

{% image "src/static/work/siae-design-system-workshop.jpg" "full" "" "I hosted some workshops and meetings that brought together representatives from different disciplines." %}

After the heuristic evaluation and the user test sessions, we found that each service offered a different interface and patterns, and the design patterns confused users and led to a poor user experience.

{% stats "Pain points" "11" "User types" "5" "" "" %}

### Project Goals

So my team and I took the initiative to propose to create a standardized, intuitive interface that would support the business and user requirements of each SIAE service. With a close collaboration with business and other leadership, we end up with two main goals:

1. **Create consistency across all SIAE services** – Provide a single source of components, patterns, and styles and unify disjointed experiences so that they are visually cohesive and appear part of the same ecosystem.
2. **Create a unified language within and between cross-functional teams** – A unified language reduces wasted design or development time around miscommunications.

### Design Library

I needed to reframe the problem into something our design and engineering understand more: collecting all the existing components into a spreadsheet that eventually handed over 200 unique components from all the SIAE services.

{% stats "Button variants" "25+" "Input variants" "10+" "" "" %}

Each component has been categorized, segmented, and labelled for each template and service.

{% image "src/static/work/siae-design-system-components-list.jpg" "full" "" "This was the inventory spreadsheet that grouped around 200+ unique components across essential product flows." %}

The most important part of the design was to create a consistent visual language across all SIAE services. This included a new colour palette, typography and iconography. Working closely with SIAE's brand guidelines we start to develop a new identity system.

Based on the existing components and collaboration with the SIAEs brand, I led the redesign of each component. A design library made of reusable components is what I, with my team, built. This helped us maintain and update UI changes as quickly as possible. And it become a great communication tool for the engineering team since each component included its properties and all necessary states such as hover, focus and more.

{% stats "Previous Typography System" "33 styles" "New Typography System" "8 styles" "" "" "" "" %}
{% stats "Previous Colour System" "15 colours" "New Colour System" "6 colours" "" "" "" "" %}

{% image "src/static/work/siae-sass-figma-library.jpg" "full" "" "Overview of the new components designed in Figma utilising all the features such as properties, auto layout and much more." %}

### Prototyping

Thanks to the Design Library, it was possible to significantly increase the redesigned speed of each SIAE service by using components from its components library. This approach allowed us to better communicate the look and feel of a new design while focusing on each component's functionality.

{% stats "Components" "200+" "Prototypes" "25+" "Less time spent on prototypes" "-80%" "" "" %}

We were able to create interactive prototypes that were tested with real users. These prototypes were often used as part of an agile sprint and allowed us to iterate on each service rapidly.

{% image "src/static/work/siae-design-system-prototypes.jpg" "full" "" "An overview of the complexity of the prototype." %}

This provided several benefits:

- The consistency improved dramatically between each service.
- Less time was spent on the prototypes thanks to the Atomic Design methodology.
- Using multiple Figma libraries allowed us to make changes on the fly.

{% image "src/static/work/siae-design-system-1.jpg" "full" "" "" %}
{% image "src/static/work/siae-design-system-2.jpg" "full" "" "" %}
{% image "src/static/work/siae-design-system-3.jpg" "full" "" "" %}

## Design System

Eventually, the Design Library became more robust, and we decided to opt for the design system. The design system consists of a collection of modular, reusable components out of Figma. This was a huge opportunity to start documenting each component for the rapid development implementation and reduce the need for custom code.

### Documentation website

Collaborating with several stakeholders and the rest of the team, I led the writing of the documentation to showcase and explain the SIAE’s design system, components, page templates, workflows and branding guidelines. The technological stack (to use industry parlance) was as follows:

- GitHub for code repository and versioning
- 11ty as file static-generator

#### Design principles

Contain specific information regarding the visual references and design principles for creating interfaces or other design deliverables. This section focuses on branding (colours, typography, trademarks, logos and more). It also covers guidance on content such as tone of voice and language recommendations.

{% video "siae-design-system-1" "full" "" "Overview of our design principles (in italian language)" %}

#### Guidelines

The guidelines section contains valuable information on iconography and essential components such as interactive areas, buttons, lists and much more.

{% video "siae-design-system-2" "full" "" "Overview of components" %}

#### Models

The models cover groups of components joined together to form a relatively complex and distinct section of an interface.

{% video "siae-design-system-3" "full" "" "Overview of models" %}

#### Templates

Templates explain how to keep the patterns consistent with the rest of the products and demonstrate the critical templates used in SIAE services.

{% video "siae-design-system-4" "full" "" "Overview of templates" %}

#### Special pages

Unlike the templates that can be reused, there are specific reserved pages such as the homepage and more.

{% video "siae-design-system-5" "full" "" "" %}
{% video "siae-design-system-6" "full" "" "Overview of specific pages" %}

## Results

The design system was a huge step forward for SIAE and our team. It allowed our design team and engineering to create new template pages and quickly prototype without needing custom code. Furthermore, it provided consistency between each service—something that didn’t happen before.

It also provided our engineering team with one source of truth for all components & styles, allowing the code to be more efficient and produce more consistent, accessible components with fewer bugs.

{% stats "Sign-Up’s" "30%" "New Deposits" "70%" "" "" "" "" %}

Besides the adoption of design systen, there were a few other significant results:

1. Registration flow had a 30% better conversion, with new potential customers.
2. The new deposit feature on the web goes from 55% to around 95% of total users.

## Learnings

There's some valuable lessons I picked up along the way:

1. **Collaboration is the first step towards adoption** — Pairing with engineers and designers through component discussions, reviews, small workshops or even 'build-alongs' (where an engineer literally sits with a designer and quickly prototypes a complex component to get a sense of some of its properties and states ) can't be understated. It isn't just a way to plant a sense of ownership, it makes adoption flow so much better down the line.
2. **Be flexible, not fixed in approach** – Taking up the role of the enforcer is necessary sometimes, but over-policing might drive people away. Instead, the system should be built to embrace the nuances of a company's culture, acknowledging that there'll be some tradeoffs along the way.
3. **Focus on people, not patterns** — Politicking, sponsorship, promotion and a host of other interpersonal competencies were far more critical in closing the engineering and design gap and helping people build better products by default.