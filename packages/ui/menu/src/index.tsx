import React from 'react';
import {Menu as AntdMenu} from 'antd';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {MenuProps as AntdMenuProps} from 'antd/es/menu';
import {SubMenuProps as AntdSubMenuProps} from 'antd/es/menu/SubMenu';
import classNames from 'classnames';
import {IconRightOutlined} from '@osui/icons';
import './index.less';

const clsPrefix = 'osui-menu';

export interface MenuInterface extends React.FC<AntdMenuProps> {
    SubMenu: typeof SubMenu;
}

const Menu: MenuInterface = ({className, expandIcon, ...props}) => {
    const innerClassName = classNames(clsPrefix, className);
    const innerExpandIcon = expandIcon ?? <IconRightOutlined />;
    return <AntdMenu className={innerClassName} expandIcon={innerExpandIcon} {...props} />;
};

const SubMenu: React.FC<AntdSubMenuProps> = ({popupClassName, ...props}) => {
    const innerPopupClassName = classNames(`${clsPrefix}-submenu`, popupClassName);
    return <AntdMenu.SubMenu popupClassName={innerPopupClassName} {...props} />;
};

hoistNonReactStatics(Menu, AntdMenu);
Menu.SubMenu = SubMenu;

export type { MenuProps, MenuTheme, SubMenuProps, MenuItemProps } from 'antd';
export default Menu as unknown as typeof AntdMenu;
