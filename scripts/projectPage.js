// fetch JSON data

var Liquid = window.liquidjs.Liquid;

var engine = new Liquid({
  extname: ".html",
  cache: true,
});

fetch("./projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1); // Remove the '#' from the hash
      console.log("hash", hash);

      // Find the item that matches the hash
      const selectedItem = data.find((item) => item.handle === hash);

      if (selectedItem) {
        loadAndRenderTemplate(selectedItem.handle);
      }
    });

    // Initial load: Check if there's a hash in the URL
    if (window.location.hash) {
      const initialHash = window.location.hash.substring(1);

      const initialItem = data.find((item) => item.handle === initialHash);
      const itemToRender = data
        .filter((item) => item.handle === initialHash)
        .at(0);

      if (itemToRender) {
        console.log(itemToRender);
        loadAndRenderTemplate(itemToRender, initialItem.handle);
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });

function loadAndRenderTemplate(data, handle) {
  // Fetch the template using AJAX
  fetch(`templates/project.liquid`)
    .then((response) => response.text())
    .then((template) => {
      // Render the template
      const renderedTemplate = engine.parseAndRenderSync(template, {
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
