import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SampleService } from './sample.service';
describe('AppComponent', () => {
  let comp: AppComponent; 
  let service: SampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: SampleService, useClass: SampleService }
      ],
    });
    comp = TestBed.get(AppComponent);
    service = TestBed.get(SampleService);
  }));
  /*it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-testing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-testing');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing!');
  }));*/

  it("should not have welcome message", () => {
    expect(comp.welcome).toBeUndefined();
  }); 
  it("should welcome logged in user after Angular detects changes", () => {
    comp.ngOnInit();
    expect(comp.welcome).toContain(service.user.name);
  });
  it('should ask user to log in if not logged in after ngOnInit', () => {
    service.isLoggedIn = false;
    comp.ngOnInit();
    expect(comp.welcome).not.toContain(service.user.name);
    expect(comp.welcome).toContain('log in');
  });
});
