import * as React from 'react';
import Select from 'antd/es/select';
import type { SelectProps } from 'antd/es/select';

interface MiniOrMiddleSelectInterface extends React.FC<SelectProps> {
  Option: typeof Select.Option;
}

const MiniSelect: MiniOrMiddleSelectInterface = props => <Select {...props} size="small" />;
const MiddleSelect: MiniOrMiddleSelectInterface = props => <Select {...props} size="middle" />;

MiniSelect.Option = Select.Option;
MiddleSelect.Option = Select.Option;

export { MiniSelect, MiddleSelect };

