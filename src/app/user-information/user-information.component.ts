import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from '@../../src/app/api-call.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  columnNames: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiCallService: ApiCallService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.apiCallService.getData().subscribe((data: any) => {
      data.map((row: any) => {
        row['address'] = row['address']['street'] + ' ' + row['address']['suite'] + ' ' + row['address']['city'] + ' ' + row['address']['zipcode'];
        row['company'] = row['company']['name'];
      })
      Object.keys(data[0]).forEach((col: any) => {
        console.log(col);
        if (col !== 'id' && col !== 'website') {
          this.columnNames.push({
            id: col,
            value: col
          })
        }
      });
      this.displayedColumns = this.columnNames.map((x: any) => x.id);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    }, (error) => {
      console.log("Error", error)
    })
  }
  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

