# High Level Dashboard

A modern business dashboard built with Next.js and Tailwind CSS, featuring real-time metrics, customer analytics, and revenue tracking.

## Features

- Real-time revenue metrics
- Customer performance tracking
- Revenue decline monitoring
- Interactive time window selection
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd high-level-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── MetricCard.tsx
│   ├── CustomerList.tsx
│   ├── RevenueDeclineList.tsx
│   ├── TestStats.tsx
│   └── TimeWindowSelector.tsx
└── styles/          # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a Git repository
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy your application

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 