import React from 'react';
import Col from '@osui/col';
import Row from '@osui/row';

export default {
    title: '通过验收/Grid',
};

export const Demo = () => {
    const style = {
        height: '30px',
    };

    const bgLight = {
        background: 'var(--color-brand-6)',
    };

    const bgLighter = {
        background: 'var(--color-brand-5)',

    };

    return (
        <>
            <Row style={style}>
                <Col span={24} style={bgLighter}>col</Col>
            </Row>
            <br />
            <Row style={style}>
                <Col span={12} style={bgLighter}>col-12</Col>
                <Col span={12} style={bgLight}>col-12</Col>
            </Row>
            <br />
            <Row style={style}>
                <Col span={8} style={bgLighter}>col-8</Col>
                <Col span={8} style={bgLight}>col-8</Col>
                <Col span={8} style={bgLighter}>col-8</Col>
            </Row>
            <br />
            <Row style={style}>
                <Col span={6} style={bgLighter}>col-6</Col>
                <Col span={6} style={bgLight}>col-6</Col>
                <Col span={6} style={bgLighter}>col-6</Col>
                <Col span={6} style={bgLight}>col-6</Col>
            </Row>
        </>
    );
};
