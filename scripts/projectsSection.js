var Liquid = window.liquidjs.Liquid;

var engine = new Liquid({
  extname: ".html",
  cache: true,
});

const TEMPLATE = `templates/homeProjectsSection.liquid`;

fetch("projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("projects");
    loadAndRenderTemplate(data, container);
  })
  .catch((err) => {
    console.log(err);
  });

//Okay to repeat since this is a small project, I'm opting for encapsulation of functionality
function loadAndRenderTemplate(data, container) {
  fetch(TEMPLATE)
    .then((response) => response.text())
    .then((template) => {
      // Render the template
      const renderedTemplate = engine.parseAndRenderSync(template, {
        //feed in the json data to the template
        data: data,
      });

      return renderedTemplate;
    })
    .then((rendered) => {
      container.innerHTML = rendered;
    })
    .catch((err) => {
      console.log(err);
    });
}
