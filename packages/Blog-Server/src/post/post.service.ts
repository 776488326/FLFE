import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: Prisma.PostUncheckedCreateInput) {
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
  findAll(search?: string) {
    // 联表查询文章作者, 同时支持模糊查询
    return this.prisma.post.findMany({
      where: {
        publish: true,
        // 模糊查询包含search的标题或内容
        ...(search
          ? {
              OR: [
                {
                  title: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
                {
                  body: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
              ],
            }
          : {})
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
