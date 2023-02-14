import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BranchsDocument = HydratedDocument<Branch>;

@Schema()
export class Branch {
  @Prop()
  name: string;

  @Prop()
  district: string;

  @Prop()
  street: string;

  @Prop()
  status: boolean;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
