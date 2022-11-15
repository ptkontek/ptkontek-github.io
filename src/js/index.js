import "../scss/main.scss";

console.log("Hi, I'm Patrycja - nice to meet you!");

fetch("https://api.github.com/users/ptkontek/repos?sort=created&direction=desc")
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".project-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="project">
       <div class="project__window">
         <span class="project__circle"></span>
         <span class="project__circle"></span>
         <span class="project__circle"></span>
       </div>
       <div class="project__content">
         <img src="img/github-icon.svg" alt="" />
         <h3 class="project__grid project__title">
           <span class="project__label">project:</span
           ><span>${name}</span>
         </h3>
         <p class="project__grid project__grid--description">
           <span class="project__label">description</span
           ><span>${description}</span>
         </p>
         <p class="project__grid">
           <span class="project__label">demo:</span
           ><span
             ><a class="project__link" href="${homepage}" target="_blank" rel="noopener noreferer" title="${name} - demo"
               >&lt;see here&gt;</a
             ></span
           >
         </p>
         <p class="project__grid">
           <span class="project__label">github:</span
           ><span
             ><a class="project__link" href="${html_url}" target="_blank" rel="noopener noreferer" title="${name} - code"
               >&lt;source code&gt;</a
             ></span
           >
         </p> 
       </div>
     </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
