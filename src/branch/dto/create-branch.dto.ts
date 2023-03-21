import { IsBoolean, IsString } from 'class-validator';

export class createBranchDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly district: string;
  @IsString()
  readonly street: string;
  @IsBoolean()
  readonly status: boolean;
}
