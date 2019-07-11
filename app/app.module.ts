import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {WelcomeComponent} from './app.welcome';
import {LoginComponent} from './app.login';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {RegisterComponent} from './app.register'

const routes:Routes=[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'show/:id/:pass',component:WelcomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
    
]
@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,WelcomeComponent,LoginComponent,RegisterComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }