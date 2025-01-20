import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Globe, Building2 } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import type { User } from '../types/user';

export function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-pulse text-xl font-medium text-blue-600 dark:text-blue-400">
          Loading user details...
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="rounded-lg bg-white/50 p-6 text-lg text-red-600 shadow-xl backdrop-blur-sm dark:bg-gray-800/50 dark:text-red-400">
          {error || 'User not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 rounded-lg bg-white/70 px-4 py-2 text-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:text-gray-900 dark:bg-gray-800/70 dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            Back to Users
          </button>
          <ThemeToggle />
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/70 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-gray-800/70">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10" />
            <div className="relative p-8">
              <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-400 dark:to-indigo-400">
                {user.name}
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400">@{user.username}</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {user.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href={`tel:${user.phone}`}
                    className="text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {user.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {user.website}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {user.company.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.company.catchPhrase}
                    </p>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 p-6 dark:from-blue-400/5 dark:to-indigo-400/5">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Address
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {user.address.street}, {user.address.suite}
                    <br />
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}