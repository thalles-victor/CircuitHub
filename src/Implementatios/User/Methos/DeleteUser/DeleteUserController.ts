import type { Request, Response } from 'express';

import { DeleteUserService } from './DeleteUserService';

interface IRequest {
  id: number;
}

export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    
    this.deleteUserService.execute(parseInt(id))

    return response.status(200).send();
  }
}