---
title: Virtual Reality
description: A Virtual Reality experience working in the browser on multiple devices starting from mobile phone to VR Headset such as Oculus Rift 2.
client: Aeon
css:
  primary: '#fff'
  secondary: '#EB18D6'
  tertiary: '#FFE800'
  neutral4: 'rgba(255, 255, 255, 0.06);'
  thumbnailHover: 'rgba(255, 255, 255, 0.12)'
  colorBackground: '#262326'
roles:
  - User Interface
  - Interaction Design
  - Web Development
platform: Web
date: 2016-06-30
finished: true
thumbnail: src/static/work/aeon-vr.jpg
---

## 3D models & rendering

The project is limited to the WYSIWYG-style level editor instead of the programming environment that deals with the need to be simulated and its appearance of the final object, with the ultimate aim of providing direct graphic commands to manipulate. This means that any level of design data has been entered and manipulated manually and procedural forms.

{% stats "Objects handcrafted" "10+" "Procedural generated" "100+" "" "" "" %}

{% image "src/static/work/aeon-vr-perspective-sizes.jpg" "full" "" "Perspective Sizes" %}
{% image "src/static/work/aeon-vr-3.jpg" "full" "" "The entire VR map created on Blender" %}

## Visual concept

Visual parameters such as colours and lights with low gamut sections are followed by the bright parts and the sections with cold colours are followed by warm colours. This allows you to establish a feeling of rhythm and create visual delineation of scenes:

{% image "src/static/work/aeon-vr-1.png" "full" "" "An overview of color patterns of each area" %}
{% image "src/static/work/aeon-vr-2.png" "full" "" "3D color applied" %}

### Typography visuals

Typographic realization of the font that conveys authenticity with a fairly open front, under the simple shapes a design was carried out on the spaces.

{% image "src/static/work/aeon-vr-5.jpg" "full" "" "" %}

## Development

[Aeon](http://aeon.horoman.com) was developed using methods and work processes, automating the workflow. The web app was built in the efficient world using Gulp.js which acted as executor of the pre-established commands necessary for development. The configuration of Gulp was customized ad-hoc and the use of the JavaScript language together with the logic of Node.js which is equipped with a tool called NPM that allowed to load, modify and modify the packages necessary for development by generating the file package.json containing information on each package used, in this way it was possible to make the development environment versatile. The use of Gulp.js allowed the use of commands from the terminal thanks to which he began to listen and execute tasks such as compiling CSS files using SASS, concatenating and compressing JavaScript files, Jade compilation which spared not the writing the HTML code.

{% video "aeon-vr-development" "" "autoplay" "" %}

It was possible to further extend the automation of the workflow of Gulp thanks to some plugins such as BrowserSync which allowed the simultaneous development in various browsers on the desktop, tablet and smartphone; Webpack has permission to manage JavaScript modules. The program approach started with planning, writing the code and finally testing. Most of the prototyping was done by writing code based on the modulation and arrangement of objects for easy identification.

{% image "src/static/work/aeon-vr-4.jpg" "full" "" "" %}

The complex development of [Aeon](http://aeon.horoman.com) had the need to use a versioning system such as Git through the GitHub service which made it possible to store all the changes made to one or more files in order to be able to return to a previous state at any time. The GitHub service has permission to conduct multiple experiments and yet keep a "clean" version of the project, modify changes as needed, and in some circumstances, it was possible to rewrite the project's history in a release form. In this way, every step of the design process was documented.

{% image "src/static/work/aeon-vr-map.jpg" "full" "" "Map" %}

Text data had a size saving advantage of over 75%, thanks to HTML compression in conjunction with GZIP. The application interface uses the vector format to ensure sharpness regardless of the pixel density of the devices. SVG symbols were used to reduce HTTP requests and uploads.

Real-time 3D rendering was possible using WebGL technology along with three. Js which natively allowed the creation of scenes - where all objects, cameras and lights are placed, objects - geometries and materials rooms - single and multiple rooms necessary for virtual reality by simulating stereoscopic vision and lights. The three.js library has permission to have excellent consistency by speeding up the working process in the interactions.

## Summary & finished product

The goal of this project was to works on every modern browser. Eventually, [Aeon](http://aeon.horoman.com) works on specific types of browsers such as Chromium, Chrome Canary, Firefox Nightly, Safari (iOS), Chrome Dev (Android). Such browsers offer better WebGL support, making the best use of GPU’s.

{% stats "Pageviews (30 days)" "10.000+" "" "" "" "" "" %}

{% image "src/static/work/aeon-vr-6.png" "full" "" "" %}

Thanks to the set of technologies such as WebVR API and three.js and the automated workflow it was possible to create a virtual reality experience not only working on computers but also on tablet and mobile devices with medium-high power graphics chips.

{% stats "Total polygons" "60.000+" "Medium frame rate" "30FPS" "" "" "" %}

{% image "src/static/work/aeon-vr-7.png" "full" "" "" %}

This concept can be applied to education, entertainment, social media, interactive infographics and more.

## Gameplay

Experience is available on <http://aeon.horoman.com>.

{% video "aeon-vr-1" "full" "autoplay" "" %}
