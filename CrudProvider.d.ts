import * as React from "react";
import { CrudRequest } from "@crud/core";
export declare class CrudProvider extends React.Component {
    props: {
        children: any;
        crud: CrudRequest;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
