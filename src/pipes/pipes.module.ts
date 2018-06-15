import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
@NgModule({
	declarations: [SearchPipe,
    SortPipe],
	imports: [],
	exports: [SearchPipe]
})
export class PipesModule {}
