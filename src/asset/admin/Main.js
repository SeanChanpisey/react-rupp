import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Main = () => {
  return (
    <div>
      
      <link
        rel="shortcut icon"
        type="image/png"
        href="../asset/images/logos/favicon.png"
      />
      {/* <link rel="stylesheet" href="../asset/admin/css/styles.min.css" /> */}
      <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/asset/admin/css/styles.min.css`} />
      {/*  Body Wrapper */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <Link to="/" className="text-nowrap logo-img">
                <img
                  src="/asset/images/logos/dark-logo.svg"
                  width={180}
                  alt=""
                />
              </Link>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8" />
              </div>
            </div>
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav scroll-sidebar" data-simplebar>
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Home</span>
                </li>
                <li className="sidebar-item">
                  <Link className="sidebar-link" to="/" aria-expanded="false">
                    <span>
                      <i className="ti ti-layout-dashboard" />
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">UI COMPONENTS</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/ui-buttons"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-article" />
                    </span>
                    <span className="hide-menu">Buttons</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/ui-alerts"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-alert-circle" />
                    </span>
                    <span className="hide-menu">Alerts</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/ui-card"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-cards" />
                    </span>
                    <span className="hide-menu">Card</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/ui-forms"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-file-description" />
                    </span>
                    <span className="hide-menu">Forms</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/ui-typography"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-typography" />
                    </span>
                    <span className="hide-menu">Typography</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/login"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-login" />
                    </span>
                    <span className="hide-menu">Login</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/register"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-user-plus" />
                    </span>
                    <span className="hide-menu">Register</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">EXTRA</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/icon-tabler"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mood-happy" />
                    </span>
                    <span className="hide-menu">Icons</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/sample-page"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-aperture" />
                    </span>
                    <span className="hide-menu">Sample Page</span>
                  </Link>
                </li>
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title me-3">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                      Upgrade to pro
                    </h6>
                    <Link
                      to="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                      target="_blank"
                      className="btn btn-primary fs-2 fw-semibold lh-sm"
                    >
                      Buy Pro
                    </Link>
                  </div>
                  <div className="unlimited-access-img">
                    <img
                      src="/asset/images/backgrounds/rocket.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </nav>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <Link
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    to="#"
                  >
                    <i className="ti ti-menu-2" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-icon-hover" to="#">
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </Link>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <Link
                    to="https://adminmart.com/product/modernize-free-bootstrap-admin-dashboard/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Download Free
                  </Link>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav-icon-hover"
                      to="#"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="/asset/images/profile/user-1.jpg"
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-circle"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          to="#"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6" />
                          <p className="mb-0 fs-3">My Profile</p>
                        </Link>
                        <Link
                          to="#"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6" />
                          <p className="mb-0 fs-3">My Account</p>
                        </Link>
                        <Link
                          to="#"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6" />
                          <p className="mb-0 fs-3">My Task</p>
                        </Link>
                        <Link
                          to="/login"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/*  Header End */}
          <div className="container-fluid">
            {/*  Row 1 */}
            <div className="row">
              <div className="col-lg-8 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title fw-semibold">
                          Sales Overview
                        </h5>
                      </div>
                      <div>
                        <select className="form-select">
                          <option value={1}>March 2023</option>
                          <option value={2}>April 2023</option>
                          <option value={3}>May 2023</option>
                          <option value={4}>June 2023</option>
                        </select>
                      </div>
                    </div>
                    <div id="chart" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Yearly Breakup */}
                    <div className="card overflow-hidden">
                      <div className="card-body p-4">
                        <h5 className="card-title mb-9 fw-semibold">
                          Yearly Breakup
                        </h5>
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h4 className="fw-semibold mb-3">$36,358</h4>
                            <div className="d-flex align-items-center mb-3">
                              <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-up-left text-success" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-4">
                                <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                                <span className="fs-2">2023</span>
                              </div>
                              <div>
                                <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                                <span className="fs-2">2023</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-center">
                              <div id="breakup" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* Monthly Earnings */}
                    <div className="card">
                      <div className="card-body">
                        <div className="row alig n-items-start">
                          <div className="col-8">
                            <h5 className="card-title mb-9 fw-semibold">
                              {" "}
                              Monthly Earnings{" "}
                            </h5>
                            <h4 className="fw-semibold mb-3">$6,820</h4>
                            <div className="d-flex align-items-center pb-1">
                              <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-down-right text-danger" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-end">
                              <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                <i className="ti ti-currency-dollar fs-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="earning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <h5 className="card-title fw-semibold">
                        Recent Transactions
                      </h5>
                    </div>
                    <ul className="timeline-widget mb-0 position-relative mb-n5">
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          09:30
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-primary flex-shrink-0 my-8" />
                          <span className="timeline-badge-border d-block flex-shrink-0" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1">
                          Payment received from John Doe of $385.90
                        </div>
                      </li>
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          10:00 am
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-info flex-shrink-0 my-8" />
                          <span className="timeline-badge-border d-block flex-shrink-0" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                          New sale recorded{" "}
                          <Link
                            to="#"
                            className="text-primary d-block fw-normal"
                          >
                            #ML-3467
                          </Link>
                        </div>
                      </li>
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          12:00 am
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8" />
                          <span className="timeline-badge-border d-block flex-shrink-0" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1">
                          Payment was made of $64.95 to Michael
                        </div>
                      </li>
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          09:30 am
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-warning flex-shrink-0 my-8" />
                          <span className="timeline-badge-border d-block flex-shrink-0" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                          New sale recorded{" "}
                          <Link
                            to="#"
                            className="text-primary d-block fw-normal"
                          >
                            #ML-3467
                          </Link>
                        </div>
                      </li>
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          09:30 am
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-danger flex-shrink-0 my-8" />
                          <span className="timeline-badge-border d-block flex-shrink-0" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                          New arrival recorded
                        </div>
                      </li>
                      <li className="timeline-item d-flex position-relative overflow-hidden">
                        <div className="timeline-time text-dark flex-shrink-0 text-end">
                          12:00 am
                        </div>
                        <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                          <span className="timeline-badge border-2 border border-success flex-shrink-0 my-8" />
                        </div>
                        <div className="timeline-desc fs-3 text-dark mt-n1">
                          Payment Done
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold mb-4">
                      Recent Transactions
                    </h5>
                    <div className="table-responsive">
                      <table className="table text-nowrap mb-0 align-middle">
                        <thead className="text-dark fs-4">
                          <tr>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Id</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Assigned</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Name</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Priority</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Budget</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">1</h6>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-1">Sunil Joshi</h6>
                              <span className="fw-normal">Web Designer</span>
                            </td>
                            <td className="border-bottom-0">
                              <p className="mb-0 fw-normal">Elite Admin</p>
                            </td>
                            <td className="border-bottom-0">
                              <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-primary rounded-3 fw-semibold">
                                  Low
                                </span>
                              </div>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0 fs-4">$3.9</h6>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">2</h6>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-1">
                                Andrew McDownland
                              </h6>
                              <span className="fw-normal">Project Manager</span>
                            </td>
                            <td className="border-bottom-0">
                              <p className="mb-0 fw-normal">
                                Real Homes WP Theme
                              </p>
                            </td>
                            <td className="border-bottom-0">
                              <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-secondary rounded-3 fw-semibold">
                                  Medium
                                </span>
                              </div>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0 fs-4">$24.5k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">3</h6>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-1">
                                Christopher Jamil
                              </h6>
                              <span className="fw-normal">Project Manager</span>
                            </td>
                            <td className="border-bottom-0">
                              <p className="mb-0 fw-normal">
                                MedicalPro WP Theme
                              </p>
                            </td>
                            <td className="border-bottom-0">
                              <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-danger rounded-3 fw-semibold">
                                  High
                                </span>
                              </div>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0 fs-4">$12.8k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">4</h6>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                              <span className="fw-normal">
                                Frontend Engineer
                              </span>
                            </td>
                            <td className="border-bottom-0">
                              <p className="mb-0 fw-normal">
                                Hosting Press HTML
                              </p>
                            </td>
                            <td className="border-bottom-0">
                              <div className="d-flex align-items-center gap-2">
                                <span className="badge bg-success rounded-3 fw-semibold">
                                  Critical
                                </span>
                              </div>
                            </td>
                            <td className="border-bottom-0">
                              <h6 className="fw-semibold mb-0 fs-4">$2.4k</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <Link to="#">
                      <img
                        src="../asset/images/products/s4.jpg"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                    </Link>
                    <Link
                      to="#"
                      className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Add To Cart"
                    >
                      <i className="ti ti-basket fs-4" />
                    </Link>{" "}
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Boat Headphone</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $50{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$65</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <Link to="#">
                      <img
                        src="../asset/images/products/s5.jpg"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                    </Link>
                    <Link
                      to="#"
                      className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Add To Cart"
                    >
                      <i className="ti ti-basket fs-4" />
                    </Link>{" "}
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">MacBook Air Pro</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $650{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$900</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <Link to="#">
                      <img
                        src="../asset/images/products/s7.jpg"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                    </Link>
                    <Link
                      to="#"
                      className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Add To Cart"
                    >
                      <i className="ti ti-basket fs-4" />
                    </Link>{" "}
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Red Valvet Dress</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $150{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$200</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <Link to="#">
                      <img
                        src="../asset/images/products/s11.jpg"
                        className="card-img-top rounded-0"
                        alt="..."
                      />
                    </Link>
                    <Link
                      to="#"
                      className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Add To Cart"
                    >
                      <i className="ti ti-basket fs-4" />
                    </Link>{" "}
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Cute Soft Teddybear</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $285{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$345</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className="me-1" to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                        <li>
                          <Link className to="#">
                            <i className="ti ti-star text-warning" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 px-6 text-center">
              <p className="mb-0 fs-4">
                Design and Developed by{" "}
                <Link
                  to="https://adminmart.com/"
                  target="_blank"
                  className="pe-1 text-primary text-decoration-underline"
                >
                  AdminMart.com
                </Link>{" "}
                Distributed by{" "}
                <Link to="https://themewagon.com">ThemeWagon</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
