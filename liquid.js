
var Liquid = window.liquidjs.Liquid;
var engine = new Liquid({
  extname: ".html",
  cache: true,
});

fetch('projects/projects.json')
  .then(response => response.json())
  .then(data => {
    const template = '{% for item in items %}<p>{{ item.name }}</p>{% endfor %}';
    const renderedTemplate = engine.parseAndRender(template, { items: data });


    return renderedTemplate;
  })
  .then(rendered => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = rendered;
  })
  .catch(err => {
    console.log(err);
  })