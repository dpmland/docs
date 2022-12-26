## Uninstall dependencies with DPM

You can use this flags on the: **uninstall** command and the **clean** alias

| Flags           | Description                             |
| --------------- | --------------------------------------- |
| -A, --all [all] | Remove all dependencies from the files! |
| -h, --help      | The CLI help message                    |

DPM doesn't delete any libraries from your computer, it just deletes the
_dpm_imports.json_ file!

For uninstall all dependencies from the _dpm_imports.json_ you need run:

```
dpm uninstall -A
```

For uninstall only one specific dependency you need run:

```
dpm uninstall draco dlog2
```

## Bugs report

For report bugs or errors in the documentation make a issue on the docs repo or
in the dpm repo on the [dpmland org](https://github.com/dpmland/) and the:

- _[DPM REPO](https://github.com/dpmland/dpm)_: For bugs in the CLI
- _[DOCS REPO](https://github.com/dpmland/docs)_: For bugs in the documentation
- _[WEB REPO](https://github.com/dpmland/web)_: For bugs in the website

---

Made with ♥ in Ecuador and the World
