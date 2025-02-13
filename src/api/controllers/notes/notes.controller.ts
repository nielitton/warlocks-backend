import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { NotesService } from "src/api/services/notes/notes.service";
import { NoteDto } from "src/core/models/dtos/note-dto";

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
    findAllNotesByUser(
        @Param('id') id: string, 
        @Query('limit') limit?: string, 
        @Query('page') page?: string
    ) {
        return this.notesService.findAllNotes(id, limit, page)
    }
}