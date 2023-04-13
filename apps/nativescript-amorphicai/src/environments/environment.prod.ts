import { environmentBase } from './environment.base';
import { IEnvironment } from '@amorphicai-workspace/xplat/core';
import { environmentProd } from '@amorphicai-workspace/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});