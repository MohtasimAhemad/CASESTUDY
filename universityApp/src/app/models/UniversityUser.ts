import { Address } from '../models/Address'; 
import { Result } from './Result';

export class UniversityUser {
  id!: string;
  firstName!: string;
  lastName!: string;
  fullName!: string;
  motherName!: string;
  userName!: string;
  email!: string;
  seatNo!: string;
  password!: string;
  phoneNumber!: string;
  prn!: string;
  dateOfBirth!: string;
  gender!: string;
  nationality!: string;
  aadhaarNo!: string;
  studentCollageName!: string;
  course!: string;
  branch!: string;
  role!: string;
  year!: string;
  address!: Address; 
  result!: Result; 
}
