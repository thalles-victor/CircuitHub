import type { Request, Response } from 'express';

import { FindAllUserService } from './Servie';

export class FindAllUserController {
  constructor(private readonly userService: FindAllUserService) {}

  async handle(request: Request, response: Response) {
    const user = await this.userService.execute();
    return response.status(200).json(user)
  }
}