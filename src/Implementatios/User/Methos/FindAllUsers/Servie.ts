import { IUserContractRepository } from '../../../../Repository/Contract/IUserRepositoryContract'


export class FindAllUserService {
  constructor(private readonly userRepository: IUserContractRepository) {}

  async execute() {
    const users = await this.userRepository.getAll();

    return users;
  }
}