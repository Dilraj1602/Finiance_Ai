
# FinGenius AI: Full Stack AI Finance Platform

## 📜 Project Overview
FinGenius AI is a comprehensive full-stack web application designed to manage financial tasks using advanced AI. It integrates cutting-edge technologies such as Next.js, Supabase, TailwindCSS, Prisma, Inngest, ArcJet, and Shadcn UI to provide a seamless user experience in the finance sector.

This platform provides AI-powered features to streamline financial analysis, budgeting, forecasting, and more.

live-https://fingenius-ai-psi.vercel.app/

demo-https://drive.google.com/file/d/1QR__rO9gobUmENyCZlSezsW0nwJ2am7X/view?usp=drive_link

## 🔧 Technologies Used

### Frontend:
- **Next.js** – React framework for building fast, server-side rendered web applications.
- **TailwindCSS** – Utility-first CSS framework for rapid UI development.
- **Shadcn UI** – UI component library for creating beautiful and responsive components.

### Backend:
- **Supabase** – Open-source Firebase alternative for managing database and authentication.
- **Prisma** – Next-generation ORM for Node.js and TypeScript.
- **Inngest** – Event-driven functions for serverless workflows.
- **ArcJet** – API for advanced analytics.

## 🛠 Installation

### Prerequisites:
Before setting up the project, ensure that you have the following installed:
- **Node.js** (>= 14.0.0)
- **npm** or **yarn**
- **PostgreSQL** (for Supabase)
- **Git**

### Setup Instructions:

1. **Clone the repository:**
```bash
git clone https://github.com/Dilraj1602/FinGenius_Ai.git
cd FinGenius_Ai
```

2. **Install the dependencies:**
```bash
npm install
# or
yarn install
```

3. **Create a .env file at the root of the project with the following environment variables:**
```bash
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key
ARCJET_KEY=your_arcjet_key
```

4. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

5. **Visit http://localhost:3000 to see the app in action!**

## 🧑‍💻 Usage
- Sign in or sign up via Clerk.
- Use the platform's AI-powered features to manage your finances.
- View your financial insights, forecasts, and more, all in one place.

## 📦 Features
- **AI-Powered Finance Insights**: Get AI-driven recommendations and insights into your financial data.
- **Budgeting & Forecasting**: Tools to create budgets and project future financial scenarios.
- **Secure Authentication**: Integrated with Clerk for secure user authentication and management.
- **Responsive Design**: Optimized for both desktop and mobile devices using TailwindCSS.

## 📚 Contributing
We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add new feature')
5. Push to the branch (git push origin feature/your-feature)
6. Open a pull request

## 🚧 Roadmap
- Integrate more advanced AI features
- Add user profiles and history tracking
- Optimize performance and add testing coverage
- Expand deployment options with Docker and Kubernetes

## 📱 Contact
For any questions or suggestions, feel free to reach out!

- Email: wolfstrix360@gmail.com
- LinkedIn: [Dilraj's LinkedIn](https://www.linkedin.com/in/dilraj1602/)
- GitHub: [Dilraj's GitHub](https://github.com/Dilraj1602)
