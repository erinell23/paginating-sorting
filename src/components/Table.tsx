import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PaginatingAndSortingProps, TableProps, TableContextProps } from '../interfaces/interfaces'
import { Pagination } from './Pagination';
import { THead } from './THead';
import { TBody } from './TBody';
import styles from '../styles/styles.module.css';

export const TableContext = createContext({} as TableContextProps);
const { Provider } = TableContext;


export const Table = ({ dataTable, children, onChange, className, classTable, classPagination, style }: TableProps) => {
    const [pageAction, setPageAction] = useState({
        page: dataTable.number || 0,
        order: '',
        sort: ''
    });
    const handeChangePaginatingAndSorting = (_pageAction: PaginatingAndSortingProps) => {
        setPageAction(_pageAction);
        onChange(_pageAction);
    }

    const _dataTable = {
        showPagination: true,
        showLastedAndFirst: true,
        ...dataTable
    };
    return (
        <Provider value={{ handeChangePaginatingAndSorting, pageAction, dataTable: _dataTable }}>
            <div className={className && className} style={style}>
                <table className={`${styles.table} ${styles.table_hover} ${classTable && className}`}>
                    {
                        children
                            ? children
                            : (
                                <>
                                    {_dataTable.titles ? <THead /> : <></>}
                                    {_dataTable.content ? <TBody /> : <></>}
                                </>
                            )
                    }
                </table>
                {
                    _dataTable.showPagination && <Pagination paginationData={_dataTable} className={classPagination} />
                }
            </div>
        </Provider>
    )
}



Table.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    className: PropTypes.string,
    classPagination: PropTypes.string,
    classTable: PropTypes.string,
    onChange: PropTypes.func,
    dataTable: PropTypes.shape({
        content: PropTypes.arrayOf(PropTypes.object),
        maxItemsShow: PropTypes.number,
        number: PropTypes.number.isRequired,
        showLastedAndFirst: PropTypes.bool,
        showPagination: PropTypes.bool,
        titles: PropTypes.arrayOf(PropTypes.shape({
            sort: PropTypes.string,
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
            title: PropTypes.any.isRequired,
        })),
        totalElements: PropTypes.number,
        totalPages: PropTypes.number.isRequired
    }),
    style: PropTypes.object,
}
