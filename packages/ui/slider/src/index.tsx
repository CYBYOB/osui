import React from 'react';
import {Slider as AntdSlider} from 'antd';
import {
    SliderMarks as AntdSliderMarks,
    HandleGeneratorFn as AntdHandleGeneratorFn,
    SliderBaseProps as AntdSliderBaseProps,
    SliderSingleProps as AntdSliderSingleProps,
    SliderRangeProps as AntdSliderRangeProps,
    Visibles as AntdVisibles,
} from 'antd/es/slider';
import {useBrandContext} from '@osui/brand-provider';
import classNames from 'classnames';
import './index.less';

const clsPrefix = 'osui-slider';

export type SliderMarks = AntdSliderMarks;
export type HandleGeneratorFn = AntdHandleGeneratorFn;
export type SliderBaseProps = AntdSliderBaseProps;
export type Visibles = AntdVisibles;

const Slider = React.forwardRef<unknown, AntdSliderSingleProps | AntdSliderRangeProps>(
    ({className, ...props}, ref: any) => {
        const {brand} = useBrandContext();

        const innerClassName = classNames(
            className,
            clsPrefix,
            {[`${clsPrefix}-icloud`]: brand === 'icloud'}
        );
        return <AntdSlider ref={ref} className={innerClassName} {...props} />;
    }
);

export type { SliderSingleProps } from 'antd';
export default Slider;

