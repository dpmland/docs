## The docs command!

> You can use this flags on the: **docs** command and the **doc** alias

| Flags                     | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| -d, --download [download] | Update the deno.json file for the new tasks of the dpm.json file! |
| -u, --update [update]     | Update the documentation and clean the old documentation!         |
| -o, --online [docs]       | Open the online documentation if you want a complete experience   |
| -h, --help                | The CLI help message                                              |

The main difference between the `-d` and `-u` flag is that the download or `-d`
option only downloads the documentation assuming the download directory is empty
and instead the update or `-u` function checks if the directory is empty and if
it is not, delete it and download the new documentation.

---

Made with ♥ in Ecuador and the World
