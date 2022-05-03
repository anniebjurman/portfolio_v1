import { Component, HostListener } from '@angular/core';
import { Experience } from './experience';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'portfolio';
  experiences: Experience[] = [];
  projects: Project[] = [];
  currentPart: string = "home";

  navBackgroundHome: string = "pink";
  navBackgroundExp: string = "transparent";
  navBackgroundProj: string = "transparent";
  navBackgroundCont: string = "transparent";

  ngOnInit(): void {
    this.loadExperiences();
    this.loadProjects();
  }

  loadExperiences() {
    var e1 = new Experience(2016, "Technology program", "I started a high school education with a focus on technology and computer science.");
    var e2 = new Experience(2016, "Summer business", "During the summer, a friend and I started and ran a summer business teaching children to play floorball.");
    var e3 = new Experience(2019, "Moved to Umeå", "Moved from Skellefteå to Umeå to start studying at University.");
    var e4 = new Experience(2019, "M.Sc.Eng in Interaction Technology and Design", "Started a Master of science in engineering at Umeå University." + 
                            "The program is 5 years and focuses a broad spectrum of subjects where the main focus is on interaction technology and design.");
    var e5 = new Experience(2020, "Worked as a café manager", "The service included tasks such as placing product orders, preparing lunches," +
                             " standing at the checkout, helping customers and posting income.");

    this.experiences.push(e1, e2, e3, e4, e5);
  }

  loadProjects() {
    var p1 = new Project("NASA Space App Challenge", "A website the informs about the suns impact on us on earth and the different satellites that orbit the sun.",
     "hej", "hej", "hej", "hej", "Figma, HTML/CSS/JS");
    var p2 = new Project("Website for VB-ost", "A clickable HiFi prototype of a website for Västerbottensost. Developed in collaboration with Västerbottensost during a course at Umeå University.",
    "hej", "hej", "hej", "hej", "Adobe XD");
    var p3 = new Project("Mobile-adapted design for INSIKT", "A clickable HiFi prototype on a mobile-adapted version of Trimma’s product INSIKT. Developed in collaboration with Trimma during a course at Umeå University.",
    "hej", "hej", "hej", "hej", "Adobe XD");
    var p4 = new Project("Hackaton", "a HiFi clickable prototype ...", "hej", "hej", "hej", "hej", "Adobe XD");

    this.projects.push(p1, p2, p3, p4);
  }

  @HostListener('window:scroll', )
    onWindowScroll() {
      this.getCurrentPart();
  }

  getCurrentPart() {
    var yPos = document.documentElement.scrollTop;

      if (yPos > 3800 && this.currentPart != "contact") {
        this.currentPart = "contact";
        this.toggleNavBackground();
      } 
      else if(yPos > 2400 && yPos < 2900 && this.currentPart != "project") {
        this.currentPart = "project";
        this.toggleNavBackground();
      } 
      else if (yPos > 950 && yPos < 2400 && this.currentPart != "experience") {
        this.currentPart = "experience";
        this.toggleNavBackground();
      }
      else if (yPos > 0 && yPos < 950 && this.currentPart != "home") {
        this.currentPart = "home";
        this.toggleNavBackground();
      }
  }

  toggleNavBackground() {
    switch(this.currentPart) {
      case "home": {
        this.navBackgroundHome = "pink";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "transparent";
        break;
      }
      case "experience": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "green";
        this.navBackgroundProj = "transparent";
        break;
      }
      case "project": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "yellow";
        break;
      }
      case "contact": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "blue";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "transparent";
        break;
      }
    }
  }
}
