import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWallpapperComponent } from './details-wallpapper.component';

describe('DetailsWallpapperComponent', () => {
  let component: DetailsWallpapperComponent;
  let fixture: ComponentFixture<DetailsWallpapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWallpapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWallpapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
