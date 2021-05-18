import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import BrandProvider from '@osui/brand-provider';
import Pagination from '@osui/pagination';

export default {
    title: '导航/Pagination 分页',
};

export const Demo = () => {
    function onChange(val) {
        console.log(val);
    }

    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <ConfigProvider locale={zhCN}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                    <br />
                    <Pagination size="small" showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                    <br />
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
                </ConfigProvider>
            </BrandProvider>
        </div>);
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/pagination-cn/">Antd Pagination API</a>
        </>
    );
};

