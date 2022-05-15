import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {
  project!: Project;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id != null) {
      this.dataService.getProject(id).subscribe(project => this.project = project as Project);
      console.log("PROJECT", this.project);
    }
    else {
      console.log("ERROR: id = null");
    }
  }

}
