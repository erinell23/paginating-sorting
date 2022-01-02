import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { PaginationComponentProps } from '../interfaces/interfaces'
import { TableContext } from './Table';
import { usePaginator } from '../hooks/usePaginator';
import styles from '../styles/styles.module.css';

export const Pagination = ({ paginationData, className, style }: PaginationComponentProps) => {

    const { number, totalPages, showLastedAndFirst } = paginationData;

    const { handeChangePaginatingAndSorting, pageAction } = useContext(TableContext);

    const { handleChangePage, items, sumar } = usePaginator({
        ...paginationData,
        handeChangePaginatingAndSorting,
        pageAction
    });
    return (
        <ul className={`${styles.pagination} ${className && className}`} style={style}>
            {sumar > 0
                && <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#'
                        onClick={(e) => handleChangePage(e, 0)}
                    >1...</a>
                </li>}
            {showLastedAndFirst && items > 1
                && <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#' onClick={(e) => handleChangePage(e, number - items)}>{'«'}</a>
                </li>}
            {totalPages > 1
                && <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#' onClick={(e) => handleChangePage(e, number - 1)}>{'<'}</a>
                </li>}
            {Array.apply(null, Array(items))
                .map((ob, i) =>
                    i + sumar < totalPages &&
                    <li
                        className={styles.pg_item}
                        key={i + '_itPg_' + sumar}
                    >
                        {ob && ' '}
                        <a className={`${styles.pg_link} ${number === i + sumar ? styles.active : ''}`}
                            href='/#'
                            onClick={(e) => handleChangePage(e, i + sumar)}
                        >{i + 1 + sumar}</a>
                    </li>
                )}


            {totalPages > 1
                && <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#' onClick={(e) => handleChangePage(e, number + 1)}>{'>'}</a>
                </li>}
            {showLastedAndFirst && items > 1 &&
                <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#' onClick={(e) => handleChangePage(e, number + items)}>{'»'}</a>
                </li>}
            {sumar + items < totalPages
                && <li className={styles.pg_item}>
                    <a className={styles.pg_link} href='/#'
                        onClick={(e) => handleChangePage(e, totalPages - 1)}
                    >...{totalPages}</a>
                </li>}
        </ul>
    )
}
Pagination.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    paginationData: PropTypes.shape({
        maxItemsShow: PropTypes.number,
        number: PropTypes.number.isRequired,
        showLastedAndFirst: PropTypes.bool,
        totalPages: PropTypes.number.isRequired,
    })
}

