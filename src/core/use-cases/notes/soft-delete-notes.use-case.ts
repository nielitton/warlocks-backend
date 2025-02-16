import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/businnes-exception";
import { Note } from "src/core/models/entities/notes.entity";
import { NotesRepository } from "src/core/repositories/notes/notes.repositorie";

@Injectable()
export class softDeleteNoteUseCase {
    constructor(private readonly notesRepository: NotesRepository) { }
    async execute(noteId: string): Promise<{ message: string, note: Note }> {
        if (!noteId) {
            throw new BusinessException("Você precisa passar o id da nota", 400)
        }

        const note = await this.notesRepository.findOneNote(noteId)

        if (!note) {
            throw new BusinessException("Nota não encontrada", 404)
        }

        await this.notesRepository.softDelete(noteId)

        return {
            message: "Nota removida com sucesso",
            note
        }
    }
}