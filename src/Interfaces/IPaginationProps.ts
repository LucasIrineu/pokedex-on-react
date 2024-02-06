import { Dispatch, SetStateAction } from "react"

export default interface IPaginationProps {
    pagination: number;
    setActivePage: Dispatch<SetStateAction<number>>;
    activePage: number;
    generation: number;
  }
  