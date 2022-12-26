# Description

Well is very very simple make a project with DPM help and for this example can
make a basic http server with the DPM Help.

## Steps

### First Step

1. For start the DPM files you can run this:

```sh
# Here exists maaaaaany ways but here explain the ways very simple
# -A or --all -> Write all files what support DPM printing the content with  ** many colors out :) **
# -y or --yes -> Write only the DPM File, DPM Imports and the Deno file only basic setup
# -M or --minimalist -> Write all files what support DPM but without print the content ** no colors out :( **
# We start only with the necessary files..
dpm init -y
```

### Second Step

2. After this is necessary install the dependencies for make 2 servers with
   third party dependencies and with the std dependencies

```sh
# For the third party server we are going to use oak for install this you need run:
dpm install oak # Done!
# For the std dependencies only need the http module and for this you need only run:
dpm install --std http # Don't forget the --std flag
```

### Third Step

3. Done the setup for the dependencies well this repository maybe need a task
   for start this

```jsonc
// Well in our dpm.json we need add this...
{
  "$schema": "https://dpmland.deno.dev/schema",
  "name": "dpm-tutorial",
  "version": "0.1.0",
  "description": "A example dpm package",
  "author": "A cool coder human",
  "license": "ISC",
  "main": "mod.ts",
  "scripts": {
    "test": "deno test -A --unstable",
    "fmt": "deno fmt -c deno.json",
    "lint": "deno lint -c deno.json",
    "fmt:check": "deno fmt -c deno.json --check && deno lint -c deno.json",
    // The start scripts for the oak and http files
    "start:oak": "deno run -A oak.ts",
    "start:http": "deno run -A http.ts"
  },
  "dependencies": {
    "oak/": "v10.6.0",
    "http/": "0.152.0"
  }
}
```

After this is necessary run the update command for the tasks:

```sh
# With this command you can merge the dpm.json and deno.json tasks in one.
dpm task -u
```

### Fourth Step

4. How can make the editor works with the module completions?

Well now your editor not works with completions for DPM and if you add the code
in the next step you see many errors in your editor but this is easy to solve.

```sh
# Many editors are supported with the auto config generator with this command
dpm init -f editor
# If your editor is not found you can run
dpm init -f editor-cfg
# This is the content of the file you only need copy the content to the deno-lsp config in your editor :)
```

### Fifth step

5. Well with this need the code for start this servers:

- The Oak Code.

```ts
// oak.ts file
import { Application } from '"oak/mod.ts';
const app = new Application();
app.use((ctx) => {
  ctx.response.body = 'Hello DPM!';
});
await app.listen({ port: 8000 });
```

With this the server are ready to run you only need run `deno task start:oak`
and done the setup with DPM is very simple and fast :smiley:

- The Http Code.

```ts
import { serve } from 'http/server.ts';
serve((_req) => new Response('Hello DPM!'), { port: 8000 });
```

With this the server are ready to run you only need run `deno task start:http`
and done the setup with DPM is very simple and fast :smiley:

## Bugs report

For report bugs or errors in the documentation make a issue on the docs repo or
in the dpm repo on the [dpmland org](https://github.com/dpmland/) and the:

- _[DPM REPO](https://github.com/dpmland/dpm)_: For bugs in the CLI
- _[DOCS REPO](https://github.com/dpmland/docs)_: For bugs in the documentation
- _[WEB REPO](https://github.com/dpmland/web)_: For bugs in the website

---

Made with ♥ in Ecuador and the World
