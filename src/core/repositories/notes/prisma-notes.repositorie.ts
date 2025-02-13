import { DbQueryFilter } from "src/core/models/db-query-filter/db-query-filter";
import { NoteDto } from "src/core/models/dtos/note-dto";
import { Note } from "src/core/models/entities/notes.entity";

export abstract class NotesRepository {
    abstract findAllByUser(filter?: DbQueryFilter): Promise<Partial<Note>[]>;
    abstract findOneNote(noteId: string): Promise<Note | null>;
    abstract count(filter?: DbQueryFilter): Promise<number>
    abstract create(note: Note): Promise<Note>;
    abstract update(noteId: string, updatedNote: NoteDto): Promise<Note>;
    abstract softDelete(noteId: string): Promise<void>;
    abstract hardDelete(noteId: string): Promise<void>;
}