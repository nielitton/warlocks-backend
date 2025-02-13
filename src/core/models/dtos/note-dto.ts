import { isNotEmpty, IsNotEmpty, IsOptional } from "class-validator";
import { Note } from "../entities/notes.entity";

export class NoteDto extends Note {
    @IsNotEmpty({message: "Você precisa passar algum título para a nota"})
    title: string;
    
    @IsNotEmpty({message: "Você precisa passar algum conteúdo para a nota"})
    content: string;

    @IsNotEmpty({ message: "Você precisa passar o id do usuário"})
    userId: string;
}

export class UpdateNoteDto {
    @IsOptional()
    title: string;

    @IsOptional()
    content: string;
}