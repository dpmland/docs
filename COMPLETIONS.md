## The completions command!

> You can use this arguments on the: **completions** command

| Arguments | Description                          |
| --------- | ------------------------------------ |
| bash      | Generate shell completions for bash. |
| fish      | Generate shell completions for fish. |
| zsh       | Generate shell completions for zsh.  |

> You can use this flags on the: **completions** command

| Flags  | Description          |
| ------ | -------------------- |
| --help | The CLI Help Message |

To enable the shell completions follow the steps bellow:

### Bash

To enable bash completions for this program add following line to your
`~/.bashrc`:

```
source <(dpm completions bash)
```

## Fish

To enable fish completions for this program add following line to your
`~/.config/fish/config.fish`:

```
source (dpm completions fish | psub)
```

## Zsh

To enable zsh completions for this program add following line to your
`~/.zshrc`:

```
source <(dpm completions zsh)
```

---

Made with ♥ in Ecuador and the World
