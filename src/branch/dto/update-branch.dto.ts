import { IsBoolean, IsOptional, IsString } from "class-validator";

export class updateBranchDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly district: string;
  @IsOptional()
  @IsString()
  readonly street: string;
  @IsOptional()
  @IsBoolean()
  readonly status: boolean;
}
