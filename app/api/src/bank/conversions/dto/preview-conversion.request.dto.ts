import { EDirection } from '@luxbank/ports-currency-cloud';
import { ECurrencyCode } from '@luxbank/tools-misc';

export class PreviewConversionRequestDto {
    amount: number;
    sellCurrency: ECurrencyCode;
    buyCurrency: ECurrencyCode;
    date?: string;
    direction: EDirection;
}
