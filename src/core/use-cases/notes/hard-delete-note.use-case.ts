import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/businnes-exception";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class HardDeleteNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) { }

    async execute(noteId: string) {
        if (!noteId) {
            throw new BusinessException("Você precisa passar o id da nota", 400)
        }

        const note = await this.notesRepository.findOneNote(noteId)

        if (!note) {
            throw new BusinessException("Nota não encontrada", 404)
        }

        const updatedNote = await this.notesRepository.hardDelete(noteId);

        return {
            message: "Nota removida com sucesso (Do banco de dados)",
            updatedNote
        }
    }
}