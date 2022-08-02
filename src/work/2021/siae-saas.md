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
skills:
  - Product Design
  - Design System
  - User Interface
  - User Experience
  - Interaction Design
platform: Web
date: 2020-03-24
finished: true
thumbnail: src/static/work/siae-saas.jpg
---

## Design process

Working with a research team, we quantified the impact of usability issues that existed in the SIAE products and prioritized high-impact issues that would interfere with users' goals to use SIAE’s services.

After conducting the user test sessions, we realized that the biggest impact problems were the reluctance of users to understand the information architecture along with the user interface. In fact, each SIAE web portal offered a different interface and patterns.

### Goals of the design

Given the user research I outlined the goals for a design of the product as follows:

- **Consistency** – Provide a shared set of principlese and ruoles to components and patterns.
- **Scalability** – Design never ends, everything must be changeable and scalable for the different use cases and business needs.
- **Comprehensive IA** – Provide more semantics for the users and their needs.

{% video "siae-sass-1" "full" "autoplay" "Overview of our design principles (in italian language)" %}

## Documentation website

Having your one source of truth in Figma is great for the designers but not very accessible to developers for numerous reasons.

Collaborating with several stakeholders and the rest of the team I wrote internal documentation to showcase and explain the SIAE’s design system, its components and the page templates.

For those nerdy enough to care, the tech stack was as follows:

- GitHub for code repository and versioning
- 11ty as file static-generator

### High-fidelity prototypes using Design System

I encorporated the idea of using high-fidelity prototypes in Figma with our designs for user testing and prototyping new features. This provided a number of benefits:

- You can create prototypes that look and feel like a real app without writing one line of code.
- Component library in place means consistency between prototypes and less time spent recreating page and templates
- More stable for demoing and testing than a build
- Making changes on the fly was easier than if it were coded

{% stats "Components" "250+" "Prototypes" "50+" "Less time spent on prototypes" "-60%" "" "" %}

### Segmentation

Within the design system, there are subdivisions such as:

#### 1. Guidelines

The components are designed with the guidelines and our design language.

{% video "siae-sass-2" "full" "" "Overview of components" %}

#### 2. Models

Models are groups of components joined together to form a relatively complex and distinct section of an interface.

{% video "siae-sass-3" "full" "" "Overview of models" %}

#### 3. Template

The use of templates allows us to keep the patterns consistent with the rest of the SIAE products.

{% video "siae-sass-4" "full" "" "Overview of templates" %}

#### 4. Specific pages

Unlike the templates that can be reused there are specific reserved pages such as homepage and more:

{% video "siae-sass-5" "full" "" "" %}
{% video "siae-sass-6" "full" "" "Overview of specific pages" %}

## Using the design system in the wild

Designing products was a large & complex piece of work that spanned over 1 year until today. Thankfully, with the design system in place, much of the low complexity ∞ high effort tasks, such as component design, didn't require as much focus.

This meant more time could be shifted towards higher complexity tasks such as UX thinking, structure and design.

{% image "src/static/work/siae-sass-1.jpg" "full" "" "" %}
{% image "src/static/work/siae-sass-2.jpg" "full" "" "" %}
{% image "src/static/work/siae-sass-3.jpg" "full" "" "" %}

## In conclusion

Creating our design system had a large impact on the overall company. It allowed us to cover all SIAE products and features more efficiently and effectively.

It also provided our engineering team with a one source of truth for all components & styles, allowing them to code more efficiently and produce more consistent, accessible components and less bugs.