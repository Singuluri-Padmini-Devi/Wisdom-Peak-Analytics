import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types/user';

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  sortOrder: 'asc' | 'desc';
  setSearchTerm: (term: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  filteredUsers: User[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = React.useMemo(() => {
    let result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result = [...result].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [users, searchTerm, sortOrder]);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        searchTerm,
        sortOrder,
        setSearchTerm,
        setSortOrder,
        filteredUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}