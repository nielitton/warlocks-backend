import { isNotEmpty, IsNotEmpty, IsOptional } from "class-validator";
import { Note } from "../entities/notes.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class NoteDto extends Note {
    @ApiProperty({
        example: "Comprar comida"
    })
    @IsNotEmpty({message: "Você precisa passar algum título para a nota"})
    title: string;
    
    @ApiProperty({
        example: "Comprar uva, maça..."
    })
    @IsNotEmpty({message: "Você precisa passar algum conteúdo para a nota"})
    content: string;

    @ApiProperty({
        example: "124dfe24ss..."
    })
    @IsNotEmpty({ message: "Você precisa passar o id do usuário"})
    userId: string;
}

export class UpdateNoteDto {
    @ApiProperty({
        example: "Comprar uva, maça, bana..."
    })
    @ApiPropertyOptional()
    @IsOptional()
    title: string;

    @ApiProperty({
        example: "Comprar uva, maça, bana, cereja..."
    })
    @ApiPropertyOptional()
    @IsOptional()
    content: string;
}