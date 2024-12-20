import { IsString, IsNotEmpty, Length, IsJSON, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({ description: "文章标题", example: "Hello World" })
    @IsString()
    @IsNotEmpty()
    @Length(5, 255)
    title: string;

    @ApiProperty({ description: "文章缩略名", example: "hello-world" })
    @IsString()
    @IsNotEmpty()
    slug: string;

    @ApiProperty({ description: "文章内容", example: "Hello World" })
    body: string;

    @ApiProperty({ description: "文章作者ID", example: "admin" })
    @IsString()
    @IsNotEmpty()
    authorId: string;

    @ApiProperty({ description: "是否发布", example: true })
    @IsBoolean({message: "publish must be a boolean"})
    @IsNotEmpty()
    publish: boolean;

    @ApiProperty({ description: "文章分类", example: "vue"})
    @IsString()
    @IsNotEmpty()
    categoryId: string;
}

