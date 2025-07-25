# 🌟 Skill Harbor – Career Guidance & Skill Development Platform

Skill Harbor is a modern web platform that empowers individuals to **build**, **showcase**, and **grow** their skills with confidence. Designed with a sleek UI and packed with powerful features, it's your one-stop solution for career advancement.

---

## 🚀 Live Deployment

🔗 [Skill Harbor](https://skill-harbor.vercel.app)

---

## 📸 Screenshots

> *(Replace these placeholders with actual screenshots)*

| Sign In / Sign Up | Resume Builder | Dashboard |
|-------------------|----------------|-----------|
| ![signin](public/screenshots/signin.png) | ![resume](public/screenshots/resume.png) | ![dashboard](public/screenshots/dashboard.png) |

---

## 🧠 Features

- 🔐 **Secure Authentication** via Clerk
- 🧾 **AI-Powered Resume Builder** for quick and professional CVs
- 💼 **Skill Showcase Dashboard** with editable profile and achievements
- 📈 **Interactive Charts** to visualize growth
- 🌗 **Light & Dark Mode** support
- 📱 **Fully Responsive UI** built with Tailwind CSS
- 🤖 **AI Integration** via Google Gemini API

---

## 🛠️ Tech Stack

| Category        | Technologies Used                                      |
|-----------------|--------------------------------------------------------|
| **Frontend**    | Next.js (App Router + Turbopack), Tailwind CSS         |
| **Backend**     | Prisma ORM, PostgreSQL (via Neon)                      |
| **Auth**        | Clerk                                                  |
| **Styling/UI**  | Tailwind CSS, Radix UI                                 |
| **Forms**       | React Hook Form + Zod                                  |
| **Charts**      | Recharts                                               |
| **AI Services** | Google Generative AI (Gemini)                          |
| **PDF Export**  | (Optional) `html2pdf.js` / `@react-pdf/renderer`       |

---

## 🧪 Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/saurav-nit-srinagar/Skill_Harbor.git

# 2. Navigate to the project directory
cd Skill_Harbor

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Then open .env.local and add your API keys (Clerk, Gemini, DB URL, etc.)

# 5. Run the development server
npm run dev
