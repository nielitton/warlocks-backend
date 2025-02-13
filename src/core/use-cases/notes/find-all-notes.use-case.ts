import { Injectable } from "@nestjs/common";
import { Notes } from "@prisma/client";
import { BusinessException } from "src/core/exception/businnes-exception";
import { Where } from "src/core/models/db-query-filter/db-query-filter";
import { NotesRepository } from "src/core/repositories/notes/prisma-notes.repositorie";

@Injectable()
export class FindAllNotesUseCase {
    constructor(private readonly notesRepository: NotesRepository) {}
    async execute(userId?: string, page: string = "1", limit: string = "10"): Promise<any> {
        if (!userId) {
            throw new BusinessException("Você precisa passar o id de algum usuário", 404);
        }

        const where: Where<Notes> = {
            AND: [{ userId }, { active: true }]
        };

        const totalRecords = await this.notesRepository.count({ where });
        const totalPages = Math.ceil(totalRecords / Number(limit));

        const notes = await this.notesRepository.findAllByUser({ 
            where, 
            skip: (Number(page) - 1) * Number(limit), 
            take: Number(limit)
        });

        return { 
            totalRecords, 
            totalPages, 
            currentPage: page, 
            limit, 
            notes 
        };
    }
}