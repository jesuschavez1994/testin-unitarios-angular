import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  isChecked: any;
  checkHuman: Array<string> = []

  constructor(private dataService: DataService, private auth: AuthService) {
    this.forma = new FormGroup({
      correo:    new FormControl('' , [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required]),
      result:   new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.checkHuman = this.dataService.generateNumbers()
  }

  public Login(){
    this.isChecked = {user: 1}
    this.auth.login(this.forma.controls['correo'].value, this.forma.controls['password'].value).subscribe( resp =>{
      console.log(resp)
    })
  }

}
