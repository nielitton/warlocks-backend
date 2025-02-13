import { Injectable } from "@nestjs/common";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class softDeleteNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}
    execute(noteId: string): Promise<void> {
        return this.notesRepository.softDelete(noteId)
    }
}