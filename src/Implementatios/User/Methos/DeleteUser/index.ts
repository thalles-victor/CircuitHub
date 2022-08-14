import { UserTypeOrmRepository } from '../../../../Repository/TypeOrmRepository/Repository';
import { DeleteUserService } from './DeleteUserService';
import { DeleteUserController } from './DeleteUserController';

const userRepository = new UserTypeOrmRepository();
const deleteUserService = new DeleteUserService(userRepository);

export const deleteUserController = new DeleteUserController(deleteUserService)

