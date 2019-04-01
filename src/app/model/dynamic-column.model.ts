import { DynamicColumnType } from "./dynamic-column-type.enum";

export class DynamicColumnModel{
    field:string;
    subfield?:string;
    otherValue?:any;
    header:string;
    type:DynamicColumnType;
}