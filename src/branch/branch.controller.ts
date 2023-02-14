import { Controller } from "@nestjs/common";

@Controller('api/v1/branch')
export class BranchController {
  constructor(private readonly branchService) {
  }
}
