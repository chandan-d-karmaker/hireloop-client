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
├── app
│   ├── (auth)
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   └── page.jsx
│   │   │   └── signup
│   │   │       └── page.jsx
│   │   └── layout.jsx
│   ├── (dashboard)
│   │   └── dashboard
│   │       ├── admin
│   │       │   ├── companies
│   │       │   │   └── page.jsx
│   │       │   ├── users
│   │       │   │   └── page.jsx
│   │       │   ├── layout.jsx
│   │       │   └── page.jsx
│   │       ├── recruiter
│   │       │   ├── company
│   │       │   │   ├── companyProfile.jsx
│   │       │   │   └── page.jsx
│   │       │   ├── jobs
│   │       │   │   ├── new
│   │       │   │   │   ├── PostJobForm.jsx
│   │       │   │   │   └── page.jsx
│   │       │   │   └── page.jsx
│   │       │   ├── layout.jsx
│   │       │   └── page.jsx
│   │       ├── seeker
│   │       │   ├── applications
│   │       │   │   ├── ApplicationTable.jsx
│   │       │   │   └── page.jsx
│   │       │   ├── layout.jsx
│   │       │   └── page.jsx
│   │       └── layout.jsx
│   ├── (homepage)
│   │   ├── forbidden
│   │   │   └── page.jsx
│   │   ├── jobs
│   │   │   ├── [id]
│   │   │   │   ├── apply
│   │   │   │   │   ├── JobApply.jsx
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── plans
│   │   │   ├── success
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── unauthorized
│   │   │   └── page.jsx
│   │   ├── layout.js
│   │   └── page.js
│   ├── api
│   │   ├── auth
│   │   │   └── [...all]
│   │   │       └── route.js
│   │   └── checkout_sessions
│   │       └── route.js
│   ├── providers
│   │   └── theme-provider.jsx
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.js
├── assets
│   ├── images
│   │   ├── cta-bg.png
│   │   ├── globe.png
│   │   └── logo.png
│   └── logos
│       ├── adobe.png
│       ├── airbnb.png
│       ├── amazon.png
│       ├── apple.png
│       ├── google.png
│       ├── meta.png
│       ├── microsoft.png
│       ├── netflix.png
│       ├── nvidia.png
│       ├── spotify.png
│       ├── tesla.png
│       └── uber.png
├── components
│   ├── dashboard
│   │   ├── AddCompany.jsx
│   │   ├── AdminUsersTable.jsx
│   │   ├── CompanyCard.jsx
│   │   ├── CompanyTable.jsx
│   │   ├── NoCompany.jsx
│   │   ├── SideBar.jsx
│   │   ├── Stats.jsx
│   │   ├── StatsCard.jsx
│   │   └── TopNavBar.jsx
│   ├── main
│   │   ├── Featured.jsx
│   │   ├── Last.jsx
│   │   ├── hero.jsx
│   │   ├── jobs.jsx
│   │   ├── pricing.jsx
│   │   └── stats.jsx
│   └── shared
│       ├── Footer.jsx
│       ├── JobCard.jsx
│       ├── JobFilters.jsx
│       ├── JobListingContainer.jsx
│       ├── JobSearch.jsx
│       ├── NavLink.jsx
│       ├── Navbar.jsx
│       └── theme-toggle.jsx
└── lib
    ├── actions
    │   ├── application.js
    │   ├── company.js
    │   ├── jobs.js
    │   ├── subscriptions.js
    │   └── users.js
    ├── api
    │   ├── applications.js
    │   ├── companies.js
    │   ├── jobs.js
    │   ├── plans.js
    │   └── users.js
    ├── core
    │   ├── server.js
    │   └── session.js
    ├── auth-client.js
    ├── auth.js
    └── stripe.js
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
