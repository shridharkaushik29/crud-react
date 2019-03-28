import {Context} from "react";
import {CrudRequest} from "@crud/core";
import * as React from "react";

const CrudContext: Context<CrudRequest> = React.createContext(null);

export default CrudContext;
