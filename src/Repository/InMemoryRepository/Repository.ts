import { IUserContractRepository } from '../Contract/IUserRepositoryContract';
import { IUserDTO } from '../Contract/DTO/IUserDTO';
import { UserDatabase } from './database/database'

const database = UserDatabase;

export class InMemoryRepository implements IUserContractRepository {
  async create(user: IUserDTO): Promise<void> {
    await database.push(user);
  }

  update(user: Partial<IUserDTO>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  async getAll(): Promise<IUserDTO[]> {
    return database;
  }
}