import React from 'react';
import Divider from '@osui/divider';
import Empty from '../src';

export default {
    title: '数据展示/Empty 空状态',
    component: Empty,
};

export const Demo1 = () => {
    return (
        <Empty className="osui-empty-small" />
    );
};

export const Demo2 = () => {
    return (
        <Empty type="error" description="404 Not Found" imageStyle={{height: 362}} />
    );
};

export const Demo3 = () => {
    return (
        <>
            <p>可以通过imageStyle来调整图片高度</p>
            <Divider>展示</Divider>
            <Empty type="error" imageStyle={{height: 362}} />
        </>
    );
};
