# Next.js Boilerplate with PostgreSQL, Minio & Docker

## 🚀 Description
This project is a complete Next.js boilerplate designed to accelerate the development of modern web applications. It includes:

- **Next.js** with **TypeScript** and **Tailwind CSS**
- **PostgreSQL** as a database with **Drizzle ORM**
- **Authentication** (Email/Password & OAuth)
- **Internationalization** (i18n)
- **A dashboard**
- **A component library**
- **Docker & Docker Compose** for easy service management

## 🏷 Technologies Used

- **Frontend & API Rest**: Next.js, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Adminer for administration
- **Image Server**: Minio
- **Deployment**: Docker & Docker Compose

## 📂 Project Structure

```
📂 saas-boilerplate/
├── 📂 next-app/     # Next.js application
│   ├── 📂 public/  # Static assets
│   ├── 📂 src/
│   │   ├── 📂 app/  # Next.js app directory
│   │   ├── 📂 components/  # UI components (atoms, molecules, organisms, templates)
│   │   │   ├── 📂 atoms/  # Atomic design pattern - smallest components, includes shadcn/ui
│   │   │   ├── 📂 molecules/  # Small combinations of atoms
│   │   │   ├── 📂 organisms/  # Larger components made of molecules
│   │   │   ├── 📂 templates/  # Page templates
│   │   ├── 📂 config/  # Configuration files (Drizzle ORM, i18n, Minio, etc.)
│   │   ├── 📂 hooks/  # Custom React hooks
│   │   ├── 📂 locales/  # i18n translations
│   │   ├── 📂 models/  # Database models (Drizzle ORM)
│   │   ├── 📂 services/  # Business logic and API services
│   │   ├── 📂 utils/  # Utility functions (authentication, validation, helpers)
│   │   ├── 📚 middleware.ts  # Middleware configuration (authentication, etc.)
├── 📄 docker-compose.yml # Docker configuration
└── 📄 README.md     # Project documentation
```

## 🛠 Installation & Usage

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
- **Minio interface**: `http://localhost:9001`
- **Minio API**: `http://localhost:9000`

### 3️⃣ Environment Variables

Create a `.env` file and add the necessary variables:

```
## DATABASE
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=mydatabase

## NEXT
GOOGLE_CLIENT_ID= // TO COMPLETE
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_CLIENT_SECRET= // TO COMPLETE
NEXTAUTH_SECRET= // TO COMPLETE

## MINIO
MINIO_ROOT_USER=admin
MINIO_ROOT_PASSWORD=password
```

## 🛠 Features

- [x] Secure authentication with Email/Password & OAuth
- [x] **Internationalization** with `next-international`
- [x] **Dashboard** with user management
- [x] **Component library** for a consistent UI (shadcn/ui)
- [x] **Drizzle ORM** for database management

## 🐛 Explanation of the Architecture

This boilerplate follows a **modular architecture**, ensuring scalability and maintainability:

1. **Separation of concerns**: 
   - UI components follow the **Atomic Design Pattern**, with components structured into `atoms`, `molecules`, `organisms`, and `templates`.
   - **Shadcn/UI** components are integrated directly in `atoms/` to ensure consistency and reusability.
   - API and business logic are handled in `services/`.
   - Database models are defined in `models/`.

2. **Scalable authentication**:
   - Uses OAuth and email/password authentication.
   - JWT tokens are managed in `utils/jwt.ts`.

3. **Internationalization (i18n)**:
   - Implemented with `next-international`, with translations stored in `locales/`.

4. **Database & ORM**:
   - **Drizzle ORM** for database interactions, configured in `config/drizzle.config.ts`.
   - Tables are defined in `models/`.

5. **File storage with Minio**:
   - Minio is used as an object storage service for file uploads, configured in `config/minio.config.ts`.

6. **Middleware & Utils**:
   - Custom middleware for authentication (`middleware.ts`).
   - Utility functions in `utils/` for hashing, validation, and actions.

## 🌟 Useful Commands

### Start services
```bash
docker-compose up -d

## or

make up
```

### Stop services
```bash
docker-compose down

## or

make down
```

### Commands help
```bash
make
```

