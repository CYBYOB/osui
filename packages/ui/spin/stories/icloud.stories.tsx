import React from 'react';
import Spin from '../src';
import {Basic} from './icloud-demo';

export default {
    title: '反馈/Spin 加载中',
    component: Spin,
};

export const BasicDemo = Basic;

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/spin-cn/">Antd Spin API</a>
        </>
    );
};

