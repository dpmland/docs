## Steps to contribute

Before the contribution you need check the file structure on the
[Readme Source File](./src/README.md) and follow this steps

1. Make a Fork to this repository
2. Make a branch with the feature to add
3. Use the conventional commits guide
   [more information here](https://www.conventionalcommits.org/en/v1.0.0/)
4. Make a pull request with an explanation what you change or features
5. Review your pull request :shipit:
6. Merge the pull request or request changes
7. Done! :smiley:

## Requirements

- If you add a new file to the file structure ensure add to the tree on the
  [Readme Source File](./src/README.md) and add this con the header on the file:

```
// Copyright © 2022 Dpm Land. All Rights Reserved.
```

- Ensure check the lint and the format before the commit with this command:

```
deno task fmt
```

- Use underscores, not dashes in filenames example:

```
example_file.ts // GOOD
example-file.ts // BAD
```

- Inclusive code:

Please follow the guidelines for
[inclusive code](https://chromium.googlesource.com/chromium/src/+/master/styleguide/inclusive_code.md)

- For end any readme file you need add this at the end!

```markdown
---

Made with :heart: in :earth_americas:
```

And done thanks for contribute

## Format and lint!

For the formatting and lint you need run the **deno tasks** here are some
commands for make the development more easier.

```sh
deno task ## For list all tasks avaliable!

deno task fmt ## For format all files and check the lint!

deno task fmt:check ## For check the lint and formatting
```
