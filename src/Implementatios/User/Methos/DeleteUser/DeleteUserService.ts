import { IUserContractRepository } from "../../../../Repository/Contract/IUserRepositoryContract";

export class DeleteUserService {
  constructor(private readonly userRepository: IUserContractRepository) {}

  async execute(id: number) {
    await this.userRepository.delete(id);
  }
}