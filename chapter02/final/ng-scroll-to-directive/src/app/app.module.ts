import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToDirective } from './directives/scroll-to.directive';

@NgModule({
    declarations: [
        AppComponent,
        ScrollToDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [
        ScrollToDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
