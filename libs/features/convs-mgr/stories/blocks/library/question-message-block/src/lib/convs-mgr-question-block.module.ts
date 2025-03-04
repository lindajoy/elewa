import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FlexLayoutModule,
  MaterialBricksModule,
  MaterialDesignModule,
} from '@iote/bricks-angular';

import { ConvsMgrBlockOptionsModule } from '@app/features/convs-mgr/stories/blocks/library/block-options';

import { QuestionsBlockComponent } from './components/questions-block/questions-block.component';

@NgModule({
  imports: [
    MaterialDesignModule,
    FlexLayoutModule,
    MaterialBricksModule,

    FormsModule,
    ReactiveFormsModule,

    ConvsMgrBlockOptionsModule
  ],

  declarations: [
    QuestionsBlockComponent
  ],

  exports: [
    QuestionsBlockComponent
  ]
})
export class ConvsMgrQuestionBlockModule {}
