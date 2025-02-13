import { PrismaService } from "src/core/database/prisma/prisma.service";
import { NotesRepository } from "./notes.repositorie";
import { NoteDto, UpdateNoteDto } from "src/core/models/dtos/note-dto";
import { Note } from "src/core/models/entities/notes.entity";
import { Injectable } from "@nestjs/common";
import { DbQueryFilter } from "src/core/models/db-query-filter/db-query-filter";

@Injectable()
export class PrismaNotesRepository implements NotesRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: NoteDto): Promise<Note> {
        return await this.prisma.notes.create({
            data: data
        })
    }

    async count(filter?: DbQueryFilter): Promise<number> {
        return await this.prisma.notes.count({
            where: filter?.where,
        })
    }

    async findAllByUser(filter?: DbQueryFilter): Promise<Partial<Note>[]> {
        return await this.prisma.notes.findMany({
            where: filter?.where,
            take: filter?.take,
            select: filter?.select,
            orderBy: filter?.orderBy,
            skip: filter?.skip
        })
    }

    async findOneNote(noteId: string): Promise<Note | null> {
        return await this.prisma.notes.findFirst({
            where: {
                id: noteId
            },
        })
    }

    async update(noteId: string, data: UpdateNoteDto): Promise<Note> {
        return await this.prisma.notes.update({
            where: {
                id: noteId
            },
            data
        });
    }

    async softDelete(noteId: string): Promise<void> {
        await this.prisma.notes.update({
            where: {
                id: noteId
            },
            data: {
                active: false
            }
        })
    }

    async hardDelete(noteId: string): Promise<void> {
        await this.prisma.notes.delete({
            where: {
                id: noteId
            }
        })
    }
}