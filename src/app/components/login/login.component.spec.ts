import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornarformulario invalido', () => {
    fixture.detectChanges();
    const email = component.forma.controls['correo'];
    email.setValue('jesus@gmail.com');
    expect( component.forma.invalid ).toBeTrue()
  });

  it('Debe de retornar formulario valido', () => {
    fixture.detectChanges();
    const email = component.forma.controls['correo'];
    const password =component.forma.controls['password'];
    email.setValue('jesus@gmail.com');
    password.setValue('*******');
    expect( component.forma.invalid ).toBeTrue();
  });

  it('Debe de actualizar datos de usuario', () =>{
    fixture.detectChanges();
    const email = component.forma.controls['correo'];
    const password =component.forma.controls['password'];
    email.setValue('jesus@gmail.com');
    password.setValue('*******');
    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', {});
    fixture.detectChanges();
    expect( component.isChecked ).toEqual({user: 1})
  })

});
