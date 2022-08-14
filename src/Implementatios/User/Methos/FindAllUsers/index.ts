import { UserTypeOrmRepository } from '../../../../Repository/TypeOrmRepository/Repository';
import { FindAllUserService } from './Servie'
import { FindAllUserController } from './Controller'

const userRepository = new UserTypeOrmRepository();
const findAllUserService = new FindAllUserService(userRepository);

export const findAllUserController = new FindAllUserController(findAllUserService);

