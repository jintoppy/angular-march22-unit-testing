import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users = ['a', 'b'];
  constructor() { }

  getUsers():string[]{
    return [];
  }

}
