# Concert Compass

Concert Compass is an app for discovering and purchasing concert tickets, and connecting with others attending the same event.

--- 
## Monorepo Overview

This monorepo hosts all the applications and packages for **Concert Compass**, designed with scalability, maintainability, and ease of collaboration in mind.

## Apps and Packages

#### **Apps**

- **`web`**: A [Next.js](https://nextjs.org/) app for the web platform.
- **`mobile`**: An [Expo](https://expo.dev/) app for mobile devices (iOS and Android).
- **`api`**: An [Express.js](https://expressjs.com/) app for the backend API.

#### **Packages**

- **`@repo/eslint-config`**: Shared ESLint configurations, including support for `eslint-config-next` and `eslint-config-prettier`.
- **`@repo/typescript-config`**: Shared TypeScript configurations (`tsconfig.json`) used across all apps and packages.

---

## Tech Stack

### **Frontend**

- **Next.js**: For the web app.
- **Expo**: For the mobile app.
- **React**: Core library for UI development.
- **TypeScript**: Strict type checking for all apps and packages.

### **Backend**

- **Express.js**: Lightweight and flexible backend framework.
- **Prisma**: ORM for PostgreSQL database interactions.
- **PostgreSQL**: Reliable relational database.

### **Tooling**

- **Turborepo**: Efficient monorepo management.
- **Docker**: Optional containerization for development and deployment.
- **ESLint & Prettier**: Linting and formatting.

---

## **Prerequisites**

- **Node.js**: >=18
- **Yarn**: >=1.22
- **PostgreSQL**: Ensure a local or Dockerized PostgreSQL instance is running.

yarn install
```
3. Start all apps
```bash
yarn dev
```
## Folder Structure
```bash
root/
├── apps/
│   ├── web/    # Next.js web app
│   ├── mobile/ # Expo mobile app
│   └── api/    # Express.js backend
├── packages/
│   ├── eslint-config/    # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
├── README.md             # Project documentation
|── etc. (config files)
```

## Branching Strategy
We use a two-branch strategy for managing the project:

`main`: The production-ready branch. This contains stable code that is deployed to production.

`dev`: The development branch. This is where all new features and bug fixes are merged after testing.

## How to Contribute

1. **Fork the Repository:** Create your own copy of the repo.

2. **Clone the Fork:** Clone your forked repository to your local machine:
```bash
    git clone https://github.com/your-username/concert-compass.git
    cd concert-compass
```
3. **Create a Feature Branch:** Work off the dev branch:
```bash
    git checkout -b feature

```
4.  **Make Your Changes:** Ensure your code adheres to the linting and formatting rules.

5. **Commit Your Changes:** Write clear and descriptive commit messages:
```bash
    git commit -m "Add your feature description"
```
6. **Push Your Branch:** Push your feature branch to your forked repository:
```bash
git push origin feature/your-feature-name
```
7. **Open a Pull Request:** Submit your changes against the dev branch.

8. **Address Feedback:** Make any requested changes during the review process.

