import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {

  @Output() emitStatus = new EventEmitter();

  @Input() itemGhe!: any;
  constructor() {}


  ngOnInit(): void {}
}


