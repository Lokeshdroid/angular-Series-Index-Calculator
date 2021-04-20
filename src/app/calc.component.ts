import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bmicalc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  compute() {
    var f = self.document.forms[0];
    let n = f.wt.value;
    let ans = 2,
      even = 7,
      odd = 1;
    for (let i = 1; i < n; i++) {
      if (i % 2 == 0) {
        ans += even;
        even += 4;
      } else {
        ans += odd;
        odd = odd + 4;
      }
    }
    f.res.value = ans;
    f.res.focus();
    return;
  }
}
