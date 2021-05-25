import * as React from 'react';
import { ISpfxw2Props } from './ISpfxw2Props';
import { ISpfxw2State } from './ISpfxw2State';
export default class AddinWebpart extends React.Component<ISpfxw2Props, ISpfxw2State, {}> {
    private searchservice;
    wlist: any[];
    constructor(props: ISpfxw2Props);
    sort(): void;
    fill: (e: any) => void;
    filtering(letter: String): void;
    componentDidMount(): void;
    render(): React.ReactElement<ISpfxw2Props>;
    private _getGroupTotalRowHeight;
    private _getGroupHeight;
}
//# sourceMappingURL=AddinWebpart.d.ts.map