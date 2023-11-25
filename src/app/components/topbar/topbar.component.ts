import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isAtTop: boolean = true;
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.getScrollStatus().subscribe((atTop: boolean) => {
      this.isAtTop = atTop;
      console.log(this.isAtTop);
    });
  }
}
