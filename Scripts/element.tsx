import * as React from 'react';

interface IProps {
    User: Array<string>
}
export default class element extends React.Component<IProps, any, React.ElementType>{
    constructor(props: IProps) {
        super(props);
    }
    public render(): React.ReactElement<IProps> {
        return (
            <p>hello from the tsx file </p>
        );
    }
}