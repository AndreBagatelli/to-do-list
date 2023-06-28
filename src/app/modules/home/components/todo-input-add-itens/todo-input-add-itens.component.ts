import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim();  //trim remove todos os espaços do input (inicio e final da frase)

    if(this.addItemTaskList){  //validação para não adicionar nada a lista quando o input estiver vazio
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }

  }

}
