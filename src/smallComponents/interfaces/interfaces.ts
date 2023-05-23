export interface PageName {
    pageName: string
}

export interface HeaderProps {
    pageName: PageName
}

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

export interface BankAccountInfo {
    cardBalance: string
    cardNumber: string
    id: number
}

export interface BankAccountProps {
    bankAccountInfo: BankAccountInfo
}

export interface SectionProps {
    sectionName: string
}