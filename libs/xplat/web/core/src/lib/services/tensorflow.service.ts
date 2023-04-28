import { Injectable } from '@angular/core';
import { TensorflowBaseService } from '@amorphicai-workspace/xplat/core';

@Injectable({
  providedIn: 'root',
})
export class TensorflowService extends TensorflowBaseService {
  constructor() {
    super();
  }
}
