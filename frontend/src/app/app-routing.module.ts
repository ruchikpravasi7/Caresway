import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

import { HomePageComponent } from './home-page/home-page.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { LoginComponent } from './login/login.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { DoctorClinicsComponent } from './doctor-clinics/doctor-clinics.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DoctorListDoctorDetailsComponent } from './doctor-list-doctor-details/doctor-list-doctor-details.component';
import { DoctorBookAppointmentComponent } from './doctor-book-appointment/doctor-book-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { ClinicListDetailsComponent } from './clinic-list-details/clinic-list-details.component';
import { PatientProfileAboutComponent } from './patient-profile-about/patient-profile-about.component';
import { PatientProfileOtherIllnessComponent } from './patient-profile-other-illness/patient-profile-other-illness.component';
import { PatientProfileOperationsSurgeriesComponent } from './patient-profile-operations-surgeries/patient-profile-operations-surgeries.component';
import { PatientProfileFamilyHistoryComponent } from './patient-profile-family-history/patient-profile-family-history.component';
import { PatientEditProfileComponent } from './patient-edit-profile/patient-edit-profile.component';
import { DoctorAppointmentDetailsComponent } from './doctor-appointment-details/doctor-appointment-details.component';
import { DoctorAppointmentDetailsOtherIllnessComponent } from './doctor-appointment-details-other-illness/doctor-appointment-details-other-illness.component';
import { DoctorAppointmentDetailsoperationsSurgeriesComponent } from './doctor-appointment-detailsoperations-surgeries/doctor-appointment-detailsoperations-surgeries.component';
import { DoctorAppointmentDetailsfamilyHistoryComponent } from './doctor-appointment-detailsfamily-history/doctor-appointment-detailsfamily-history.component';
import { DoctorAppointmentAddPrescriptionComponent } from './doctor-appointment-add-prescription/doctor-appointment-add-prescription.component';
import { DoctorClinicAddComponent } from './doctor-clinic-add/doctor-clinic-add.component';
import { PatientAppointmentPrescriptionComponent } from './patient-appointment-prescription/patient-appointment-prescription.component';
import { DoctorMyProfileComponent } from './doctor-my-profile/doctor-my-profile.component';
import { DoctorMyProfileEditComponent } from './doctor-my-profile-edit/doctor-my-profile-edit.component';
import { PatientChatComponent } from './patient-chat/patient-chat.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'doctors',
    component: DoctorListComponent,
  },
  {
    path: 'doctors/:id',
    component: DoctorListDoctorDetailsComponent,
    children: [
      {
        path: 'bookAppointment',
        component: DoctorBookAppointmentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },

  { path: 'clinics', component: ClinicListComponent },
  {
    path: 'clinics/:id',
    component: ClinicListDetailsComponent,
    children: [
      {
        path: 'bookAppointment',
        component: DoctorBookAppointmentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'doctor_signup', component: DoctorSignupComponent },
  { path: 'patient_signup', component: PatientSignupComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'doctor/:id',
    component: DoctorDashboardComponent,
    children: [
      {
        path: 'appointments',
        component: DoctorAppointmentsComponent,
        canActivate: [AuthGuard],
        
      },
      {
        path: 'appointments/:id1',
        component: DoctorAppointmentDetailsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'prescription',
            component: DoctorAppointmentAddPrescriptionComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'otherIllness',
            component: DoctorAppointmentDetailsOtherIllnessComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'operationsSurgeries',
            component: DoctorAppointmentDetailsoperationsSurgeriesComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'familyHistory',
            component: DoctorAppointmentDetailsfamilyHistoryComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
      {
        path: 'clinics',
        component: DoctorClinicsComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'add',
            component: DoctorClinicAddComponent,
            canActivate: [AuthGuard],
            
          },
        ]
      },
      {
        path: 'myProfile',
        component: DoctorMyProfileComponent,
        canActivate:[AuthGuard],
        // children: [
        //   {
        //     path: 'edit',
        //     component: DoctorMyProfileEditComponent,
        //     canActivate: [AuthGuard],
            
        //   },
        // ]
      },
      {
        path: 'myProfile/edit',
        component: DoctorMyProfileEditComponent,
        canActivate: [AuthGuard],
        
      },

    ],
  },

  // {
  //   path:'patient',
  // },
  {
    path: 'patient/:id',
    component: PatientDashboardComponent,
    children: [
      {
        path: 'appointments',
        component: PatientAppointmentsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'chat',
        component: PatientChatComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'appointments/:id3',
        component: PatientAppointmentPrescriptionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'doctors',
        component: DoctorListComponent,
      },
      {
        path: 'doctors/:id1',
        component: DoctorBookAppointmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'clinics',
        component: ClinicListComponent,
      },
      {
        path: 'clinics/doctors/:id2',
        component: DoctorBookAppointmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: PatientProfileComponent,
        canActivate: [AuthGuard],

        children: [
          
              {
                path: 'about',
                component: PatientProfileAboutComponent,
                canActivate: [AuthGuard],
              },
              {
                path: 'otherIllness',
                component: PatientProfileOtherIllnessComponent,
                canActivate: [AuthGuard],
              },
              {
                path: 'operationsSurgeries',
                component: PatientProfileOperationsSurgeriesComponent,
                canActivate: [AuthGuard],
              },
              {
                path: 'familyHistory',
                component: PatientProfileFamilyHistoryComponent,
                canActivate: [AuthGuard],
              },
            ],
      },

      {
        path: 'profile/edit',
        component: PatientEditProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomePageComponent,
  DoctorListComponent,
  DoctorSignupComponent,
  PatientSignupComponent,
  LoginComponent,
  ClinicListComponent,
  DoctorDashboardComponent,
  PageNotFoundComponent,
  DoctorAppointmentsComponent,
  DoctorClinicsComponent,
  PatientDashboardComponent,
  DoctorListDoctorDetailsComponent,
  DoctorBookAppointmentComponent,
  ClinicListDetailsComponent,
  PatientProfileAboutComponent,
  PatientProfileOtherIllnessComponent,
  PatientProfileOperationsSurgeriesComponent,
  PatientProfileFamilyHistoryComponent,
  PatientEditProfileComponent,
  DoctorAppointmentDetailsComponent,
  DoctorAppointmentDetailsOtherIllnessComponent,
  DoctorAppointmentDetailsoperationsSurgeriesComponent,
  DoctorAppointmentDetailsfamilyHistoryComponent,
  DoctorAppointmentAddPrescriptionComponent,
  DoctorClinicAddComponent,
  PatientAppointmentPrescriptionComponent,
  DoctorMyProfileComponent,
  DoctorMyProfileEditComponent,
  PatientChatComponent
];
