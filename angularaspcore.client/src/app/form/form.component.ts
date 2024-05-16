import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent
{
  @Input() mstrFormName: string | null = null;
  @Input() mstrRecordId: string | null = null;

  undocked: boolean = false;

  /**
   *
   */
  constructor(private route: ActivatedRoute, private router: Router)
  {
    this.undocked = window.location.href.includes("undocked=true");
  }

  ngOnInit()
  {
    this.mstrFormName = this.route.snapshot.paramMap.get('form_name');
    this.mstrRecordId = this.route.snapshot.paramMap.get('id');
  }

  undock()
  {
    const currentUrl = window.location.href + "?undocked=true";
    console.log(currentUrl);

    open(currentUrl, "Undocked Window", "popup");
    this.router.navigate(['/table']);
  }
}
