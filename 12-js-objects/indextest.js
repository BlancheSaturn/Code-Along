// General

const wrapper = document.getElementById("page-wrapper");
// wrapper.innerHTML = 'Hello'

class person {
  constructor(name, quote, skills) {
    this.name = name;
    this.quote = quote;
    this.skills = skills;
  }
  getSkills() {
    return this.skills;
  }
}

const john = new person("John Doe", "My in spirational quote here...", [
  "HTML",
  "CSS",
  "Javascript",
]);

const Jane = new person("Jane Smith", "My in spirational quote here...", [
  "HTML",
  "CSS",
  "Javascript",
]);

const Ann = new person("Ann Doe", "My in spirational quote here...", [
  "HTML",
  "CSS",
  "Javascript",
]);

const listOfCohort = [John, Jane, Ann];

// my object person
const person = {
  name: "John Doe",
  quote: "My inspirational quote here...",
  skills: ["HTML", "CSS", "JavaScript"],
  getSkills() {
    return this.skills;
  },
};

//Page options
const landingPage = "profile";
let page = "profile";

const changePage = (newPage) => {
  // change the page variable
  if (newPage === page) return;
  page === newPage;
  // empty the content of my page
  wrapper.innerHTML = "";
  // fill the contant of the new page
  loadPage(newPage);
};

const loadPage = (page) => {
  if (page === "profile") {
    // how to set h1 inside my wrapper
    const title = document.createElement("h1");
    title.setAttribute("id", "myTitle");
    title.setAttribute("class", "title");

    title.innerHTML = person.name;
    wrapper.appendChild(title);

    // let set a quote
    const quote = document.createElement("p");
    quote.setAttribute("class", "quote");
    quote.innerHTML = `"${person.quote}"`;
    wrapper.appendChild(quote);

    // let add the skills
    const ulist = document.createElement("ul");
    ulist.setAttribute("class", "skill-list");
    wrapper.appendChild(ulist);

    person.skills.forEach((skill, iter) => {
      const listItems = document.createElement("li");
      listItems.setAttribute("class", `list-item skill-${iter}`);
      listItems.innerHTML = skill;
      ulist.appendChild(listItems);
    });

    const backToCohortButton = document.createElement("button");
    backToCohortButton.setAttribute("class", "button");
    backToCohortButton.innerHTML = "Back to Cohort";
    wrapper.appendChild(backToCohortButton);

    backToCohortButton.addEventListener("click", () => {
      changePage("home");
    });
  } else if (page === "home") {
    const title = document.createElement("h1");
    title.setAttribute("id", "myTitle");
    title.setAttribute("class", "title");

    title.innerHTML = "This is the home page";
    wrapper.appendChild(title);

    const goToProfileButton = document.createElement("button");
    goToProfileButton.setAttribute("class", "button");
    goToProfileButton.innerHTML = "Go to profile page";

    wrapper.appendChild(goToProfileButton);

    goToProfileButton.addEventListener("click", () => {
      loadPage("profile");
    });

    // I will like to map over my list of people
    // show a column content for each of them
    listOfCohort.map((person) => console.log(person));
  }
};

loadPage(landingPage);
