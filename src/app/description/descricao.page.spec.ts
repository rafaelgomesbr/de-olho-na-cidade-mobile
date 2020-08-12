import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescricaoPage } from './descricao.page';

describe('DescricaoPage', () => {
  let component: DescricaoPage;
  let fixture: ComponentFixture<DescricaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
