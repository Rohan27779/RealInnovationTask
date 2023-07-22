import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface User {

  id: number;
  username: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
}

@Injectable({
  providedIn: 'root',
})
export class LocalDataService extends Dexie {
  private users!: Dexie.Table<User, number>;

  constructor() {
    super('MyLocalDB');

    // Define the schema for the database
    this.version(1).stores({
      users: '++id,username,role,startDate,endDate',
    });

    // Get a reference to the users table
    this.users = this.table('users');


  }


  // Add a new user to the database
  addUser(user: User): Promise<number> {
    return this.users.add(user);
  }

  // Get all users from the database
  getAllUsers(): Promise<User[]> {
    return this.users.toArray();
  }

  getUserById(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  // Update user details
  updateUser(user: User): Promise<void> {
    if (user.id !== undefined) {
      return this.users.update(user.id, user).then(() => {}); // Empty then() to convert PromiseExtended<number> to Promise<void>
    } else {
      return Promise.reject(new Error('User ID is missing.'));
    }
  }

  // Delete a user from the database
  deleteUser(id: number): Promise<void> {
    return this.users.delete(id);
  }
}
