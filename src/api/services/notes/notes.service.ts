import { Injectable } from "@nestjs/common";
import { NoteDto, UpdateNoteDto } from "src/core/models/dtos/note-dto";
import { CreateNotesUseCase } from "src/core/use-cases/notes/create-notes.use-case";
import { FindAllNotesUseCase } from "src/core/use-cases/notes/find-all-notes.use-case";
import { UpdateNoteUseCase } from "src/core/use-cases/notes/update-note.use-case";

@Injectable()
export class NotesService {
    constructor(
        private readonly createNoteUseCase: CreateNotesUseCase,
        private readonly findAllNotesUseCase: FindAllNotesUseCase,
        private readonly updateNotesUseCase: UpdateNoteUseCase
    ){}

    async create(data: NoteDto) {
        return this.createNoteUseCase.execute(data);
    }

    async findAllNotes(userId?: string, page?: string, limit?: string) {
        return this.findAllNotesUseCase.execute(userId, limit, page)
    }

    async updateNote(noteId: string, data: UpdateNoteDto) {
        return this.updateNotesUseCase.execute(noteId, data);
    }
}