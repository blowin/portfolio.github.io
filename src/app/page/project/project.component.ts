import { Component, OnInit } from '@angular/core';
import {Project} from '../../data/project';
import {Link} from '../../data/link';
import {ProjectService} from '../../../services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) {
    projectService.getProjects().subscribe((data) => {
      this.projects = data.map((it) => {
        const project = new Project();
        if (it.sourceCodeUrl != null) {
          project.sourceCodeUrl = new Link();
          project.sourceCodeUrl.url = it.sourceCodeUrl.url;
          project.sourceCodeUrl.name = it.sourceCodeUrl.name;
        }

        project.description = it.description;
        project.language = it.language;
        project.name = it.name;
        return project;
      });
    });
  }

  ngOnInit(): void {
  }

}
