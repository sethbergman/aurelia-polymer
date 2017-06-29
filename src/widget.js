// @import '../bower_components/font-awesome/css/font-awesome.css.map';
//
// @import "./widget.css";
import {bindable} from "aurelia-framework";

export class WidgetCustomElement {
	@bindable title;
	@bindable icon;
	@bindable show;

	bind(bindingContext) {
	  this.$parent = bindingContext;
	}
}
