import { Injectable } from "@nestjs/common";
import { NoteDto } from "src/core/models/dtos/note-dto";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class CreateNotesUseCase {
    constructor(private readonly noteRepository: NotesRepository) { }
    async execute(data: NoteDto) {
        return await this.noteRepository.create(data)
    }

}