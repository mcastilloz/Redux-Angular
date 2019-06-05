export class TodoModel {
  public id: number;
  public msgtext: string;
  public completed: boolean;

  constructor(texto: string) {

    this.msgtext = texto.charAt(0).toLocaleUpperCase()
                  + texto.slice(1);
    this.completed = false;
    this.id = Math.random();
  }

}
