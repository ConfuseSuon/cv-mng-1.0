import React, { useEffect } from "react";
import SidebarToggle from "../Shared-Layout/SidebarToggle";
import { useDispatch, useSelector } from "react-redux";

import { BiSearchAlt } from "react-icons/bi";
import homeStyles from "../style/home.module.css";
import { searchTerm } from "../Features/shared/sharedSlice";

const HomePageHeader = () => {
  const dispatch = useDispatch();
  const getUserInfo = JSON.parse(localStorage.getItem("key"));
  const { searchQuery } = useSelector((store) => store.sharedFeatures);
  const { applicantData } = useSelector((store) => store.applicant);
  const { closeSideBar } = useSelector((store) => store.sharedFeatures);

  useEffect(() => {
    const reusult = search(searchQuery);
    console.log(reusult, "searchReuslt");
  }, [searchQuery]);

  const search = (query) => {
    const searchResults = applicantData.filter((applicant) => {
      const { fullName, email, technology, status } = applicant;
      const searchLower = query.toLowerCase();
      return (
        fullName.toLowerCase().includes(searchLower) ||
        email.toLowerCase().includes(searchLower) ||
        technology.toLowerCase().includes(searchLower) ||
        status.toLowerCase().includes(searchLower)
      );
    });

    return searchResults;
  };

  return (
    <React.Fragment>
      <header
        className={`${closeSideBar ? "add-header header-full" : "add-header"}`}
      >
        <SidebarToggle className={homeStyles.homeSearchbox} />

        <div className={homeStyles.homeSearchbox}>
          <BiSearchAlt className={homeStyles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(searchTerm(e.target.value))}
            placeholder="search here..."
          />
        </div>

        <div className={homeStyles.userImgContainer}>
          <img src={getUserInfo.picture} alt="user_img" />
          <div className={homeStyles.userText}>
            <span className={homeStyles.email}>{getUserInfo.email}</span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HomePageHeader;
