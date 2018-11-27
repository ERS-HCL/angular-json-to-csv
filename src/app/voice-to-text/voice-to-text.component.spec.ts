import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceToTextComponent } from './voice-to-text.component';

describe('VoiceToTextComponent', () => {
  let component: VoiceToTextComponent;
  let fixture: ComponentFixture<VoiceToTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceToTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
