import { Injectable } from "@nestjs/common";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class FindOneNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) { }

    async execute(noteId: string) {
        return await this.notesRepository.findOneNote(noteId)
    }
}