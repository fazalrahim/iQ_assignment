import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-tabular',
  templateUrl: './user-tabular.component.html',
  styleUrls: ['./user-tabular.component.scss']
})
export class UserTabularComponent implements OnInit, AfterViewInit {

  @Input() userObj: UserModel[] = [];
  displayedColumns = ['profilePic', 'name', 'designation', 'joiningDate'];
  dataSource !: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.userObj);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter($event: any) {
    let filterValue = $event.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
