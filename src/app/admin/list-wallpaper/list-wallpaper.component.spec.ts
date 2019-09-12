import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWallpaperComponent } from './list-wallpaper.component';

describe('ListWallpaperComponent', () => {
  let component: ListWallpaperComponent;
  let fixture: ComponentFixture<ListWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
