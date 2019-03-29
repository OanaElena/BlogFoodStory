import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BlogfoodstoryModule } from './blogfoodstory/blogfoodstory.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BlogfoodstoryModule)
  .catch(err => console.log(err));

