# User Directory

A modern, responsive React application for managing and viewing user information. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful UI with dark mode support.

![User Directory Screenshot](https://images.unsplash.com/photo-1600267204026-85c3cc6ad9ff?auto=format&fit=crop&q=80&w=2000)

## Features

- 🎨 Modern, responsive UI with glass morphism design
- 🌓 Dark/Light mode toggle
- 🔍 Real-time user search functionality
- ↕️ Name sorting (A-Z, Z-A)
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🎭 Beautiful hover animations and transitions
- 💫 Loading states and error handling
- 📊 Detailed user information view

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Context API** - State management
- **Lucide React** - Icons
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBar.tsx
│   ├── SortButton.tsx
│   ├── ThemeToggle.tsx
│   └── UserCard.tsx
├── context/            # React Context providers
│   ├── ThemeContext.tsx
│   └── UserContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   └── UserDetail.tsx
├── types/              # TypeScript type definitions
│   └── user.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features in Detail

### Home Page
- User list with search and sort functionality
- Responsive grid layout
- Smooth animations and transitions
- Real-time search filtering
- Beautiful card design with hover effects

### User Detail Page
- Comprehensive user information display
- Contact details with clickable links
- Company information
- Address details
- Smooth navigation

### Theme Toggle
- System-wide dark/light mode toggle
- Persisted theme preference
- Smooth transition between themes

### Search and Sort
- Real-time search filtering
- Name-based sorting (A-Z, Z-A)
- Smooth animations for state changes

## API Integration

The application uses the JSONPlaceholder API to fetch user data:
- Users endpoint: `https://jsonplaceholder.typicode.com/users`
- Individual user: `https://jsonplaceholder.typicode.com/users/{id}`

## Styling

The project uses Tailwind CSS with custom configurations:
- Custom color schemes
- Responsive design utilities
- Dark mode support
- Glass morphism effects
- Custom animations and transitions

## Performance Optimization

- React.memo for component memoization
- Debounced search functionality
- Optimized re-renders using Context API
- Lazy loading for route components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- [Lucide Icons](https://lucide.dev)
