import { Injectable } from '@angular/core';
import { Adapter } from '../../../core/adapter';

export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public dob: Date,
    public gender: string,
    public education: string,
    public company: string,
    public experience: number,
    public salary: number
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeAdapter implements Adapter<Employee> {
  adapt(item: any): Employee {
    return new Employee(
      item.id,
      item.firstName,
      item.lastName,
      item.email,
      new Date(item.dob),
      item.gender,
      item.education,
      item.company,
      item.experience,
      item.package
    );
  }
}
