import { Component, OnInit } from '@angular/core';
import {FrontendService} from "../../service/frontend.service";

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  public username: string;
  public avatar: string;

  public navigations: any[] = [];

  constructor(private frontendService: FrontendService) { }

  ngOnInit() {
    this.getInfo();
    this.initNavigation();
  }

  getInfo(): void {
    this.frontendService.get("/user")
      .subscribe((data) => {
        this.username = data.data['username'];
        this.avatar = data.data['avatar'];
      });
  }

  initNavigation(): void {
    this.frontendService.get("/navigation")
      .subscribe( (data) => {
        this.navigations = data.data;
      });
  }



}