import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() proj!: Project;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  setCurrentPos() {
    this.dataService.setPrevScrollPos(document.documentElement.scrollTop);
  }

}
