import { TestBed } from '@angular/core/testing';

import { WallpaperService } from './wallpaper.service';

describe('WallpaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WallpaperService = TestBed.get(WallpaperService);
    expect(service).toBeTruthy();
  });
});
