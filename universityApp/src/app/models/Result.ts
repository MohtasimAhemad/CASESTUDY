import { Subject } from '../models/Subject';

export class Result {
  id!: string;
  seatNo!: string;
  subject!: Subject[];
  percentage!: number;

  constructor(seatNo: string, subject: Subject[]) {
    this.seatNo = seatNo;
    this.subject = subject;
  }

 
}
export { Subject };

