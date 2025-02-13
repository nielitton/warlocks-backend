import { Injectable } from "@nestjs/common";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class HardDeleteNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}

    execute(noteId: string) {
        return this.notesRepository.hardDelete(noteId);
    }
}