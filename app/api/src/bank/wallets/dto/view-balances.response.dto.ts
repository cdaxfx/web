import { ECurrencyCode } from '@luxbank/tools-misc';

export class ViewBalancesResponseDto {
    currency: ECurrencyCode;
    name: string;
    amount: number;
}

export class ViewBalancesPaginatedResponseDto {
    data: ViewBalancesResponseDto[];
}
