## The init Command

> You can use this flags on the: **init** command and the **create** alias

| Flags             | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| -A, --all [all]   | Write all necessary files                                              |
| -y, --yes [yes]   | Write only the dpm file and the imports not more! The necessary files! |
| -f, --file [file] | Only the file to create!                                               |
| -h, --help        | The CLI help message                                                   |

For start a Deno project with all files you only need make this!

```
# Start a new folder!
mkdir my_project && cd my_project
# Start a all fully featured Dpm Project!
dpm init -A
# Answer the questions and Done!
```

If you need start only the _dpm_imports.json_ file and the _dpm.json_ file
without questions you need only run:

```
# Start a new folder!
mkdir my_project && cd my_project
# Start only necessary files project
dpm init -y
```

If you want restart or write only one file you need run

```
# Start a new folder!
mkdir my_project && cd my_project
# Start only one file!
dpm init -f readme
## Note:
## Check the files avaliable on dpm docs init.actions
## FOR START A FILE LIKE: readme, deno-config or eggs
## You need start the dpm.json file!
```

---

Made with ♥ in Ecuador and the World
