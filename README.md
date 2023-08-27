# Portfolio with Liquid Templating

Hosted through github pages [here](https://kyujulian.github.io)
## Local Setup:

```
git clone https://github.com/kyujulian/kyujulian.github.io
cd kyujulian.github.io
npm start
```

## Project structure

- **scripts**  - All the scripts used, both for interactive and templating reside here.
- **Templates**- Contains all the LiquidJS templates.
- **Partials** - Contains partial templates for common components - Nav and Footer
- **assets** - All static images/logos used
- **styles** - The styles are organized semantically by file. Each stylesheet is self-contained and only affects the section they're named after.
- **projects** - All the dynamic generated content comes from this folder, it holds the required `projects.json` file and the images corresponding to each project.

This project is mostly based on the `index.html` mount point, aside from the templating logic.

## Templating:

There are two places where templating logic is applied.

First on the _projects_ section on the main page inside the `index.html` file.
The second, it's to dynamically generate project pages according to the hashing in the url, they're accessible via the links generated in the projects session in the main page.

The url's are defined according to the following convention:\
`kyujulian.github.io/projects.html#{{ project handle }}`\
for example: [kyujulian.github.io/projects.html#dec](https://kyujulian.github.io/projects.html#dec) is valid, since dec is a valid handle defined in the `projects.json` file.


So that each project has it's own corresponding page generated through the LiquidJs calls in the scripts.
