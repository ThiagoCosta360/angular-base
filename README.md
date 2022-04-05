# Features

[x] - Internacionalization
[] - Multiple Themes

# Angular topics I cover

[] - Components
[] - Services
[] - Pipes
[] - Directives
[] - Providers
[] - Guards
[] - Resolver
[] - Interceptor
[] - Decorators

# Things to learn

```- optional
  constructor(@Optional() config?: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }
```

```- SkipSelf
  constructor(@Optional() @SkipSelf() parentModule?: GreetingModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }
```

# Want to contribute with the project?

## How to add a new language?

Create a file on assets/i18n with as [lang].json
lang is the code as in ISO 639. https://pt.wikipedia.org/wiki/ISO_639
