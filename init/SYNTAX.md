# The syntax of the Files in the init command!

DPM _Deno Package Manager_ use many types of files but the main formats are
`json` and `markdown` the files are:

- `dpm.json`
- `dpm_imports.json`
- `deno.json`
- `eggs.json`
- `README.md`

## The `dpm.json` file

This file is like `package.json` here you can found the dependencies, scripts
and the information about the package for the other files.

> This file is necessary for all others files if show an error need a file or
> something like that you need check if this file exists :)

**Syntax of the files**

Well this file is very simple and have a json schema for valid the keys but here
you have a very easy explanation what is every key of the json

```jsonc
// This is the amazing DPM.json file example
{
  // This is the JSON schema you can help with this schema enabling the jsonls completion
  "$schema": "https://raw.githubusercontent.com/dpmland/dpm/dev/schemas/dpm.json",
  // This is the name of the App is necessary for the eggs.json file and the README default the folder name
  "name": "docs",
  // This is the version of the App is necessary for the eggs.json file and the README
  "version": "0.1.0",
  // This is the description of the App is necessary for the eggs.json file and the README
  "description": "A example dpm package",
  // This is the description of the App is necessary for the eggs.json file and the README
  "author": "A cool coder human",
  // This is the license of the App is necessary for the eggs.json file and the README
  "license": "ISC",
  // This is the entry point of the App is necessary for the eggs.json file and the README
  "main": "mod.ts",
  // This is the scripts of the app like the npm scripts but here use the deno tasks
  "scripts": {
    // The build_in key is the default commands integrated with the deno tasks by default
    "build_in": {
      "test": "deno test -A --unstable",
      "fmt": "deno fmt -c deno.json",
      "lint": "deno lint -c deno.json"
    }
    // Here you can add other scripts and for update run dpm task -u or add with the dpm task -n
  },
  "dependencies": {
    // Here add automatically the dependencies with the dpm install command and import this dependencies to the dpm_imports.json file
  }
}
```

## The `dpm_imports.json` file

This file work like the `node_modules` folder but here size of the file is not
major the universe size :)

Well how use this you need for work the completion with the editor add:

```json
{
  "deno.config": "./deno.json",
  "deno.importMap": "./dpm_imports.json"
}
```

And you can import your module like node:

```ts
import { serve } from 'http/server.ts';

serve((req) => new Response('Hello World\n'));
```

## The `deno.json` file

This is the config of Deno in the current project here you can set the
formatting settings and the linting settings more information
[here](https://deno.land/manual/getting_started/configuration_file)

## The `eggs.json` file

With this file you can publish the library or the module in the
[Nest Land Register](https://nest.land) this works with the `eggs` cli can be
installed with the `dpm tools install` command you can check more information
about the **eggs cli** [here](https://docs.nest.land/eggs/publishing-a-module)

## The `README.md` file

Well this is a readme generated by DPM and is necessary the `dpm.json` file.

---

Made with ♥ in Ecuador and the World
