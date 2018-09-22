import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('userid');
        console.log(id);
      })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    })
  }

}
