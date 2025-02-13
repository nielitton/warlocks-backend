import { Injectable } from "@nestjs/common";
import { NoteDto } from "src/core/models/dtos/note-dto";
import { CreateNotesUseCase } from "src/core/use-cases/notes/create-notes.use-case";
import { FindAllNotesUseCase } from "src/core/use-cases/notes/find-all-notes.use-case";

@Injectable()
export class NotesService {
    constructor(
        private readonly createNoteUseCase: CreateNotesUseCase,
        private readonly findAllNotesUseCase: FindAllNotesUseCase,
    ){}

    async create(data: NoteDto) {
        return this.createNoteUseCase.execute(data);
    }

    async findAllNotes(userId?: string, page?: string, limit?: string) {
        return this.findAllNotesUseCase.execute(userId, limit, page)
    }
}