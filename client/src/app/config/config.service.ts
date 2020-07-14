import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

onfigUrl = 'assets/config.json';

getConfig() {
  return this.http.get(this.configUrl);
}

config: Config;

showConfig() {
  this.configService.getConfig()
    // clone the data object, using its known Config shape
    .subscribe((data: Config) => this.config = { ...data });
}

getConfig() {
  // now returns an Observable of Config
  return this.http.get<Config>(this.configUrl);
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}