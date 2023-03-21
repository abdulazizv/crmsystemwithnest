import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Branch, BranchsDocument } from './schemas/branch.schema';
import { createBranchDto } from './dto/create-branch.dto';
import { updateBranchDto } from './dto/update-branch.dto';

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
    const allBranches = await this.branchModule.find({
      status: true,
    });
    if (allBranches.length < 1) {
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

  async update(id: string, updateBranchDto: updateBranchDto): Promise<Branch> {
    const check = await this.branchModule.findById({ _id: id });
    if (!check) {
      throw new HttpException(
        'Id is incorrect, Please give real data !',
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedOne = await this.branchModule.findByIdAndUpdate(
      id,
      updateBranchDto,
    );
    await updatedOne.save();
    return updatedOne;
  }

  async delete(id: string): Promise<boolean> {
    const check = await this.branchModule.findById({ _id: id });
    if (!check) {
      throw new HttpException(
        'ID is incorrect, Please give correct information',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.branchModule.findByIdAndUpdate(id, {
      status: false,
    });
    return true;
  }
}
