import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ISPSearchResult } from '../addinWebpart/components/ISearchResult';
export declare class searchservice {
    getSearchResults(context: WebPartContext, query: string): Promise<ISPSearchResult[]>;
    private _getSearchData;
    private _setSearchResults;
    private _isNull;
}
//# sourceMappingURL=searchservice.d.ts.map