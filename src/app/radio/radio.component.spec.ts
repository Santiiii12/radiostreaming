import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe ("it should show radio singular name",()=>{
    it("it should show radio singular name",()=>{
      expect(component.title).toBe('radiosingulars');
  })

  it("it should show a h1 with the value of the title",()=>{
  const h1=fixture.nativeElement;
  expect(h1.querySelector ('h1').textContent).toBe('radiosingulars');
 })
})
 describe('should search radio station by name',()=>{
  it('should have an input with the place holder,escribe el nombre de la emisora',()=>{

    const placeholder = fixture.nativeElement.querySelector('input').placeholder;
    const placeholderValue = 'escribe el nombre de la emisora'
    expect (placeholderValue).toBe('escribe el nombre de la emisora')
})
it('should have a button with the name search',()=>{
  const placeholder = fixture.nativeElement.querySelector('button').textContent;
  const button = 'Search'
  expect (placeholder).toBe('Search')
})
it ('should run the search function once',()=>{
  const radioStationSpy = jest.spyOn(component,'searchRadio')
  const button =fixture.debugElement.query(By.css('button'));
  button.triggerEventHandler('click',null);
  expect (radioStationSpy).toHaveBeenCalledTimes(1)

})

describe ('should have a list',()=>{
  it ('should exist a radio list',()=>{
    const radioStationList = fixture.nativeElement.querySelector('ul');
    console.log(radioStationList);
    expect (radioStationList).not.toBeNull();
})
it ('radio station list should inicialize void',()=>{
  const liArray = fixture.nativeElement.querySelector('li');
  expect(liArray.lenght).toBe(0);
})
it('if a succesful search is done, should return at least one result',()=>{
  component.radioStations=[{
    name: "test",
    url: "test",
    country: "test"
  }]
  const radioStationSpy=jest.spyOn(component,'searchRadio').mockImplementation(()=>{
    component.filterArray=component.radioStations.filter((radio)=>{
      return radio.name.includes("t");
    })
  })
  const arrayList=fixture.nativeElement.querySelector('ul');
  const arrayListLi=arrayList.querySelectorAll('li');
  const button=fixture.debugElement.query(By.css('button'))
  //const input=fixture.debugElement.query(By.css('input'));
  //input.triggerEventHandler('keyup','Rac1');
  //component.inputValue="8";
  button.triggerEventHandler('click',null);
  fixture.detectChanges();
  expect(arrayListLi.length).toBeGreaterThan(0);
})
})
})
});
