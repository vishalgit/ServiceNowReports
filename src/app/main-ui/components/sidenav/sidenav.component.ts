import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isHandset: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver){

  }
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe(
      (state:BreakpointState) => {
        if(state.matches){
          this.isHandset = true;
        }
        else{
          this.isHandset =false;
        }
      }
    );
  }

}
