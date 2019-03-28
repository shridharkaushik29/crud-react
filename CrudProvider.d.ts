import * as React from "react";
import { CrudRequest } from "@crud/core";
export default class CrudProvider extends React.Component<{
    children: any;
    crud: CrudRequest;
}> {
    constructor(props: any);
    render(): React.ReactNode;
}
