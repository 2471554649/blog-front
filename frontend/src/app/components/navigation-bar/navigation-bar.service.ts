/**
 * Create By Seven.wk
 * Description: 导航栏的service服务
 * Create At 2018/10/4
 */
import {Injectable} from "@angular/core";
import {GetService} from "../../service/get.service";
import {Router} from "@angular/router";

@Injectable()
export class NavigationBarService {

  constructor(private getService:GetService) {
  }

  /**
   * 获取作者的信息
   * @returns {Observable<Object>}
   */
  public getAuthorInfo() {
    return this.getService.get("user");
  }

  /**
   * 获取导航的信息
   * @returns {Observable<Object>}
   */
  public getNavigations() {
    return this.getService.get("navigation");
  }

}

export class Author {
  public id: number;
  public username: string;
  public avatar: string;

  constructor() {}
}

export class Navigation {
  public name: string;
  public link: string;
  constructor() {
  }
}
