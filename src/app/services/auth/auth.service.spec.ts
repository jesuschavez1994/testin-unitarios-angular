import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of, throwError  } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AuthService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe de retornar un objeto usuario', (done: DoneFn) => {

    const mock = {
      correo: 'jesus@gmail.com',
      password: '12345678'
    }

    const mockResultLogin = {
      "usuario": {
        "correo": "jesus@gamil.com",
        "estado": true,
        "google": false,
        "nombre": "Jesus",
        "role": "USER_ROLE",
        "uid": "6199845b84162b43e8cef313"
      }
    }

    const {correo, password } = mock

    httpClientSpy.post.and.returnValue(of(mockResultLogin))

    service.login(correo, password).subscribe( result => {
      expect(result).toEqual(mockResultLogin);
      done();
    })

  });

  it('debe de retornar status 400, credenciales no correctas',  (done: DoneFn) =>{

    const mock = {
      correo: 'jesus@gmail.com',
      password: ''
    }

    //emulamos el error status 400

    const error400 = new HttpErrorResponse({
      error: "Usuario | Password no son correctos - password",
      status: 400, statusText: 'Bad Request'
    });

    httpClientSpy.post.and.returnValue(throwError(error400)); 

    const {correo, password } = mock

    service.login(correo, password).subscribe( result => {
    }, error =>{
      expect(error.status).toEqual(400);
      done();
    })
  })

});
