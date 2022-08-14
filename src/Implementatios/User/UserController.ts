import { Router } from 'express';
import type { Request, Response } from 'express';
import { AppDataSource } from '../../Repository/TypeOrmRepository/datasource';


import { findAllUserController } from './Methos/FindAllUsers';
import { findOneUserController } from './Methos/FindOneUser';
import { createUserController } from './Methos/CreateUser/index';
import { deleteUserController } from './Methos/DeleteUser';


const userRouter = Router();

userRouter.get("/", async (request: Request, response: Response)=> {
  return findAllUserController.handle(request, response);
})
userRouter.get("/:id", async (request, response) => {
  return findOneUserController.handle(request, response);
})

userRouter.post("/", async (request: Request, response: Response) => {
  return createUserController.handle(request, response);
})

userRouter.delete("/:id", async (request: Request, response: Response)=> {
  return deleteUserController.handle(request, response);
})

export { userRouter };