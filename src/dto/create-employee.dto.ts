// DTO stands for Data Transfer Object.
// It encapsulates the data and defines how it will be transmitted over the network
import { Employee } from 'src/schema/employee.schema';

export class CreateEmployeeDto extends Employee {}
