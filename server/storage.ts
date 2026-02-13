import { contactSubmissions, type InsertContactSubmission, type ContactSubmission } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    if (!db) throw new Error("Database not initialized");
    const [submission] = await db
      .insert(contactSubmissions)
      .values(contact)
      .returning();
    return submission;
  }
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = db ? new DatabaseStorage() : new MemStorage();

