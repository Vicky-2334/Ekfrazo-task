import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  createEnvironmentInjector,
} from "@angular/core";
import { SelectCustomEvent } from "@ionic/angular";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent<T> implements OnInit {
  @Input() options: T[] = [];
  @Input() trackBy!: Extract<keyof T, string>;
  @Input() showBy!: Extract<keyof T, string>;
  @Input() value?: string | number | null;
  @Input() placeholder?: string;

  @Output() onSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  trackByFn(index: number, option: T) {
    return option[this.trackBy];
  }

  handleOnSelect(ev: SelectCustomEvent) {
    this.onSelect.emit(ev.target.value);
  }
}
