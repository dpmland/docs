## The install command!

> You can use this flags on the: **install** command and the **add** alias

| Flags              | Description                                       |
| ------------------ | ------------------------------------------------- |
| --host [host]      | Change from deno.land/x to other                  |
| -s, --std [std...] | Add a dependency from the std library             |
| -e, --esm [esm...] | Add a dependency from the https://esm.sh register |
| -c, --custom       | Custom installation for an dependency!            |
| -h, --help         | The CLI help message                              |

DPM does not download files on the computer, only write the correct url on the
_dpm_imports.json_ file and make a experience of development like **NodeJS** and
**NPM or Yarn**

For install dependencies from the [deno.land/x](https://deno.land/x/) register
you need only write:

```
dpm install draco dlog2 json-colorize
```

For install dependencies from the [deno std](https://deno.land/std) register you
need only use this!

```
dpm install --std flag async http path
## You need put the name of the library and the flag -s or --std
```

For install dependencies from other host you need run:

```
dpm install example_dep --host nest.land
```

For install from the [esm.sh](https://esm.sh) register you need only use this!

```
dpm install -e react preact vue swr
## You need put the name of the library and the flag -e or --esm
```

For install from a custom installation you can use the asistant with this
command:

```
dpm install -c
## Or with the custom flag --custom
```

## Bugs report

For report bugs or errors in the documentation make a issue on the docs repo or
in the dpm repo on the [dpmland org](https://github.com/dpmland/) and the:

- _[DPM REPO](https://github.com/dpmland/dpm)_: For bugs in the CLI
- _[DOCS REPO](https://github.com/dpmland/docs)_: For bugs in the documentation
- _[WEB REPO](https://github.com/dpmland/web)_: For bugs in the website

---

Made with ♥ in Ecuador and the World
