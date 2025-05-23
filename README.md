

<p align="center">
  <h1 align="center">AI Platform</h1>
  <div align="center"><h3>Project Link: <a href="https://github.com/digital-ibraheem/ai-sass">GitHub</a></h3></div>
</p>

### Build a SaaS AI sass with Next.js 13, React, Tailwind, Prisma, Stripe.

![AI](docs/images/banner.png)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Start the app](#start-the-app)
- [How to setup the initial project](#how-to-setup-the-initial-project)
- [Contact](#contact)

This is a repository for Build a SaaS AI sass with Next.js 13, React, Tailwind, Prisma, Stripe.

### Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

<!-- HOW TO RUN -->

### Prerequisites

**Node version 18.x.x**
**Yarn version 1.22.x**

### Start the app

Certainly, if you're working on a Node.js project and you have a development script, such as `yarn dev`, that you typically use to run your application during development, you can include that step in your workflow as well. Here's the updated order of commands:

1. **Clone this repository**:

   ```sh
   git clone git@github.com:digital-ibraheem/ai-sass.git
   ```

2. **Environment Variables Setup**:
   To rename the `.env.example` file to `.env` and add your environment-specific configuration, you can use the following command in a Unix-like shell (such as Linux or macOS):

   ```bash
   mv .env.example .env
   ```

   This command renames the `.env.example` file to `.env`.

   After renaming the file, you can open the `.env` file using a text editor and add your environment-specific configuration variables and their values. For example:

   ```
   DATABASE_URL=your_database_url_here
   API_KEY=your_api_key_here
   SECRET_KEY=your_secret_key_here
   ```

   Replace `"your_database_url_here"`, `"your_api_key_here"`, and `"your_secret_key_here"` with your actual configuration values. The `.env` file is commonly used to store sensitive or environment-specific configuration variables for your application.

3. **Install packages**

   ```shell
   yarn install
   ```

4. **Prisma Setup**:

   - Generate Prisma Client Code:

     ```bash
     npx prisma generate
     ```

   - Push Database Changes:

     ```bash
     npx prisma db push
     ```

   - Launch Prisma Studio: `optional`

     ```bash
     npx prisma studio
     ```

     Your `Prisma` database is accessible locally at the following address: [http://localhost:5555](http://localhost:5555)

5. **Seed the Database**:

   ```bash
   node ./scripts/seed.ts
   ```

6. **Run Your Application in Development Mode**:

   ```bash
   yarn dev
   ```

   Your `project` is accessible locally at the following address: [http://localhost:3000](http://localhost:3000)

### How to setup the initial project

1.  **Install Next JS**

    ```sh
    yarn create next-app --typescript --tailwind --eslint
    ```

2.  **Engine Locking configuration `optional`**

    - Create `.npmrc` file and add below the code

      ```sh
      engine-strict=true
      ```

    - Create `.nvmrc` file and add below the code

      ```sh
      lts/fermium
      ```

    - Add this configuration to your project `package.json`

      ```json
      "engines": {
         "node": ">=18.0.0",
         "yarn": ">=1.22.0",
         "npm": "please-use-yarn"
       }
      ```

3.  **Visual Studio Settings configuration `optional`**

    - ##### Get VSCode [Settings.json](https://github.com/rsshonjoydas/docs/blob/main/docs/vscode.md) file

4.  **Airbnb style guide setup**

    - ##### Get [eslintrc.json](https://github.com/rsshonjoydas/docs/blob/main/docs/airbnb-style-guide.md) file

5.  **Git Hooks for Husky**

    - ##### [How to use husky](https://github.com/rsshonjoydas/docs/blob/main/docs/husky.md)

6.  **Shadcn Ui Setup**
    - Initialize Shadcn ui
      ```bash
      npx shadcn-ui@latest init
      ```
    - How to use [Shadcn ui](https://ui.shadcn.com/) `optional`
      ```bash
      npx shadcn-ui@latest add button
      ```
    - Overwrite existing ui components `optional`
      ```bash
      npx shadcn-ui@latest add button 
