const jsContainer =document.getElementById("js");
const render = () =>{jsContainer.innerHTML = `<div class ="demo"> Hello JS <input />

<p> ${new Date()}</p>
 </div> `;
//  ReactDOM.render(reactContainer);

 

const reactContainer =document.getElementById("react");
// jsContainer.innerHTML = `<div class ="demo"> Hello JS
//  </div> `;


 ReactDOM.render(React.createElement("div",{className: "demo" },
  "Hello React", React.createElement("input"), React.createElement("p", null, new Date().toString())),
 reactContainer);}

 setInterval(render,1000);
 
