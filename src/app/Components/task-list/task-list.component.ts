import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks : Task[];
  @Input() heading : string;
  // @Input() taskData : Task[];

  constructor() { 
  }

  ngOnInit(): void {
  }
}
