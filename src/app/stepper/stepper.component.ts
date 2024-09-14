import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepperServiceService } from '../stepper-service.service';
import { HttpClientModule } from '@angular/common/http';

export interface IEmployeeObj {
  roleId: 0;
  userName: string;
  empCode: string;
  empId: 0;
  empName: string;
  empEmailId: string;
  empDesignationId: 0;
  empContactNo: string;
  empAltContactNo: string;
  empPersonalEmailId: string;
  empExpTotalYear: 0;
  empExpTotalMonth: 0;
  empCity: string;
  empState: string;
  empPinCode: string;
  empAddress: string;
  empPerCity: string;
  empPerState: string;
  empPerPinCode: string;
  empPerAddress: string;
  password: string;
  employeeSkills: IEmployeeSkills[];
  employeeExperience: IEmployeeExperience[];
}

export interface IEmployeeSkills {
  empId: number;
  skill: string;
  totalYearExp: number;
  lastVersionUsed: string;
}

export interface IEmployeeExperience {
  empExpId: number;
  empId: number;
  companyName: string;
  startDate: string;
  endDate: string;
  designation: string;
  projectsWorkedOn: string;
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
// Create array of objects -> steps should be dynamic, should not be static so ngFor
// Selected state should be dynamic -> create variable to store active step
// on li click that particular step
export class StepperComponent implements OnInit {
  designationList: any[] = [];
  rolesList: any[] = [];
  activeStepIndex = 0;
  stepperCompletionValue = 8;

  constructor(private stepperService: StepperServiceService) {

  }

  ngOnInit(): void {
      this.getRoles();
      this.getDesignation();
  }

  employee: IEmployeeObj = {
    roleId: 0,
    userName: '',
    empCode: '',
    empId: 0,
    empName: '',
    empEmailId: '',
    empDesignationId: 0,
    empContactNo: '',
    empAltContactNo: '',
    empPersonalEmailId: '',
    empExpTotalYear: 0,
    empExpTotalMonth: 0,
    empCity: '',
    empState: '',
    empPinCode: '',
    empAddress: '',
    empPerCity: '',
    empPerState: '',
    empPerPinCode: '',
    empPerAddress: '',
    password: '',
    employeeSkills: [],
    employeeExperience: []
  };

  steps: any[] = [
    { stepName: 'Basic Details', isActive: false },
    { stepName: 'Skills', isActive: false },
    { stepName: 'Experience', isActive: false },
  ];

  activeStep: any = this.steps[0];

  setActiveStep(index: number) {
    this.activeStepIndex = index;
    this.steps.forEach((step, i) => {
      step.isActive = i === index;
    });
  }

  addSkills() {
    const empSkillObj = {
      empId: 0,
      skill: '',
      totalYearExp: 0,
      lastVersionUsed: ''
    };
    this.employee.employeeSkills.unshift(empSkillObj);
  }

  addExp() {
    const empExpObj = {
      empExpId: 0,
      empId: 0,
      companyName: '',
      startDate: '',
      endDate: '',
      designation: '',
      projectsWorkedOn: ''
    };
    this.employee.employeeExperience.unshift(empExpObj);
  }

  saveEmployee() {
    this.stepperService.createEmployee(this.employee).subscribe((res)=>{
      if(res.result) {
        alert('Employee created');
        this.setActiveStep(0);
        this.stepperCompletionValue = 8;
      }
    })
  }

  getRoles() {
    this.stepperService.getRoles().subscribe((res)=>{
      this.rolesList = res.data;
    })
  }

  getDesignation() {
    this.stepperService.getDesignation().subscribe((res)=>{
      this.designationList = res.data;
    })
  }

  gotoStep2() {
   // this.setActiveStep(1);
    this.activeStepIndex = 1;
    this.stepperCompletionValue = 50;
  }

  gotoStep3() {
  //  this.setActiveStep(2);
    this.activeStepIndex = 2;
    this.stepperCompletionValue = 100;
  }

  finish() {
    this.setActiveStep(0);
    this.stepperCompletionValue = 8;
  }

    // Method to calculate progress percentage
    getProgressPercentage(): number {
      const currentIndex = this.steps.indexOf(this.activeStep);
      return ((currentIndex + 1) / this.steps.length) * 100;
    }
}
