import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PadaComponent } from "./pada/pada.component";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PadaComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
