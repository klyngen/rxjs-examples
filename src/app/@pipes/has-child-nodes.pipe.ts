import { Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";

@Pipe({
  name: "hasChildNodes",
})
export class HasChildNodesPipe implements PipeTransform {
  transform(value: ActivatedRoute): boolean {
    return value.children !== undefined && value.children.length > 0;
  }
}
