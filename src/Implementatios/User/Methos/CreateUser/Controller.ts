import type { Request, Response } from 'express';
import { IUserDTO } from '../../../../Repository/Contract/DTO/IUserDTO';

import { CreateUserServie } from './Service';

export class CreateUserController {
  constructor(private readonly userService: CreateUserServie) {}

  async handle(request: Request, response: Response) {
    const { name, about, photo }: IUserDTO = request.body;

    await this.userService.execute({ name, about, photo });

    return response.status(201).send()
  }
}