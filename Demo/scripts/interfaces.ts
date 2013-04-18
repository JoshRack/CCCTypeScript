interface ILogSummary {
    id: number;
    eventDate: Date;
    level: string;
    message: string;
}

interface ILogDetail extends ILogSummary {
    appDomain: string;
    thread: string;
}