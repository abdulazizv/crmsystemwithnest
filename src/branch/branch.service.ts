import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Branch, BranchsDocument } from './schemas/branch.schema';
import { createBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch.name) private branchModule: Model<BranchsDocument>,
  ) {}
  async create(CreateBranchDto: createBranchDto): Promise<Branch> {
    const createdBranch = new this.branchModule(CreateBranchDto);
    await createdBranch.save();
    return createdBranch;
  }

  async getAll(): Promise<Branch[]> {
    const allBranches = await this.branchModule.find();
    if (!allBranches) {
      throw new HttpException('Information not found', HttpStatus.NOT_FOUND);
    }
    return allBranches;
  }

  async getOne(id: string): Promise<Branch> {
    const oneBranch = await this.branchModule.findById({ _id: id });
    if (!oneBranch) {
      throw new HttpException(
        'ID is incorrect, Information not found !',
        HttpStatus.NOT_FOUND,
      );
    }
    return oneBranch;
  }

  async
}
