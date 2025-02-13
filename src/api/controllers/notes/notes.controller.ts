import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiExcludeEndpoint, ApiOperation, ApiParam, ApiQuery } from "@nestjs/swagger";
import { NotesService } from "src/api/services/notes/notes.service";
import { JwtAuthGuard } from "src/core/auth/authGuard";
import { NoteDto, UpdateNoteDto } from "src/core/models/dtos/note-dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
    constructor(
        private readonly notesService: NotesService
    ) { }

    @ApiOperation({
        summary: "Busca de notas",
        description: 'Este endpoint busca notas pelo id do usuário.'
    })
    @ApiParam({
        name: 'id',
        type:'string',
        description: 'Id do usuário.'
    })
    @ApiQuery({
        name: 'limit',
        type:'string',
        description: 'Limite de resultados.',
        required: false
    })
    @ApiQuery({
        name: 'page',
        type:'string',
        description: 'Página a ser retornada.',
        required: false
    })
    @ApiQuery({
        name: 'title',
        type:'string',
        description: 'Título da nota.',
        required: false
    })
    @Get('/user/:id')
    findAllNotesByUser(
        @Param('id') id: string, 
        @Query('limit') limit?: string, 
        @Query('page') page?: string,
        @Query('title') title?: string
    ) {
        return this.notesService.findAllNotes(id, limit, page, title)
    }

    @ApiExcludeEndpoint()
    @ApiOperation({
        summary: 'Buscar notas',
        description: 'Este endpoint te permite buscar todas as notas sem precisar passar o id do usuário.'
    })
    @Get('')
    findAll() {
        return this.notesService.findAllNotes()
    }

    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id de uma nota.'
    })
    @ApiOperation({
        summary: "Buscar nota.",
        description: 'Este endpoint busca uma única nota pelo seu id.'
    })
    @Get(':id')
    async findOneNote(@Param('id') id: string) {
        return await this.notesService.findOneNote(id);
    }

    @ApiOperation({
        summary: 'Criação de notas',
        description: 'Este endpoint permite você criar uma nota com base no id do usuário.'
    })
    @Post('')
    createNote(@Body() data: NoteDto) {
        return this.notesService.create(data);
    }

    @ApiOperation({
        summary: 'Atualizar nota.',
        description: 'Este endpoint permite atualizar uma nota existente.'
    })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id da nota.'
    })
    @Patch(':id')
    updateNote(@Param('id') id: string, @Body() data: UpdateNoteDto) {
        return this.notesService.updateNote(id, data);
    }

    @ApiOperation({
        summary: 'Delete soft.',
        description: 'Este endpoint permite deletar uma nota existente, ele apenas a marca como inativa, assim desativando-a das pesquisas.'
    })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id da nota.'
    })
    @Delete(':id')
    softDeleteNote(@Param('id') id: string) {
        return this.notesService.softDeleteNote(id);
    }

    @ApiOperation({
        summary: 'Delete hard.',
        description: 'Este endpoint permite deletar uma nota definitivamente.'
    })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'Id da nota.'
    })
    @Delete('/hard/:id')
    hardDeleteNote(@Param('id') id: string) {
        return this.notesService.hardDeleteNote(id);
    }
}