import { UserModel } from '../InMemoryRepository/Model/UserModel';
import { IUserDTO } from './DTO/IUserDTO';
export interface IUserContractRepository {
  create(user: IUserDTO): Promise<void>;
  update(user: Partial<IUserDTO>): Promise<void>;
  delete(id: number): Promise<void>;
  findOne(id: number): Promise<UserModel>;

  getAll(): Promise<IUserDTO[]>;
}