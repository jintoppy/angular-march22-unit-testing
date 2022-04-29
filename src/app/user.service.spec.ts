import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  describe('getUsers', () => {
    it('should return users', () => {
      const expectedValue = ['a', 'b'];
      const result = service.getUsers();
      expect(result).toEqual(expectedValue);
    });
  });
  


});
