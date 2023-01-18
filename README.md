# Gitmoji GitHub Action

A simple GitHub action that makes sure all commit messages are following the [gitmoji](https://gitmoji.dev/) specification.

Note that, typically, you would make this check on a pre-commit hook (for example, using something like [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)), but those can easily be skipped, hence this GitHub action.

### Usage

Latest version: `0.0.7`

```yml
name: 🔧 Gitmoji

on:
  pull_request:
    branches: [master]

jobs:
  build:
    name: Gitmoji
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: roninjin10/action-emoji-commits@0.0.1
```
