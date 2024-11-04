/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    // console.log('createPostDto', createPostDto);
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }
  findAll() {
    // 联表查询文章作者
    return this.prisma.post.findMany({
      where: {
        publish: true,
      },
      include: {
        author: true, // 包含作者的所有字段
      },
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data: updatePostDto,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
