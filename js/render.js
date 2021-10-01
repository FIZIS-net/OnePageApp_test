export default class Render {
    renderHello() {
        fetch('templates/template.mustache')
          .then((response) => response.text())
          .then((template) => {
            var rendered = Mustache.render(template, { name: 'Luke' });
            document.getElementById('target').innerHTML = rendered;    
          });
    }
    Index() {
        fetch('templates/test.mustache')
          .then((response) => response.text())
          .then((template) => {
            var rendered = Mustache.render(template);
            document.getElementById('target').innerHTML = rendered;    
          });
    }
}