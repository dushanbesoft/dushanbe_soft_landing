"use client";

import React, { useState } from "react";
import styles from "./JobsSection.module.css";
import Link from "next/link";
import { FadeIn } from "../MotionWrapper";
import { jobsData } from "@/const/jobsData";

export default function JobsClient({ lang }: { lang: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter === "" || job.categoryValue === categoryFilter;
    
    let matchType = false;
    if (typeFilter === "") {
      matchType = true;
    } else if (typeFilter === "hybrid") {
      matchType = job.typeValue === "hybrid";
    } else {
      matchType = job.typeValue === typeFilter || job.typeValue === "hybrid";
    }

    const matchExperience = experienceFilter === "" || job.experienceValue === experienceFilter;
    return matchSearch && matchCategory && matchType && matchExperience;
  });

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.searchBox}>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.59752 7.47098C4.59752 5.24923 6.39859 3.44816 8.62033 3.44816C10.8421 3.44816 12.6431 5.24923 12.6431 7.47098C12.6431 9.69272 10.8421 11.4938 8.62033 11.4938C6.39859 11.4938 4.59752 9.69272 4.59752 7.47098ZM8.62033 1.14941C5.12902 1.14941 2.29877 3.97967 2.29877 7.47098C2.29877 10.9623 5.12902 13.7925 8.62033 13.7925C9.60599 13.7925 10.539 13.5669 11.3704 13.1646L14.0152 16.771C14.3905 17.2828 15.1098 17.3935 15.6216 17.0181C16.1336 16.6428 16.2442 15.9235 15.8689 15.4115L13.2232 11.804C14.2889 10.6725 14.9419 9.14797 14.9419 7.47098C14.9419 3.97967 12.1117 1.14941 8.62033 1.14941Z" fill="#9EAABB"/>
          </svg>
          <input 
            type="text" 
            placeholder="Поиск вакансии" 
            className={styles.searchInput} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.selectBox}>
          <select 
            className={styles.select} 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Направление</option>
            <option value="it">IT</option>
            <option value="design">Дизайн</option>
          </select>
        </div>

        <div className={styles.selectBox}>
          <select 
            className={styles.select}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Формат работы</option>
            <option value="remote">Удалённо</option>
            <option value="office">В офисе</option>
            <option value="hybrid">В офисе / Удалённо</option>
          </select>
        </div>

        <div className={styles.selectBox}>
          <select 
            className={styles.select}
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
          >
            <option value="">Опыт</option>
            <option value="junior">Без опыта</option>
            <option value="middle">1-3 года</option>
            <option value="senior">3+ года</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredJobs.length === 0 ? (
           <FadeIn style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center" }}>
             <p style={{ color: "#9EAABB", textAlign: "center", width: "100%", padding: "40px 20px", fontSize: "16px", fontFamily: "'Nunito Sans', sans-serif" }}>
               К сожалению, по вашему запросу ничего не найдено.
             </p>
           </FadeIn>
        ) : (
          filteredJobs.map((job, index) => (
            <FadeIn key={job.slug} delay={index * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {job.categoryValue === "it" ? (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0074 21.1518L28 14L21.0074 6.84816L18.8948 9.00434L23.8045 14L18.8948 18.9957L21.0074 21.1518ZM9.10521 18.9957L4.19554 14L9.10521 9.00434L6.99256 6.84816L0 14L6.99256 21.1518L9.10521 18.9957ZM16.9756 0.334056L15.5175 0L12.542 13.6659L9.56642 27.3319L11.0244 27.6659L12.4825 28L15.458 14.3341L18.4336 0.668113L16.9756 0.334056Z" fill="url(#paint0_linear_it)"/>
                      <defs>
                        <linearGradient id="paint0_linear_it" x1="1.87564" y1="21" x2="26.1244" y2="7" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3DDC84"/>
                          <stop offset="1" stopColor="#02704F"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.2783 23.0938C20.9195 25.5065 17.634 27 13.9932 27H13.9912C12.603 27.0029 11.2271 26.7804 9.91504 26.3467L18.2236 18.0391L23.2783 23.0938ZM14 1C21.177 1 27 6.82299 27 14V14.001C27.0012 14.9054 26.9078 15.8063 26.7227 16.6885L18.9365 8.90234C18.749 8.71494 18.4946 8.60943 18.2295 8.60938C17.9975 8.60937 17.7736 8.69028 17.5957 8.83594L17.5225 8.90234L4.05566 22.3682C2.08435 20.0385 0.994328 17.0754 1 14.002V14C1 6.82299 6.823 1 14 1Z" stroke="url(#paint0_linear_design)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_design" x1="1.87564" y1="21" x2="26.1244" y2="7" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#3DDC84"/>
                          <stop offset="1" stopColor="#02704F"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  <span className={styles.categoryBadge}>{job.categoryLabel}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{job.title}</h3>
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 16C6 16 12 10.314 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 2.37122e-08 4.4087 0 6C0 10.314 6 16 6 16ZM6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9Z" fill="url(#paint0_linear_meta)"/>
                        <defs>
                          <linearGradient id="paint0_linear_meta" x1="0.803848" y1="12" x2="12.4724" y2="6.94737" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3DDC84"/>
                            <stop offset="1" stopColor="#02704F"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.typeLabel}>{job.typeLabel}</span>
                    </div>
                  </div>
                  <p className={styles.cardDesc}>{job.description}</p>
                </div>

                <Link href={`/${lang}/jobs/${job.slug}`} className={styles.detailsBtn} style={{ textDecoration: 'none', width: 'fit-content' }}>
                  Подробнее
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9686 7.25998C13.8673 7.16557 13.786 7.05172 13.7297 6.92522C13.6733 6.79872 13.643 6.66216 13.6406 6.5237C13.6381 6.38523 13.6636 6.24769 13.7155 6.11928C13.7673 5.99087 13.8445 5.87423 13.9424 5.7763C14.0404 5.67838 14.157 5.60118 14.2854 5.54931C14.4138 5.49744 14.5514 5.47197 14.6898 5.47441C14.8283 5.47686 14.9649 5.50717 15.0914 5.56353C15.2179 5.61989 15.3317 5.70116 15.4261 5.80248L19.8963 10.2712L20.625 11L19.8963 11.7287L15.4275 16.1975C15.2331 16.3854 14.9726 16.4895 14.7023 16.4873C14.4319 16.485 14.1732 16.3767 13.9819 16.1856C13.7906 15.9945 13.682 15.7359 13.6795 15.4655C13.677 15.1951 13.7809 14.9346 13.9686 14.74L16.6774 12.0312H2.40625C2.13275 12.0312 1.87044 11.9226 1.67705 11.7292C1.48365 11.5358 1.375 11.2735 1.375 11C1.375 10.7265 1.48365 10.4642 1.67705 10.2708C1.87044 10.0774 2.13275 9.96873 2.40625 9.96873H16.6774L13.9686 7.25998Z" fill="#9EAABB"/>
                  </svg>
                </Link>
              </div>
            </FadeIn>
          ))
        )}
      </div>
    </>
  );
}
