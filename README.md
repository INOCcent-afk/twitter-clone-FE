### Getting Started

First, install dependancies

```
yarn install
```

Second, run the development server:

```
yarn run dev
```

## Other commands:

- testing

```
yarn test:W
```

- linting

```
yarn lint
```

- storybook

```
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Extensions

Make sure these extenstions are installed for better developer experience

- Prettier
- ESLint
- ES7 + React/Redux/React-Native
- Tailwind CSS IntelliSense

### Code Changes

Please create test on every thing you make! follow the formatting and linting.

whenver you create a UI please keep accesibility in mind and add it to story book for better documentation.

### Committing

I'm using husky to prevent bugs in production.
pre-committing will automatically run linting and test to check for errors.

CI/CD will run linting and test too for better protection.

the repo will not accept direct pushes to main create your branch and pull request to be reviewed.
