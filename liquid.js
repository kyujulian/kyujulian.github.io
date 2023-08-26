var Liquid = window.liquidjs.Liquid;
var engine = new Liquid({
  extname: ".html",
  cache: true,
});

fetch("projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const template = `
      <div class="projects-container">
      {% for item in items %}
      <div class="project-card">
        <div class="image-container" 
        style="background: url({{item.image}}) no-repeat center center/cover;">
        {% if item.live %}
          <a target="_blank" href={{item.live}}>View Live</a>
        {% endif %}
        </div>

        <div class="written">
          <h1 class="projects-title">{{ item.name }}</h1>
          <p>{{ item.description }}</p>
          <a href={{item.source}}> check the source code! </a>
          <p> {{item.image}} </p>
        </div>
      </div>
      {% endfor %}
      </div>
      `;
    const renderedTemplate = engine.parseAndRender(template, { items: data });

    return renderedTemplate;
  })
  .then((rendered) => {
    const outputDiv = document.getElementById("projects-section");
    outputDiv.innerHTML = rendered;
  })
  .catch((err) => {
    console.log(err);
  });
