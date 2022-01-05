import React, { ReactElement, useContext } from "react"
import { TitleTableProps } from "../interfaces/interfaces";
import { TableContext } from "./Table"
import PropTypes from 'prop-types';
import styles from '../styles/styles.module.css';

interface props {
    children?: ReactElement;
    className?: string;
    style?: React.CSSProperties;
    titles?: Array<TitleTableProps>;
}

export const THead = ({ titles, children, className, style }: props) => {
    const { handeChangePaginatingAndSorting, pageAction, dataTable:{titles:titleCxt} } = useContext(TableContext);
    
    const handleSortChange = (sort: string, order: string) => {
        handeChangePaginatingAndSorting({ ...pageAction, sort, order });
    }

    const titleShow = titles || titleCxt;

    return (
        <thead className={className} style={style}>
            {children
                ? children
                : titleShow
                    ? <tr>
                        {titleShow.map((a, b) => {
                            const order = (a.sort === pageAction.sort ? (pageAction.order === 'ASC' ? 'DESC' : 'ASC') : 'DESC');
                            return <th
                                onClick={() => a.sort && handleSortChange(a.sort, order)}
                                key={b + '_' + a.title}
                                className={a.sort && styles.sorting_hover}
                            >{a.title} <span
                                className={a.sort
                                    && `${styles.sorting_disabled} ${a.sort === pageAction.sort
                                        ? (order === 'DESC' ? styles.sorting_asc : styles.sorting_desc) : ''
                                    }`}
                            ></span></th>
                        })}
                    </tr>
                    : <></>
            }
        </thead>
    )
}
THead.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    className: PropTypes.string,
    style: PropTypes.object,
    titles: PropTypes.arrayOf(PropTypes.shape({
        sort: PropTypes.string,
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        title: PropTypes.string.isRequired,
    })),
}