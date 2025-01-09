# Pipeline Project Management Template

## Overview

This project is a continuation of learning and strengthening my Front-end skills, improving code quality and better understanding of project workflows. Here I will replicate a design from Boostrap - [Pipeline Project Management Template](https://pipeline.mediumra.re/index.html) - as closely as possible using **HTML**, **SASS** and **Javascript** followed by **BEM** methodology.

## Purpose
I am building this project in order to deepen my understanding of:
* **DRY**: Writing clean and reusable code
* **Progressive Enhancement**: Building the project's solid, basic structure and progressively adding layers of styles and interactivity
* **Mobile-First Apporach**: Designing layouts for smaller screens first and then enhancing them for larger resolutions
* **Architecture**: I want to learn how to build and structure the project from scratch, without relying on tools like Webpack or Vite
* **Rebase Flow**: In previous projects I used a merge-based workflow, so in this project I aim to learn and adopt rebase approach in order to improve my **Git** proficiency

## Project Structure
The project structure includes the following directories and files:
```
/dist           # Distibution folder for the final build
/src            # Source files (.html, .scss, assets, etc.)
README          # Project documentation
build.sh        # Bash script for building the project into dist directory
.gitignore      # Git ignore file
```
Although this project does not utilize Webpack, Vite or similar bundlers, I will write a custom **bash script** (build.sh) to transpile styles and copy static assets into the `/dist` folder. This approach will help me better understand project build processes and workflows.

## How to run

In project's root directory:

1. Run ```chmod +x build.sh``` <- this will allow build.sh script to build the application
2. Run ```./build.sh```

Page will automatically open in browser after successful build process.

## Attribution
The project is created for personal learning purposes only. All credits go to the creators of the Boostrap design.