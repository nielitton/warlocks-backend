import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { NotesService } from "src/api/services/notes/notes.service";
import { JwtAuthGuard } from "src/core/auth/authGuard";
import { NoteDto, UpdateNoteDto } from "src/core/models/dtos/note-dto";

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
    constructor(
        private readonly notesService: NotesService
    ) { }

    @Post('')
    createNote(@Body() data: NoteDto) {
        return this.notesService.create(data);
    }

    @Get('')
    findAll() {
        return this.notesService.findAllNotes()
    }

    @Get(':id')
    async findOneNote(@Param('id') id: string) {
        return await this.notesService.findOneNote(id);
    }

    @Get('/user/:id')
    findAllNotesByUser(
        @Param('id') id: string, 
        @Query('limit') limit?: string, 
        @Query('page') page?: string,
        @Query('title') title?: string
    ) {
        return this.notesService.findAllNotes(id, limit, page, title)
    }

    @Patch(':id')
    updateNote(@Param('id') id: string, @Body() data: UpdateNoteDto) {
        return this.notesService.updateNote(id, data);
    }

    @Delete(':id')
    softDeleteNote(@Param('id') id: string) {
        return this.notesService.softDeleteNote(id);
    }

    @Delete('/hard/:id')
    hardDeleteNote(@Param('id') id: string) {
        return this.notesService.hardDeleteNote(id);
    }
}