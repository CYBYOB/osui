import React from 'react';
import {Button as AntdButton} from 'antd';
import {ButtonProps as AntdButtonProps, ButtonType} from 'antd/es/button';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-button';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: ButtonType | 'strong' | 'icon' | 'only-icon';

}

const Button: React.FC<ButtonProps> = ({type = 'default', ...props}) => {

    return (
        <AntdButton
            {...props}
            type={type as AntdButtonProps['type']} // 因为不兼容，做了强制类型转换
            className={classNames(props.className, clsPrefix)}
        />
    );
};

export default Button;
