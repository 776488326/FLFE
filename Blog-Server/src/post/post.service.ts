import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto
    });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id
      }
    })
  }
  findAll() {
    return this.prisma.post.findMany({
      where: {
        publish: true
      }
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data: updatePostDto,
      where: {
        id
      }
    });
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
