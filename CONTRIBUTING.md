## Contributing

Thank you for your interest in contributing to this project. Your help in making this project better is much appreciated.

## Getting Started

Before you begin contributing, please read the [README](./README.md) file to understand the project and its goals. If you have any questions, feel free to ask in the Issues section.

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
     git clone https://github.com/nyomansunima/oobi.git
   ```
2. Install the dependencies by running this command in every apps incuding web and api

   ```bash
      # install using bun
      bun install

      # install using npm
      npm i

      # install using yarn
      yarn i

      # install using pnpm
      pnpm i
   ```

3. Start the web development server. The default runtime is bun
   ```bash
     cd apps/web && bun run dev
   ```
4. Start the api development server
   ```bash
     cd apps/api && bun run dev
   ```

## Issues and Pull Requests

If you find a bug or have a feature request, please create an issue in the issue tracker before starting work on it. This will ensure that the issue is not already being worked on by someone else, and will allow other contributors to provide feedback and suggestions.

If you want to contribute code, please fork the repository and submit a pull request. Make sure your pull request:

- Addresses an open issue.
- Follows the Code of Conduct of the project.
- Adheres to the project's Code Style.
- Includes a description of the changes made in the pull request.

## Testing

Please make sure your code passes all tests before submitting a pull request.To run tests in each apps, use the command `bun run test`.

## Security

If you find a security vulnerability in the project, please do not create an issue. Instead, contact the maintainers directly at [nyomansunima@gmail.com](mailto:nyomansunima@gmail.com) to report the issue.

## Code of Conduct

Please note that we have a Code of Conduct in place. We expect all contributors to follow it in all interactions with the project. Read more the [code of conduct](./CODE_OF_CONDUCT.md)
