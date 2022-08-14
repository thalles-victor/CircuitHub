import { IUserContractRepository } from '../Contract/IUserRepositoryContract'
import { IUserDTO } from '../Contract/DTO/IUserDTO'
import { AppDataSource } from './datasource'
import { UserEntity } from './Models/User'
import { UserModel } from '../InMemoryRepository/Model/UserModel'


export class UserTypeOrmRepository implements IUserContractRepository {
  private appDataSource = AppDataSource.getRepository(UserEntity)

  async create(user: IUserDTO): Promise<void> {
    const assignNewUser = Object.assign(new UserEntity(), {
      id: Math.floor(Math.random() * 10000),
      ...user,
      createdAt: new Date()
    } as UserEntity)
    
    await this.appDataSource.save(assignNewUser)
  }

  async update(user: Partial<IUserDTO>): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete(id: number): Promise<void> {
    await this.appDataSource.delete(id)
  }

  async getAll(): Promise<IUserDTO[]> {
    return await this.appDataSource.find();
  }

  async findOne(id: number): Promise<UserModel> {
    const user = await this.appDataSource.findOneBy({ id });

    return  user;
  }
  
}

