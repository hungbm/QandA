import { Component, OnInit } from 'angular2/core';
import { UsersService } from '../../services/users.service';
import { NgForm,FormGroup,Validators,FormsModule} from '@angular/forms';
import { User } from '../../static_type/user.model';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//import {Control,Validators} form 'angular2/common';
@Component({

    selector: 'signpage',
    templateUrl: 'app/forms/signpage/signpage.component.html',
    providers: [UsersService],
    styleUrls :['assets/stylesheets/metro-bootstrap.css','assets/stylesheets/font-awesome.css']

})

export class SignPageComponent implements OnInit {
    constructor(private _userpageService: UsersService, public http: Http) {

    }
    
    formUp: FormGroup;
    formIn: FormGroup;
    ngOnInit(){
        this.formUp = new FormGroup ({
            usernameUp: new FormControl(null,Validators.required),
            passwordUp: new FormControl(null,Validators.required),
            email: new FormControl(null,Validators.required)
        });
         this.formIn = new FormGroup ({
            usernameUp: new FormControl(null,Validators.required),
            passwordUp: new FormControl(null,Validators.required)
        });
    }
    
    // formUp = new ControlGroup({
    //     usernameUp: new Control('',Validators.required),
    //     passwordUp: new Control('',Validators.required),
    //     email: new Control('',Validators.required)
    // });
    
    //SignIn
    signIn(){
        //console.log(form.value);
    }
   //SignUp
   signUp(){
        console.log(this.formUp.value);
    }
}