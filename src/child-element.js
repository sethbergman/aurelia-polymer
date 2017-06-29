import {bindable} from "aurelia-framework";

export class ChildElementCustomElement {
	bind(bindingContext) {
	   this.$parent = bindingContext;
	}
  @bindable text;

}
