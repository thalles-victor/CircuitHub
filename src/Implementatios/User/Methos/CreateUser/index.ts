import { UserTypeOrmRepository } from '../../../../Repository/TypeOrmRepository/Repository';
import { CreateUserServie } from './Service';
import { CreateUserController } from './Controller';

const userService = new CreateUserServie(new UserTypeOrmRepository());
const createUserController = new CreateUserController(userService);

export { createUserController };