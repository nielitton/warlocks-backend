import { Injectable } from "@nestjs/common";
import { Notes } from "@prisma/client";
import { BusinessException } from "src/core/exception/businnes-exception";
import { Where } from "src/core/models/db-query-filter/db-query-filter";
import { UpdateNoteDto } from "src/core/models/dtos/note-dto";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class UpdateNoteUseCase {
    constructor(private readonly noteRepository: NotesRepository){}

    async execute(noteId: string, data: UpdateNoteDto) {
        const note = await this.noteRepository.findOneNote(noteId);

        if(!note) {
            throw new BusinessException(`Nota com o id ${noteId} não foi encontrada.`, 404);
        }

        await this.noteRepository.update(noteId, data)
    }
}