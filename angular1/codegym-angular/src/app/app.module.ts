import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { AHelloComponent } from './a-hello/a-hello.component';
import { CClassComponent } from './c-class/c-class.component';
import { DEventComponent } from './d-event/d-event.component';
import { ETwoWayComponent } from './e-two-way/e-two-way.component';
import { CustomPipe } from './custom.pipe';
import { FPipesComponent } from './f-pipes/f-pipes.component';
import { MTemplateVariableComponent } from './m-template-variable/m-template-variable.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AHelloComponent,
    CClassComponent,
    DEventComponent,
    ETwoWayComponent,
    CustomPipe,
    FPipesComponent,
    MTemplateVariableComponent,
    FontSizeEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
