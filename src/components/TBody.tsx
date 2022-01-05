import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { TableContext } from "./Table"
import { TitleTableProps } from "../interfaces/interfaces"
import { useTbody } from '../hooks/useTbody';

interface props {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    content?: Array<{ [key: string]: any }>;
    style?: React.CSSProperties;
    titles?: Array<TitleTableProps>;
}

export const TBody = ({ children, content, style, className }: props) => {

    const { dataTable:{titles, content:contentCxt} } = useContext(TableContext);

    const { bodyShow } = useTbody({content:content || contentCxt, titles});

    return (
        <tbody className={className} style={style}>
            {
                children
                    ? children
                    : <>{
                        bodyShow.map((tr, i) => <tr key={'tr_' + i}>
                            {tr.map((td, j) => <td key={'td_' + i + '_' + j}>{td}</td>)}
                        </tr>)
                    }</>
            }
        </tbody>
    )
}
TBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    className: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.shape({
        sort: PropTypes.string,
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        title: PropTypes.string.isRequired,
    })),
    content: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.object,

}