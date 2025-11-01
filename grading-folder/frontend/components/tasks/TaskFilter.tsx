import { useState, useEffect } from 'react';
import api from '@/lib/axios';
import { User } from '@/lib/types';

interface TaskFilterProps {
  filters: any;
  setFilters: (filters: any) => void;
}

export default function TaskFilter({ filters, setFilters }: TaskFilterProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch users');
    }
  };

  const handleFilterChange = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      assignedTo: '',
      search: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some(val => val !== '');

  return (
    <div className="card mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="input-field"
          />
        </div>

        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="input-field w-auto"
        >
          <option value="">All Status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={filters.priority}
          onChange={(e) => handleFilterChange('priority', e.target.value)}
          className="input-field w-auto"
        >
          <option value="">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          value={filters.assignedTo}
          onChange={(e) => handleFilterChange('assignedTo', e.target.value)}
          className="input-field w-auto"
        >
          <option value="">All Assignees</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}