import { Component } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styles: [`
  .fill {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 30px;
  }
  .fill img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;

  }
  .dialogue{
    color: white;
  }
  #educationList {
    height: 100%;
    border-radius: 20px;

  }
  #educationList li {
    font-size: 1vh;
    color: white;
  }
  .bottomScrollBoxes {
  height: 100%;
  border-radius: 30px;
  padding: 2%;
}
.scrollHeight {
  height: 15em;
  overflow-y: scroll;
  margin-left: 1%;
}
.headerRow {
  background-color:lightgray;
  font-size: 5vh;
  color: Black;
  border-radius: 20px;
}

  .centeringContent {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  `]
})

export class educationComponent {

}
