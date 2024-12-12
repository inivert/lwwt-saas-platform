# LWWT (Local Web Works Technologies)

A modern SaaS platform for building and hosting websites for small businesses and content creators. Built with Next.js 14, TypeScript, Tailwind CSS, and Clerk Authentication.

## Features

- 🔐 Secure Authentication with Clerk
- 🎨 Modern UI with Tailwind CSS and Framer Motion
- 📱 Fully Responsive Design
- 🚀 Next.js 14 App Router
- 💻 Client Dashboard
  - Website Management
  - Support Ticket System
  - Analytics Overview
  - User Settings
- 🔒 Protected Routes
- ⚡ Real-time Updates
- 🌐 Multi-tenant Architecture

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Database:** Supabase (planned)
- **Payment Processing:** Stripe (planned)
- **Email Service:** Resend (planned)
- **File Upload:** UploadThing (planned)
- **UI Components:** Framer Motion, Lucide Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lwwt.git
   cd lwwt
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local`:
   - Add your Clerk keys
   - Configure other service credentials as needed

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Required environment variables:

```plaintext
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Application URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Optional environment variables (for planned features):

```plaintext
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Upload Thing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Email (Resend)
RESEND_API_KEY=
```

## Project Structure

```
lwwt/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── dashboard/      # Protected dashboard routes
│   │   ├── api/           # API routes
│   │   └── ...
│   ├── components/        # Reusable components
│   │   ├── shared/       # Shared components
│   │   └── ui/           # UI components
│   └── lib/              # Utility functions
├── public/               # Static assets
└── ...
```

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

## Deployment

1. Push your code to GitHub
2. Set up a new project on Vercel
3. Connect your GitHub repository
4. Add environment variables in Vercel
5. Deploy!

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## License

This project is private and proprietary. All rights reserved.

## Support

For support, email support@lwwt.com or create a support ticket in the dashboard.

---

Built with ❤️ by [Your Name]
