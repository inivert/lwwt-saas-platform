# LWWT (Local Web Works Technologies)

A modern SaaS platform for building and hosting websites for small businesses and content creators. Built with Next.js 14, TypeScript, Tailwind CSS, and Clerk Authentication.

## Features

- 🔐 Secure Authentication with Clerk
- 🎨 Modern UI with Tailwind CSS and Framer Motion
- 📱 Fully Responsive Design
- 🚀 Next.js 14 App Router
- 💻 Streamlined Client Dashboard
  - Website Overview
  - Direct Support via Slack
- 🔒 Protected Routes
- 🌐 Multi-tenant Architecture

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **UI Components:** Framer Motion, Lucide Icons
- **Support:** Slack Integration
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
   - Configure Slack channel URL

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

# Slack Integration
NEXT_PUBLIC_SLACK_CHANNEL_URL=https://your-workspace.slack.com/archives/CHANNEL_ID
```

## Project Structure

```
lwwt/
├── src/
│   ├── app/                # Next.js 14 App Router
│   │   ├── dashboard/     # Protected dashboard routes
│   │   └── ...
│   ├── components/        # Reusable components
│   │   ├── shared/       # Shared components
│   │   └── ui/           # UI components
│   └── lib/              # Utility functions
├── public/               # Static assets
└── ...
```

## Security Considerations

1. Environment Variables
   - All sensitive data (API keys, secrets) should be stored in environment variables
   - Never commit `.env.local` or any other `.env.*` files containing real credentials
   - Use different environment variables for development and production

2. Authentication
   - Clerk handles user authentication securely
   - All dashboard routes are protected
   - User sessions are managed securely

3. Production Setup
   - Set up proper environment variables in your hosting platform
   - Enable HTTPS
   - Configure proper CORS policies
   - Regularly update dependencies

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
4. Add environment variables in Vercel:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_SLACK_CHANNEL_URL`
5. Deploy!

## License

This project is private and proprietary. All rights reserved.

## Support

For support, join our dedicated Slack channel using the link in your dashboard.

---

Built with ❤️ by [Your Name]
