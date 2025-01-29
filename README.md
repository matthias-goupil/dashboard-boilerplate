# Next.js Boilerplate with PostgreSQL, Nginx & Docker

## 🚀 Description
This project is a complete Next.js boilerplate designed to accelerate the development of modern web applications. It includes:

- **Next.js** with **TypeScript** and **Tailwind CSS**
- **PostgreSQL** as a database with **Drizzle ORM**
- **Authentication** (Email/Password & OAuth)
- **Internationalization** (i18n)
- **A dashboard**
- **A component library**
- **Docker & Docker Compose** for easy service management

## 🏗 Technologies Used

- **Frontend & API Rest**: Next.js, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Adminer for administration
- **Deployment**: Docker & Docker Compose

## 📂 Project Structure

```
📂 my-project/
├── 📂 next-app/     # Next.js application
├── 📜 docker-compose.yml # Docker configuration
└── 📜 README.md     # Project documentation
```

## 🔧 Installation & Usage

### 1️⃣ Prerequisites
Make sure you have installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ Start the Project

Clone the repository and start the services:

```bash
git clone https://github.com/your-repo/my-project.git
cd my-project
docker-compose up --build
```

Your application will be accessible at:
- **Frontend**: `http://localhost:3000`
- **Rest API**: `http://localhost:3000/api`
- **Postgres Admin**: `http://localhost:8080`

### 3️⃣ Environment Variables

Create a `.env` file and add the necessary variables:

```
## DATABASE

POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=mydatabase
```

## 🛠 Features

- [x] Secure authentication with **NextAuth.js** (Email/Password & OAuth)
- [x] **Internationalization** with `next-i18next`
- [x] **Dashboard** with user management
- [x] **Component library** for a consistent UI
- [x] **Drizzle ORM** for database management

## 📜 Useful Commands

### Start services
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```