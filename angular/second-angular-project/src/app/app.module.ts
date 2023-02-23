import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path:'hello',component:HelloComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'calculator',component:CalculatorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    CalculatorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
