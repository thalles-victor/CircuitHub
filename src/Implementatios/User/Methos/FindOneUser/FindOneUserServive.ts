import { IUserContractRepository } from "../../../../Repository/Contract/IUserRepositoryContract";

export class FindOneUserService {
  constructor(private readonly userRepository: IUserContractRepository) {}

  async execute(id: number) {
    const user = await this.userRepository.findOne(id);
    
    if (!user) {
      throw new Error("User not exist")
    }

    return user;
  }
}