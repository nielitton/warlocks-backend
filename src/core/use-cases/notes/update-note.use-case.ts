import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/businnes-exception";
import { UpdateNoteDto } from "src/core/models/dtos/note-dto";
import { Note } from "src/core/models/entities/notes.entity";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class UpdateNoteUseCase {
    constructor(private readonly noteRepository: NotesRepository){}

    async execute(noteId: string, data: UpdateNoteDto): Promise<{ message: string, note: Note }> {
        const note = await this.noteRepository.findOneNote(noteId);

        if(!note) {
            throw new BusinessException(`Nota com o id ${noteId} não foi encontrada.`, 404);
        }

        await this.noteRepository.update(noteId, data)

        return {
            message: "Nota atualizada com sucesso",
            note
        }
    }
}