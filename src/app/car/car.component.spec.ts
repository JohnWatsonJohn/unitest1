import { CarComponent } from './car.component';
import {TestBed} from '@angular/core/testing';

describe('CarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [CarComponent]
    });
  });
  it('шут криейт кампонент истантс', () => {

    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  it('шут рендер аш1 таг виз титле', () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.nativeElement;
    const text = component.querySelector('h1').textContent;
    expect(text).toEqual('My car');

  });

});
