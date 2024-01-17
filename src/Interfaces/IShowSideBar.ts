import { Dispatch, SetStateAction } from "react";

export default interface IShowSideBar {
    active: Dispatch<SetStateAction<boolean>>;
}