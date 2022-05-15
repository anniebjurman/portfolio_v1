import { Component, HostListener, OnInit } from '@angular/core';
import { Experience } from '../experience';
import { Project } from '../project';
import { DataService } from '../data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'portfolio';
  experiences: Experience[] = [];
  projects: Project[] = [];
  currentPart: string = "home";

  navBackgroundHome: string = "#fff2a8";
  navBackgroundExp: string = "transparent";
  navBackgroundProj: string = "transparent";
  navBackgroundCont: string = "transparent";
  
  constructor(private dataService: DataService, private viewPostScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
    this.projects = this.dataService.getProjects();

    // if (this.dataService.getPrevScrollPos() === -1) {
    //   this.viewPostScroller.scrollToPosition([0,0]);
    //   console.log("-1");
    // } else {
    //   var tmp = this.dataService.getPrevScrollPos();
    //   this.viewPostScroller.scrollToAnchor("proj");
    //   console.log("NOT -1:", tmp);
    // }
  }

  @HostListener('window:scroll', )
    onWindowScroll() {
      this.getCurrentPart();
      console.log("Current ypos:", document.documentElement.scrollTop);
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
        this.navBackgroundHome = "#fff2a8";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "transparent";
        break;
      }
      case "experience": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "#ffc6a8";
        this.navBackgroundProj = "transparent";
        break;
      }
      case "project": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "transparent";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "#a8e5ff";
        break;
      }
      case "contact": {
        this.navBackgroundHome = "transparent";
        this.navBackgroundCont = "#e5c1ff";
        this.navBackgroundExp = "transparent";
        this.navBackgroundProj = "transparent";
        break;
      }
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
