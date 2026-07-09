# Hireloop Client

Hireloop is a hiring/recruitment platform built with Next.js. This repository contains the **client** (frontend) application.

> 🚧 **Status: Work in Progress** — This project is under active development. Features, structure, and APIs may change frequently, and things may be incomplete or broken.

**Live Demo:** [hireloop-client-ck.vercel.app](https://hireloop-client-ck.vercel.app/)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI:** [React](https://react.dev/) 19, [HeroUI](https://www.heroui.com/), [Tailwind CSS](https://tailwindcss.com/) 4
- **Auth:** [better-auth](https://www.better-auth.com/) with MongoDB adapter
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Payments:** [Stripe](https://stripe.com/)
- **Icons:** lucide-react, react-icons
- **Notifications:** react-hot-toast
- **Theming:** next-themes
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- A MongoDB connection string
- A Stripe account (for payment-related features)

### Installation

```bash
git clone https://github.com/chandan-d-karmaker/hireloop-client.git
cd hireloop-client
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project and add the required environment variables, for example:

```bash
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# better-auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

> Update the variable names above as your actual configuration evolves — this section will be kept in sync with the project as it's finalized.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other scripts

```bash
npm run build   # Build for production
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Project Structure

```
hireloop-client/
├── public/        # Static assets
├── src/           # Application source code
├── package.json
└── ...
```

## Roadmap / Notes

This project is actively being built out. Planned/in-progress areas include:

- [ ] Core hiring/recruitment workflows
- [ ] Authentication flows (sign up, sign in, sessions)
- [ ] Payment/subscription integration via Stripe
- [ ] UI polish and responsive design
- [ ] Documentation of full feature set

Feel free to open an issue if you spot a bug or have a suggestion.

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Check out the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Author

**Chandan D. Karmaker** — [GitHub](https://github.com/chandan-d-karmaker)

## License

No license has been specified yet for this project.
