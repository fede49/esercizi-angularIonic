import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrescenteDecrescentePage } from './crescente-decrescente.page';

describe('CrescenteDecrescentePage', () => {
  let component: CrescenteDecrescentePage;
  let fixture: ComponentFixture<CrescenteDecrescentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrescenteDecrescentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrescenteDecrescentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
