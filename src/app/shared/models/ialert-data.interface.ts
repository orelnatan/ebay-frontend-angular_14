import { alert } from '@ebay/shared/types';

import { IAction } from "./iaction.model";

export interface IAlertData {
    type: alert;
    title?: string;
    subTitle?: string;
    content?: string;
    actions?: Array<IAction>;
}

