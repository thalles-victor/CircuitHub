import type { Request, Response } from 'express';
import { RepositoryNotTreeError } from 'typeorm';

import { FindOneUserService } from './FindOneUserServive';

export class FindOneUserController {
  constructor(private readonly findOneUserService: FindOneUserService) {}

  async handle(request, response){
    const { id } = request.params;

    const user =  await this.findOneUserService.execute(parseInt(id));

    return response.status(200).json(user)
  } 
}