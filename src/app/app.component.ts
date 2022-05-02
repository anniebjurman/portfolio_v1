import { Component } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.loadExperiences();
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

    console.log(this.experiences);
  }
}
