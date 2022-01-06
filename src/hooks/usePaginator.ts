import { useEffect, useState } from 'react';
import { PaginatingAndSortingProps } from '../interfaces/interfaces';

interface props {
    number: number;
    maxItemsShow?: number;
    totalPages: number;
    handeChangePaginatingAndSorting: (page: PaginatingAndSortingProps) => void;
    pageAction: PaginatingAndSortingProps;
}
export const usePaginator = ({
    number,
    maxItemsShow,
    totalPages,
    handeChangePaginatingAndSorting,
    pageAction
}: props) => {

    const [sumar, setSumar] = useState(number);

    const items = Math.min(maxItemsShow && maxItemsShow > 0 ? maxItemsShow : 3, totalPages || 1);

    const handleChangePage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, i: number) => {
        e.preventDefault();
        const page = i <= 0 ? 0 : (i >= totalPages ? totalPages - 1 : i);
        handeChangePaginatingAndSorting({ ...pageAction, page });
    }
    useEffect(() => {
        const verificar = (veri: number) => {
            let confi = veri;
            if (veri + items > totalPages) {
                confi = verificar(veri - 1);
            }
            return confi;
        }
        const i = number;
        setSumar(i >= items - Math.trunc(items / 2) ? verificar(i - Math.trunc(items / 2)) : 0);
    }, [number, totalPages, items]);

    return{
        handleChangePage,
        sumar,
        items
    };

}
