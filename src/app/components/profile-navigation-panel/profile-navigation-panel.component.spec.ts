import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavigationPanelComponent } from './profile-navigation-panel.component';

describe('ProfileNavigationPanelComponent', () => {
  let component: ProfileNavigationPanelComponent;
  let fixture: ComponentFixture<ProfileNavigationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileNavigationPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
