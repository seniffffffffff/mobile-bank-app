export interface CardInfo {
    cardBalance: string
    cardNumber: string
}

export interface CardProps {
    cardInfo: CardInfo
}

export interface TransactionInfo {
    name: string
    amount: number
    date: string
    logo: string
    account: string
    id: number
}

export interface TransactionsProps {
    transaction: TransactionInfo
}
