import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import type { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link
      to={`/user/${user.id}`}
      className="group relative block overflow-hidden rounded-xl bg-white/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800/70"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/10 dark:to-indigo-400/10" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {user.name}
        </h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-gray-600 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
            <Mail className="h-4 w-4" />
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 transition-colors duration-200 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{user.address.city}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}