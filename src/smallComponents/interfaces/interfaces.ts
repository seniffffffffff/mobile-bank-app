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

export interface ExpensInfo {
    nameExpens: string
    totalSpend: string
    totalBudget: string
    percentageSpent: number
    date: string
    logo: string
    id: number
}

export interface ExpensProps {
    expensInfo: ExpensInfo
}

export interface LinearProgressValue {
    progressValue: number
}

export interface MonthInCome {
    month: string
    expens: number
    id: number
}

export interface MonthInComeProps {
    monthInCome: MonthInCome
    maxValue: number
}
