import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projectslide',
  templateUrl: './projectslide.component.html',
  // styles: [`
  //     .opacity {
  //         animation: pulse 0.5s;
  //         animation-direction: alternate;
  //     }
  //     @keyframes pulse {
  //         0% {
  //             opacity: 1;
  //         }
  //         50% {
  //             opacity: 0.3;
  //         }
  //         100% {
  //             opacity: 1;
  //         }
  //     }
  // `],
  styleUrls: ['./projectslide.component.css']
})

export class ProjectslideComponent implements OnInit {
  @Input() proj!: Project;
  projOpacity = {
    opacity: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges() {
  //   this.projOpacity.opacity = true;
  // }

}
