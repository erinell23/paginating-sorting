import { CSSProperties, ReactElement } from "react";


export interface TableProps {
    children?: ReactElement | ReactElement[];
    className?: string;
    classPagination?: string;
    classTable?: string;
    onChange: (pageAction: PaginatingAndSortingProps) => void;
    dataTable: DataTableProps;
    style?: CSSProperties;
}

export interface TableContextProps {
    handeChangePaginatingAndSorting: (page: PaginatingAndSortingProps) => void
    pageAction: PaginatingAndSortingProps;
    dataTable: DataTableProps;
}

export interface PaginatingAndSortingProps {
    order: string;
    page: number;
    sort: string;
}

export interface PaginationComponentProps {
    className?: string;
    style?: CSSProperties;
    paginationData: PaginationDataProps;
}

export interface PaginationDataProps {
    maxItemsShow?: number;
    number: number;
    showLastedAndFirst?: boolean;
    totalPages: number;
}

export interface DataTableProps {
    content?: Array<{ [key: string]: any }>;
    maxItemsShow?: number;
    number: number;
    showLastedAndFirst?: boolean;
    showPagination?: boolean;
    titles?: Array<TitleTableProps>;
    totalElements?: number;
    totalPages: number,
}

export interface TitleTableProps {
    sort?: string;
    name?: string | Array<string>;
    title: any;
}





