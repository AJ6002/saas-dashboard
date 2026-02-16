# 🚀 SaaS Dashboard (Next.js + NextAuth + Prisma)

A full-stack SaaS dashboard built as a frontend shortlisting project.

This app demonstrates secure authentication, protected routes, dashboard UI patterns, and user management — similar to real SaaS products.

---

## ✨ Features

### 🔐 Authentication
- Credential login (email & password)
- Password hashing using bcrypt
- JWT session authentication (NextAuth)
- Protected dashboard routes
- Logout functionality

### 🧭 Dashboard Layout
- Persistent sidebar navigation
- Active route highlighting
- Logged-in user email display
- Responsive SaaS layout

### 👥 Users Management
- User list UI
- Click → user detail modal
- Clean card layout

### ⚙️ Settings
- Update display name
- Local persistence
- Success feedback UI

### 🎨 Theme System
- Dark / Light mode toggle
- Theme preference saved in localStorage
- Tailwind CSS v4 dark mode

---

## 🧱 Tech Stack

**Frontend**
- Next.js 16 (App Router)
- React
- Tailwind CSS v4

**Auth & Backend**
- NextAuth.js
- Prisma ORM
- SQLite (local DB)
- bcrypt password hashing

---

## 📁 Project Structure

app/
api/auth/[...nextauth]/route.ts → authentication route
dashboard/
page.tsx → dashboard overview
users/page.tsx → users UI
settings/page.tsx → settings
login/page.tsx → login page
signup/page.tsx → signup page

components/
Sidebar.tsx
UserModal.tsx
ThemeToggle.tsx
Providers.tsx

lib/
prisma.ts → Prisma client

prisma/
schema.prisma


---

## ⚙️ Requirements

Make sure you have installed:

- Node.js **18+**
- npm or yarn

Check version:
node -v

## 🚀 Setup & Run Locally
1️⃣ Clone repository
git clone https://github.com/YOUR_USERNAME/saas-dashboard.git
cd saas-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create .env file in root:

DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET=supersecretkey123
NEXTAUTH_URL=http://localhost:3000

4️⃣ Setup database
npx prisma migrate dev

5️⃣ Run development server
npm run dev

🌐 Open in Browser
http://localhost:3000

## 🧪 Test Flow
Signup

Create a new account.

Login

Sign in using created credentials.

Dashboard

view metrics

navigate sidebar

Users

click user → modal opens

Settings

update display name

save changes

Theme

Toggle dark/light mode.

##🎯 Why This Project Matters

This project demonstrates:

real authentication flow

secure password handling

protected routing

scalable layout architecture

modern SaaS UI patterns

state management & UX thinking

##🚀 Future Improvements

API-based user data

charts & analytics

role-based access control

email verification

deployment & CI/CD

