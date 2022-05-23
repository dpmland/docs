To use the modules installed in the `dpm_imports.json` file, you need to use as
Node:

```
import { serve } from 'http/server.ts';
serve((req) => new Response('Hello World\n'));
```

> To configure DPM to work with code editors, you need to download the plugin
> for your editor and fill the `deno.config` field with `./deno.json` and the
> `deno.importMap` field with `./dpm_imports .json` Add automatic support for
> editors probably

---

Made with ♥ in Ecuador and the World
