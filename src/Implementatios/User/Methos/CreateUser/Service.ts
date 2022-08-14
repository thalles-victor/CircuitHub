import { IUserDTO } from "../../../../Repository/Contract/DTO/IUserDTO";
import { IUserContractRepository } from "../../../../Repository/Contract/IUserRepositoryContract";

export class CreateUserServie {
  constructor(private readonly userRepository: IUserContractRepository) {}

  async execute(user: IUserDTO): Promise<void> {
    try {
      this.userRepository.create(user)
    } catch(err) {
      throw new Error("Fail wilhe create a user, \n error => " + err);
    }
  }
}