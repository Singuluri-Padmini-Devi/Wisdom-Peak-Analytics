import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useUsers } from '../context/UserContext';

export function SortButton() {
  const { sortOrder, setSortOrder } = useUsers();

  return (
    <button
      onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:from-blue-600 dark:to-indigo-600 dark:focus:ring-blue-400/20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-600 dark:to-blue-600" />
      <ArrowUpDown className="relative h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
      <span className="relative">Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}</span>
    </button>
  );
}