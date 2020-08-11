import React, { CSSProperties } from 'react';
import './index.less';
interface StatusProps {
  className?: string;
  style?: CSSProperties;
}
/**
 * 快捷操作，用于快速的展示一个状态
 */
declare const Status: {
  success: React.FC<StatusProps>;
  error: React.FC<StatusProps>;
  processing: React.FC<StatusProps>;
  default: React.FC<StatusProps>;
  warning: React.FC<StatusProps>;
};
export declare type StatusType = keyof typeof Status;
export default Status;
export declare const Color: React.FC<
  StatusProps & {
    color: string;
  }
>;
