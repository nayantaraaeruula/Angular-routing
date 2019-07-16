import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-course-detail',
  template: `
  <h3> you have selected courses with id = {{courseId}}</h3>  
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>

    <div>
     <button (click)= "gotoCourse()">Back</button>
     </div>
  `,

  styles: []
})
export class CourseDetailComponent implements OnInit {


   public courseId: number;

  constructor(private route:   ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
      this.courseId = id;
  });
}
goPrevious(){
  let previousId = this.courseId - 1;
  this.router.navigate(['/course', previousId]);
}

goNext(){
  let nextId =  this.courseId + 1;
  this.router.navigate(['/course', nextId]);

}
gotoCourse(){
  let selectedId = this.courseId ? this.courseId : null;
  this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});

}

}
