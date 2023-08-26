var Liquid = window.liquidjs.Liquid;

var engine = new Liquid({
  extname: ".html",
  cache: true,
});

const projectTemplate = `templates/project.liquid`;

// fetch JSON data
fetch("./projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    // Initial load: Check if there's a hash in the URL
    if (window.location.hash) {
      const initialHash = window.location.hash.substring(1); // Remove the '#' from the hash

      // Find the item that matches the hash
      const initialItem = data.find((item) => item.handle === initialHash);
      /*Pick the item with the handle that matches the url hash, e.g
       *
       * localhost:8080/projects.html#dec will display the dec project.
       */
      const itemToRender = data
        .filter((item) => item.handle === initialHash)
        .at(0);

      if (itemToRender) {
        loadAndRenderTemplate(itemToRender, initialItem.handle);
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });

//Okay to repeat since this is a small project, I'm opting for encapsulation of functionality
function loadAndRenderTemplate(data, handle) {
  fetch(projectTemplate)
    .then((response) => response.text())
    .then((template) => {
      // Render the template
      const renderedTemplate = engine.parseAndRenderSync(template, {
        //feed in the json data to the template
        item: data,
      });

      return renderedTemplate;
    })
    .then((rendered) => {
      const container = document.getElementById("template-container");
      container.innerHTML = rendered;
    })
    .catch((err) => {
      console.log(err);
    });
}
