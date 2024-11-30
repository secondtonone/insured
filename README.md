# Insured

This project is built using Vite and TypeScript. Below are the available scripts and environment variables for the project.

## Getting Started

1. Create `.env` file at the root of project

| Variable   | Example Value           | Description                                  |
| ---------- | ----------------------- | -------------------------------------------- |
| `TON_CENTER_API_CLIENT_KEY`  | `f2408569bec6bbfb4161e0780****************994ea3e8fee8fbf53e8a2f16`   | **Required**. The base URL for the API.                    |

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

| **Command**              | **Description**                            |
|--------------------------|--------------------------------------------|
| `npm run build`          | **Build the project for production**       |
| `npm run type-check`     | **Run type-checking**                      |
| `npm run lint`           | **Lint the code**                          |
| `npm run lint:fix`       | **Automatically fix linting issues**       |
| `npm run format`         | **Format the code**                        |

## Deployment
   Example for local, available on `http://localhost:3000`:

   ```bash
   TON_CENTER_API_CLIENT_KEY=f2408569bec6bbfb4161e0780****************994ea3e8fee8fbf53e8a2f16 docker compose up --build
   ```
