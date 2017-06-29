import {bindable} from "aurelia-framework";

export class App {
  constructor() {
  // changing this property definition to a @bindable throws and exception
  this.message = "This is some data that I'll pass to the child of the widget.";

  }
}
