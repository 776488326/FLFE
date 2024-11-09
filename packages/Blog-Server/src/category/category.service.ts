import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(name: string) {
    return this.prisma.category.findFirst({
      where: {
        OR: [
          {
            name
          }
        ]
      }
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: {
        id
      }
    });
  }
}
