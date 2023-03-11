import { StaticImageData } from "next/image";

export interface IAvatar {
    image: string | StaticImageData;
    alt:string;
    className?:string;
    width:number;
    height:number;
}