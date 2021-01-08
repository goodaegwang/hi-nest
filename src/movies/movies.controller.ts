/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
@Get()
  getAll() {
    return 'This will return all movies';
}

    @Get("/:id")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getOne(@Param('id') movieId: string){
        return 'This will return one movie with the id: ${movieId}';
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete()
    remove() {
        return 'This will delete a movie';
    }
}
