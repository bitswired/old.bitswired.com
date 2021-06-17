import { Type } from '@nestjs/common';
import {
  ArgsType,
  Field,
  InputType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';

export function WhereArgs<T>(classRef: Type<T>, omit?: any[]): any {
  let p;
  if (omit) {
    p = OmitType(
      PartialType(classRef, () =>
        InputType(`Where${classRef.name}Partial`, { isAbstract: true }),
      ),
      omit,
    );
  } else {
    p = PartialType(classRef, () =>
      InputType(`Where${classRef.name}Partial`, { isAbstract: true }),
    );
  }

  @InputType({ isAbstract: true })
  abstract class WhereArgsType {
    @Field(() => p, { nullable: true })
    _eq: T;
  }

  return WhereArgsType;
}

export function QueryModifiersArgs<T>(classRef: Type<T>, omit?: string[]): any {
  @InputType(`Where${classRef.name}Input`, { isAbstract: true })
  class WhereEntity extends WhereArgs(classRef, omit) {}

  @ArgsType()
  abstract class QueryModifiers {
    @Field(() => WhereEntity, { nullable: true })
    where?: WhereEntity;
  }

  return QueryModifiers;
}
