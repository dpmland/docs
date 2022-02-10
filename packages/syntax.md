## How install packages with the dpm install tool

For install a package you need follow some rules:

- If you want the automaticall version added you need use the default host
  `https://deno.land/x`

- For install packages you can use:

```sh
## ONLY PACKAGE NAME

dpm install soxa corejs denomander draco dlog2

## The package name and the folder ignorated for the import map file

dpm install soxa/example corejs/example denomander/example dlog2/example draco/example

## The package name and the mod file ignorated for the import map file

dpm install draco/mod.ts

## The package version ( NOT RECOMMENDED FOR USE OLD VERSIONS )

dpm install draco@1.1.1
```

## Common errors

An example error can be this pass 3 arguments the syntax are only 2 packages

```sh
## ERROR

dpm install draco/types/mod.ts
```
