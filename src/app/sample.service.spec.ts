import { TestBed, inject } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;
  beforeEach(() => {
    //service = new SampleService()
    TestBed.configureTestingModule({ providers: [SampleService] }); 
    service = TestBed.get(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return empty list", () => {
    expect(service.getAll()).toBeTruthy();
  });

  it("should add word to list", () => {
    var expected = service.getAll().length;
    service.insert("New Word"); 
    var actual = service.getAll().length; 
    expect(actual).toBeGreaterThanOrEqual(expected);
  });
  
  it("should return  list", () => {
    expect(service.getAll().length).toBeGreaterThan(0);
  });

  it("should remove item from list", () => {
    var expected = service.getAll().length;
    service.remove("New Word");
    var actual = service.getAll().length;
    expect(actual).toBe(expected - 1);
  })
  

});
