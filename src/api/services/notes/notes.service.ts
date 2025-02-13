import { Injectable } from "@nestjs/common";
import { NoteDto, UpdateNoteDto } from "src/core/models/dtos/note-dto";
import { CreateNotesUseCase } from "src/core/use-cases/notes/create-notes.use-case";
import { FindAllNotesUseCase } from "src/core/use-cases/notes/find-all-notes.use-case";
import { FindOneNoteUseCase } from "src/core/use-cases/notes/find-one-note.use-case";
import { HardDeleteNoteUseCase } from "src/core/use-cases/notes/hard-delete-note.use-case";
import { softDeleteNoteUseCase } from "src/core/use-cases/notes/soft-delete-notes.use-case";
import { UpdateNoteUseCase } from "src/core/use-cases/notes/update-note.use-case";

@Injectable()
export class NotesService {
    constructor(
        private readonly createNoteUseCase: CreateNotesUseCase,
        private readonly findAllNotesUseCase: FindAllNotesUseCase,
        private readonly updateNotesUseCase: UpdateNoteUseCase,
        private readonly softDeleteNoteUseCase: softDeleteNoteUseCase,
        private readonly hardDeleteNoteUseCase: HardDeleteNoteUseCase, 
        private readonly findOneNoteUseCase: FindOneNoteUseCase,
    ){}

    async create(data: NoteDto) {
        return this.createNoteUseCase.execute(data);
    }

    async findAllNotes(userId?: string, page?: string, limit?: string, title?: string) {
        return this.findAllNotesUseCase.execute(userId, limit, page, title)
    }

    async findOneNote(noteId: string) {
        return this.findOneNoteUseCase.execute(noteId)
    }

    async updateNote(noteId: string, data: UpdateNoteDto) {
        return this.updateNotesUseCase.execute(noteId, data);
    }

    async softDeleteNote(noteId: string) {
        return this.softDeleteNoteUseCase.execute(noteId);
    }

    async hardDeleteNote(noteId: string) {
        return this.hardDeleteNoteUseCase.execute(noteId);
    }

}