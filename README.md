# git-coppy

`git-coppy` is a simple command-line tool that allows you to copy a Git repository to your local machine without including the Git history and `.git` folder.

This is useful when you want just the files from a repository without the version control metadata, basically you only want the files of the repo without the git stuff.

## Features

- Clones a Git repository without its history.
- Allows you to specify a target directory for the copied files.
- Easy to use with a straightforward command syntax.
- Acts as a git subcommand so can just replace `git clone` and do `git copy` instead!

## Installation

You can install `git-coppy` globally using npm by running the following command:

```bash
npm install -g git-coppy
```

## Usage

Once installed, you can use git-copy from anywhere in your terminal. The syntax is as follows:

```bash
git copy <repo-link> [target-directory]
```
### Parameters

- repo-link: The URL of the Git repository you want to copy (e.g., https://github.com/user/repo.git).
- target-directory: (Optional) The local directory where you want the files to be copied. If not specified, the files will be copied to the current directory.

### Example

To copy a repository without its Git history, run:

```bash
git copy "https://github.com/user/your-repo.git" your-directory
```

This command will clone the repository into a folder named `your-directory` in your current directory without any git stuff attached to it.

## Requirements

- Node.js - JavaScript runtime.
- npm - Package manager for JavaScript.
- git - Version Control.

## Contributing

Contributions are welcome, If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request.

### To Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
