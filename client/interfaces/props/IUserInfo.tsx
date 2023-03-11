import { StaticImageData } from "next/image";

export interface IUserInfo{
    image: string | StaticImageData;
    username:string;
    imgClassName?:string;
    dir?:'rtl' | 'ltr';
}