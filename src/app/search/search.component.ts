import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {

  @Output() sendNewList = new EventEmitter();
  handelSearch(event: any){
    const targetNames = event.target.value.toLowerCase();
    // console.log(targetNames);
    this.sendNewList.emit(targetNames);
  }

}
