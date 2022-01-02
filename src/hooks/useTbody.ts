import { useEffect, useState } from 'react';
import { TitleTableProps } from '../interfaces/interfaces';

interface props {
    content?: Array<{ [key: string]: any }>;
    titles?: Array<TitleTableProps>;
}

export const useTbody = ({ content, titles }: props) => {
    const [bodyShow, setbodyShow] = useState([] as Array<Array<any>>);

    useEffect(() => {
        const destruc = (obj: { [key: string]: any }, sort: Array<string>, x: number) => {
            let { [sort[x]]: val = '' } = obj;
            if (x < sort.length - 1) {
                val = destruc(val, sort, x + 1);
            }
            return val;
        }
        if (content && titles) {
            setbodyShow(content?.map((obj) =>
                titles.map(({ sort, name }) =>
                    !Array.isArray(name)
                        ? destruc(obj, name?.split(".") || sort?.split(".") || [""], 0)
                        : name.map(x => destruc(obj, x.split("."), 0)).join(' ')
                )
            ));
        }
    }, [content, titles]);

    return { bodyShow };
}
