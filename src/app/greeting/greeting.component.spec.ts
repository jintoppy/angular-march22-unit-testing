import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { By } from '@angular/platform-browser';
import { UserService } from '../user.service';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UserService);
    spyOn(service, 'getUsers').and.returnValue(['d', 'f']);
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title hello', () => {
    expect(component.title).toBe('Hello');
    // fixture.nativeElement
    // const h2El = fixture.debugElement.query(By.css('h2')).nativeElement;
    // console.log(h2El);
    // expect(h2El.textContent).toBe('HELLO');
    const h2El = fixture.nativeElement.querySelector('#myHeader') as HTMLHeadingElement;
    expect(h2El.innerText).toBe('HELLO');
  });

  it('should display MODIFIED on click of button', () => {
    component.onClick();
    // const btnEl = fixture.nativeElement.querySelector('button') as HTMLButtonElement;    
    // btnEl.click();
    fixture.detectChanges();
    expect(component.title).toBe('modified');
    const h2El = fixture.nativeElement.querySelector('#myHeader') as HTMLHeadingElement;
    expect(h2El.innerText).toBe('MODIFIED');
  });

  it('should display users', () => {    
    expect(component.users).toEqual(['d', 'f']);
    const liEls = fixture.nativeElement.querySelectorAll('li');
    expect(liEls.length).toBe(2);
  });

});
