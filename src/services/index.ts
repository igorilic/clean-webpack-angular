import { HTTP_PROVIDERS } from '@angular/http';
import { ComponentResolver } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';

import { AsyncComponentResolver } from './async-component-resolver';

export default [
  HTTP_PROVIDERS,
  {
    provide: ComponentResolver,
    useFactory: (compiler) => new AsyncComponentResolver(compiler),
    deps: [RuntimeCompiler]
  }
];
