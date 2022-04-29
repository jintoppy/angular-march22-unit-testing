import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment', () => {
    expect(component.counter).toBe(0);
    const h3El = fixture.nativeElement.querySelector('h3') as HTMLHeadingElement;
    const buttonEl = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(h3El.textContent).toBe('Clicked 0 times');

    // component.increment();
    buttonEl.click();
    fixture.detectChanges();

    expect(component.counter).toBe(1);
    expect(h3El.textContent).toBe('Clicked 1 times');
  });
});
