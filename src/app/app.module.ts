import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyDemoComponent } from './dependency-demo/dependency-demo.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ObservableComponent } from './observable/observable.component';
import { CustomStructuralDirective } from './custom-structural.directive';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
    AppComponent,
    DependencyDemoComponent,
    PipesComponent,
    CustomPipesPipe,
    DirectivesComponent,
    CustomDirectiveDirective,
    ObservableComponent,
    CustomStructuralDirective,
    FormComponent,
    LoginComponent,
    SignupComponent,
    ParentComponent,
    ChildComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
