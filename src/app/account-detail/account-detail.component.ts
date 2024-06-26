import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent implements OnInit {

  id: string | null | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
   });
  }

}
