# Bellanov L.L.C.

Code for the _Bellanov L.L.C._ organization.

## Dependencies

The project requires the following tools to be installed:

- [Python 3.14](https://www.python.org/downloads/release/python-3140/)
- [Node.js 24](https://nodejs.org/en/download/) (NVM is recommended for managing Node.js versions)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bellanov/bellanov-llc.git
cd bellanov-llc
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Development Mode

Start the development server with auto-reload:

```bash
# Company Website
npm run dev

# Components Library
npm run dev-components
```

Then open your browser and navigate to `http://localhost:3000`

### Production Mode

Start the server:

```bash
npm start
```

The server will be available at `http://localhost:3000`

## Running Tests

Run all tests with coverage:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Linting

Check code quality:

```bash
npm run lint
```

Format code:

```bash
npm run format
```
