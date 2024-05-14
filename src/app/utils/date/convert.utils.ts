import { DatePipe } from '@angular/common';

export const formatDate = (date: string) => {
    if (!date) {
        throw new Error('Date is required');
    }
    const newDate = new Date(date);
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(newDate, 'yyyy-MM-dd');
}

