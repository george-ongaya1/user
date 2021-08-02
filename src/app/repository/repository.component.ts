import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
users:Users[]=[]
  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
    this.users=response
    })
  }

}
