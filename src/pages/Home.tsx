import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SortButton } from '../components/SortButton';
import { ThemeToggle } from '../components/ThemeToggle';
import { UserCard } from '../components/UserCard';
import { useUsers } from '../context/UserContext';

export function Home() {
  const { loading, error, filteredUsers } = useUsers();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-pulse text-xl font-medium text-blue-600 dark:text-blue-400">
          Loading users...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="rounded-lg bg-white/50 p-6 text-lg text-red-600 shadow-xl backdrop-blur-sm dark:bg-gray-800/50 dark:text-red-400">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl bg-white/70 p-6 shadow-xl backdrop-blur-sm dark:bg-gray-800/70">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:to-indigo-400">
              User Directory
            </h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:w-96">
              <SearchBar />
            </div>
            <SortButton />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="mt-8 rounded-lg bg-white/70 p-8 text-center text-gray-600 shadow-lg backdrop-blur-sm dark:bg-gray-800/70 dark:text-gray-400">
            <p className="text-lg font-medium">No users found</p>
            <p className="mt-2 text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}