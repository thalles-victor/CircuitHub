import { UserTypeOrmRepository } from '../../../../Repository/TypeOrmRepository/Repository';
import { FindOneUserService } from './FindOneUserServive';
import { FindOneUserController } from './FindOneUserController';

const userRepository = new UserTypeOrmRepository();
const findOneUserService = new FindOneUserService(userRepository);
const findOneUserController = new FindOneUserController(findOneUserService);

export { findOneUserController };