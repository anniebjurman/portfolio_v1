import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdots',
  templateUrl: './projectdots.component.html',
  styleUrls: ['./projectdots.component.css']
})
export class ProjectdotsComponent implements OnInit {
  @Input() numProjects!: number;
  @Input() currProj!: number;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    const res = Array.from(Array(i).keys()).map(x => x + 1);
    return res;
}

}
