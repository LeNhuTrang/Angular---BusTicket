import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GheComponent } from "./ghe/ghe.component";
import { DanhSachGheComponent } from "./danh-sach-ghe/danh-sach-ghe.component";

@NgModule({
  declarations: [GheComponent, DanhSachGheComponent],
  imports: [CommonModule],
  exports: [GheComponent, DanhSachGheComponent],
})
export class QuanTriGheModule {}
