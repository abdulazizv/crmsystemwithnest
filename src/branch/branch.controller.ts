import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { createBranchDto } from './dto/create-branch.dto';
import { updateBranchDto } from './dto/update-branch.dto';

@Controller('api/v1/branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post('/add')
  create(@Body() createBranchDto: createBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @Get('/all')
  getAll() {
    return this.branchService.getAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.branchService.getOne(id);
  }

  @Put(':id')
  update(@Param() id: string, @Body() updateBranchDto: updateBranchDto) {
    return this.branchService.update(id, updateBranchDto);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    return this.branchService.delete(id);
  }
}
