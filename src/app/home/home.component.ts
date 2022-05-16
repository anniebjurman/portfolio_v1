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
  accentColor: string = "#FF00A9";
  transpColor: string = "transparent";
  defColor: string = "black";

  navBackgroundHome: string = this.accentColor;
  navBackgroundExp: string = this.transpColor;
  navBackgroundProj: string = this.transpColor;
  navBackgroundCont: string = this.transpColor;

  navTextHome: string = this.accentColor;
  navTextExp: string = "black";
  navTextProj: string = "black";
  navTextCont: string = "black";
  
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
        this.navBackgroundHome = this.accentColor;
        this.navBackgroundCont = this.transpColor;
        this.navBackgroundExp = this.transpColor
        this.navBackgroundProj = this.transpColor;

        this.navTextHome = this.accentColor;
        this.navTextCont = this.defColor;
        this.navTextExp = this.defColor;
        this.navTextProj = this.defColor;
        break;
      }
      case "experience": {
        this.navBackgroundHome = this.transpColor;
        this.navBackgroundCont = this.transpColor;
        this.navBackgroundExp = this.accentColor;
        this.navBackgroundProj = this.transpColor;

        this.navTextHome = this.defColor;
        this.navTextCont = this.defColor;
        this.navTextExp = this.accentColor;
        this.navTextProj = this.defColor;
        break;
      }
      case "project": {
        this.navBackgroundHome = this.transpColor;
        this.navBackgroundCont = this.transpColor;
        this.navBackgroundExp = this.transpColor;
        this.navBackgroundProj = this.accentColor;

        this.navTextHome = this.defColor;
        this.navTextCont = this.defColor;
        this.navTextExp = this.defColor;
        this.navTextProj = this.accentColor;
        break;
      }
      case "contact": {
        this.navBackgroundHome = this.transpColor;
        this.navBackgroundCont = this.accentColor;
        this.navBackgroundExp = this.transpColor;
        this.navBackgroundProj = this.transpColor;

        this.navTextHome = this.defColor;
        this.navTextCont = this.accentColor;
        this.navTextExp = this.defColor;
        this.navTextProj = this.defColor;
        break;
      }
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
