import React from 'react';
import { Search } from 'lucide-react';
import { useUsers } from '../context/UserContext';

export function SearchBar() {
  const { searchTerm, setSearchTerm } = useUsers();

  return (
    <div className="relative group">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-blue-500 dark:text-gray-500 dark:group-focus-within:text-blue-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
        className="w-full rounded-lg border border-gray-200 bg-white/90 py-2.5 pl-10 pr-4 text-gray-900 placeholder-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800/90 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:bg-gray-800 dark:focus:ring-blue-400/20"
      />
    </div>
  );
}