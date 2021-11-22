import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Revisar generacion de numeros', () => {
    const [number1, number2] = service.generateNumbers();
    const suma = number1 + number2;
    expect( typeof suma).toBe('string')
  });

  it('Revisar operacion matematica', () =>{
    const numberA = 5;
    const numberB = 4;
    const check = service.checkOperation(numberA, numberB, 9);
    expect(check).toBeTrue();
  })

});
