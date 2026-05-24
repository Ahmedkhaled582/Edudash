"use client";
/* eslint-disable @next/next/no-img-element */
/* Auto-generated from static HTML — preserve class names for theme/CSS */
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

export default function Sidebar() {
  const { user } = useAuthStore();
  return (
    <>
      <aside className="sidebar">
        <button type="button" className="sidebar-close-btn">
          <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
        </button>
        <div className="">
          <div className="sidebar-logo d-flex align-items-center justify-content-between">
            <Link href="/" className="">
              <img src="/assets/images/logo.png" alt="site logo" className="light-logo" />
              <img src="/assets/images/logo-light.png" alt="site logo" className="dark-logo" />
              <img src="/assets/images/logo-icon.png" alt="site logo" className="logo-icon" />
            </Link>
            <button type="button" className="text-xxl d-xl-flex d-none line-height-1 sidebar-toggle text-neutral-500"
              aria-label="Collapse Sidebar">
              <i className="ri-contract-left-line"></i>
            </button>
          </div>
        </div>
        
        <div className="mx-16 py-12">
          <div className="dropdown profile-dropdown">
            <button type="button"
              className="profile-dropdown__button d-flex align-items-center justify-content-between p-10 w-100 overflow-hidden bg-neutral-50 radius-12 "
              data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              <span className="d-flex align-items-start gap-10">
                <img src={user?.profileImage} alt="Thumbnail"
                  className="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0" />
                <span className="profile-dropdown__contents">
                  <span className="h6 mb-0 text-md d-block text-primary-light">{user?.fullName}</span>
                  <span className="text-secondary-light text-sm mb-0 d-block">{user?.rollNo}</span>
                </span>
              </span>
              <span className="profile-dropdown__icon pe-8 text-xl d-flex line-height-1">
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end border p-12">
              <li>
                <Link href="/student-details" 
                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                  <i className="ri-user-3-line"></i>
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/general"
                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                  <i className="ri-settings-3-line"></i>
                  Setting
                </Link>
              </li>
              <li>
                <Link href="/login"
                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                  <i className="ri-shut-down-line"></i>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="sidebar-menu-area">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li className="dropdown">
              <Link href="#">
                <i className="ri-home-4-line"></i>
                <span>Dashboard </span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    School
                  </Link>
                </li>
                <li>
                  <Link href="/index-2">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Student
                  </Link>
                </li>
                <li>
                  <Link href="/index-3">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Teacher
                  </Link>
                </li>
                <li>
                  <Link href="/index-4">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Parent
                  </Link>
                </li>
                <li>
                  <Link href="/index-5">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    LMS 
                  </Link>
                </li>
                <li>
                  <Link href="/index-6">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    University 
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-graduation-cap-line"></i>
                <span>Students</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/add-new-student">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Add New Student
                  </Link>
                </li>
                <li>
                  <Link href="/student-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Student List
                  </Link>
                </li>
                <li>
                  <Link href="/suspended-student">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Suspend Student
                  </Link>
                </li>
                <li>
                  <Link href="/student-category">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Student Categories
                  </Link>
                </li>
                <li>
                  <Link href="/edit-student">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Edit Student
                  </Link>
                </li>
                <li>
                  <Link href="/student-details">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Student Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-user-follow-line"></i>
                <span>Teachers</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/add-new-teacher">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Add New Teacher
                  </Link>
                </li>
                <li>
                  <Link href="/teacher-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Teacher List
                  </Link>
                </li>
                <li>
                  <Link href="/edit-teacher">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Edit Teacher
                  </Link>
                </li>
                <li>
                  <Link href="/teacher-details">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Teacher Details
                  </Link>
                </li>
                <li>
                  <Link href="/teacher-timetable">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Teacher Timetable
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-account-circle-line"></i>
                <span>Guardian</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/add-new-guardian">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Add New Guardians
                  </Link>
                </li>
                <li>
                  <Link href="/guardian-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Guardians List
                  </Link>
                </li>
                <li>
                  <Link href="/edit-guardian">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Edit Guardian
                  </Link>
                </li>
                <li>
                  <Link href="/guardian-details">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Guardian Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-list-view"></i>
                <span>Classes</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/section-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Section
                  </Link>
                </li>
                <li>
                  <Link href="/subject-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link href="/class-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Class List
                  </Link>
                </li>
                <li>
                  <Link href="/class-room-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Class Room
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-file-edit-line"></i>
                <span>Examinations</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/exam">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Exam
                  </Link>
                </li>
                <li>
                  <Link href="/exam-schedule">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Exam Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/exam-result">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Exam Result
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-money-dollar-circle-line"></i>
                <span>Fees Collection</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/fees-collect">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Fees Collect
                  </Link>
                </li>
                <li>
                  <Link href="/fees-type">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Fees Type
                  </Link>
                </li>
                <li>
                  <Link href="/fees-group">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Fees Group
                  </Link>
                </li>
                <li>
                  <Link href="/fees-discount">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Fees Discount
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-calendar-check-line"></i>
                <span>Attendance</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/student-attendance">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Student Attendance
                  </Link>
                </li>
                <li>
                  <Link href="/teacher-attendance">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Teacher Attendance
                  </Link>
                </li>
                <li>
                  <Link href="/employee-attendance">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Employee Attendance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-time-line"></i>
                <span>Leaves</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/leave-types">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Leave Types
                  </Link>
                </li>
                <li>
                  <Link href="/leave-request">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Leave Request
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/certificate">
                <i className="ri-home-4-line"></i>
                <span>Certificate </span>
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-book-2-line"></i>
                <span>Library</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/books-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Books List
                  </Link>
                </li>
                <li>
                  <Link href="/members-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Members List
                  </Link>
                </li>
                <li>
                  <Link href="/member-details">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Members Details
                  </Link>
                </li>
                <li>
                  <Link href="/issue-return">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Issue Return
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-money-dollar-circle-line"></i>
                <span>Accounts</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/income-head">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Income Head
                  </Link>
                </li>
                <li>
                  <Link href="/income-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Income List
                  </Link>
                </li>
                <li>
                  <Link href="/expense-head">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Expense Head
                  </Link>
                </li>
                <li>
                  <Link href="/expense-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Expense List
                  </Link>
                </li>
                <li>
                  <Link href="/transaction">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Transaction
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-user-settings-line"></i>
                <span>HRM</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/employee-list">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Employee List
                  </Link>
                </li>
                <li>
                  <Link href="/employee-details">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Employee Details
                  </Link>
                </li>
                <li>
                  <Link href="/add-new-employee">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Add New Employee
                  </Link>
                </li>
                <li>
                  <Link href="/payroll">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Payroll
                  </Link>
                </li>
                <li>
                  <Link href="/designation">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Designation
                  </Link>
                </li>
                <li>
                  <Link href="/department">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Department
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/notice-board">
                <i className="ri-booklet-line"></i>
                <span>Notice Board </span>
              </Link>
            </li>
            <li>
              <Link href="/event">
                <i className="ri-calendar-event-line"></i>
                <span>Event </span>
              </Link>
            </li>
            <li>
              <Link href="/message">
                <i className="ri-message-2-line"></i>
                <span>Message </span>
              </Link>
            </li>
            <li>
              <Link href="/subscription-plan">
                <i className="ri-price-tag-3-line"></i>
                <span>Subscription Plan </span>
              </Link>
            </li>
            <li>
              <Link href="/role-access">
                <i className="ri-macbook-line"></i>
                <span>Role & Access</span>
              </Link>
            </li>
               <li className="dropdown">
              <Link href="#">
                <i className="ri-shield-check-line"></i>
                <span>Authentication</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/login"><i className="ri-circle-fill circle-icon text-primary-600 w-auto"></i> Login</Link>
                </li>
                <li>
                  <Link href="/register"><i className="ri-circle-fill circle-icon text-warning-main w-auto"></i> Register</Link>
                </li>
                 <li>
                  <Link href="/school-register"><i className="ri-circle-fill circle-icon text-warning-main w-auto"></i> School Register</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/assign-role-plan">
                <i className="ri-user-follow-line"></i>
                <span>Assign Role</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <i className="ri-user-settings-line"></i>
                <span>Settings</span>
              </Link>
              <ul className="sidebar-submenu">
                <li>
                  <Link href="/general">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    General
                  </Link>
                </li>
                <li>
                  <Link href="/notification">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link href="/currencies">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Currencies
                  </Link>
                </li>
                <li>
                  <Link href="/languages">
                    <i className="ri-circle-fill circle-icon w-auto"></i>
                    Languages
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}