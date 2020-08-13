import * as React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps} from 'antd/lib/back-top';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-button';

export type ButtonProps = AntdButtonProps;

const OscButton: React.FC<ButtonProps> = props => {
    let btnText = '';
    if (props.type !== 'image-text' && props.loading) {
        btnText = '';
    } else {
        btnText = props.children;
    }
    return (<AntdButton {...props} className={classNames(props.className, clsPrefix)} >
        {btnText}
    </AntdButton>);
};

export default OscButton;
