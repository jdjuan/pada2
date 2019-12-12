import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FullCardComponent } from "./full-card/full-card.component";
import { LogoComponent } from "./logo/logo.component";

@NgModule({
  declarations: [LogoComponent, FullCardComponent],
  exports: [LogoComponent, FullCardComponent],
  imports: [CommonModule]
})
export class SharedModule {}
