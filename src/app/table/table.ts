import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-table",
  templateUrl: "./table.html",
  styleUrl: "./table.css",
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class TableComponent implements OnChanges {
  @Input() data: any[] = [];
  displayedColumns: string[] = [];

  constructor() {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges ejecutado");

  if (changes['data']) {
    this.actualizarColumnas();
  }
}

  actualizarColumnas(): void {
    if ( this.data && this.data.length > 0) {
      
        Object.keys(this.data[0]).forEach((key) => {
      this.displayedColumns.push(key);
    });

     
    }
  }


}
