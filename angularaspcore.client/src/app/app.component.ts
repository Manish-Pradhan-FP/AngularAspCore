import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';

interface WeatherForecast
{
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  public forecasts: WeatherForecast[] = [];
  undocked = false;
  title = 'Portal App';
  currentRoute = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router)
  {
    this.undocked = window.location.href.includes("undocked=true");

    router.events.subscribe((event: Event) =>
    {
      if (event instanceof NavigationEnd) 
      {
        if (event.url.includes('/form'))
        {
          this.currentRoute = "form";
        }
        else if (event.url.includes('/table'))
        {
          this.currentRoute = "table";
        }
        else
        {
          this.currentRoute = "";
        }
      }
    });
  }

  ngOnInit()
  {
    this.getForecasts();
  }

  getForecasts()
  {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) =>
      {
        this.forecasts = result;
      },
      (error) =>
      {
        console.error(error);
      }
    );
  }
}
