Here you can found some recommendations or bugs currently known and working in
this!

# Recommendation in Windows with the EMOJIS

Well I found a bug with emojis in the CLI and tried to find a solution and found
this comment about this issue and what causes this issue.

```
There is an issue with Deno.stdout.write which doesn't handle unicode characters well. There is already an deno issue denoland/deno#6001.
But i found a workaourund here denoland/deno#6131 (comment).
You have to enable utf8 character encoding in windows than it should work.
```

_Source [Here](https://github.com/c4spar/deno-cliffy/issues/113)_

And the solution proposed is add this to the top of the `profile.ps1` file can
be accessibly with this command `notepad $PROFILE` on powershell!

```
[Console]::OutputEncoding = [Text.UTF8Encoding]::UTF8
```

---

Made with ♥ in Ecuador and the World
