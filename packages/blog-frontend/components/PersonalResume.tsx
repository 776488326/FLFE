'use client';
import React, { useEffect } from 'react';
import "./style.css";
export interface ResumeProps {
  name: string;
  title: string;
  photo: string;
  socialMedia: { platform: string; link: string; icon: string }[];
  workExperience: { year: string; position: string; description: string }[];
  education: { year: string; degree: string; description: string }[];
  services: { title: string; description: string; icon: string }[];
  skills: { category: string; items: { name: string; icon: string }[] }[];
  latestProject: { name: string; techUsed: string; image: string; livePreview: string; sourceCode: string };
}

const   PersonalResume: React.FC<ResumeProps> = ({
  name,
  title,
  photo,
  socialMedia,
  workExperience,
  education,
  services,
  skills,
  latestProject,
}) => {
  useEffect(() => {
    const pageTurnBtn = document.querySelectorAll<HTMLButtonElement>(".nextprev-btn");
    pageTurnBtn.forEach((el, index) => {
      el.onclick = () => {
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId!); // 使用非空断言

        if (pageTurn && pageTurn.classList.contains("turn")) {
          pageTurn.classList.remove("turn");
          setTimeout(() => {
            pageTurn.style.zIndex = (20 - index).toString(); // 确保 zIndex 是字符串
          }, 500);
        } else if (pageTurn) {
          pageTurn.classList.add("turn");
          setTimeout(() => {
            pageTurn.style.zIndex = (20 + index).toString(); // 确保 zIndex 是字符串
          }, 500);
        }
      };
    });

    const pages = document.querySelectorAll<HTMLElement>(".book-page.page-right");
    const contactMeBtn = document.querySelector<HTMLButtonElement>(".btn.contact-me");
    const backProfileBtn = document.querySelector<HTMLButtonElement>(".back-profile");
    
    if (contactMeBtn) {
      contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
          setTimeout(() => {
            page.classList.add("turn");
            setTimeout(() => {
              page.style.zIndex = (20 + index).toString(); // 确保 zIndex 是字符串
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    let totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex() {
      pageNumber--;
      if (pageNumber < 0) {
        pageNumber = totalPages - 1;
      }
    }

    if (backProfileBtn) {
      backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(() => {
              reverseIndex();
              pages[pageNumber].style.zIndex = (10 + index).toString(); // 确保 zIndex 是字符串
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    // opening animation
    const coverRight = document.querySelector<HTMLElement>(".cover.cover-right");
    const pageLeft = document.querySelector<HTMLElement>(".book-page.page-left");

    // opening animation (cover right animation)
    setTimeout(() => {
      if (coverRight) coverRight.classList.add("turn");
    }, 2100);

    setTimeout(() => {
      if (coverRight) coverRight.style.zIndex = "-1"; // 确保 zIndex 是字符串
    }, 2800);

    // opening animation (page left or profile page animation)
    setTimeout(() => {
      if (pageLeft) pageLeft.style.zIndex = "20"; // 确保 zIndex 是字符串
    }, 3200);

    // opening animation (all page right animation)
    pages.forEach((_, index) => {
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove("turn");
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].style.zIndex = (10 + index).toString(); // 确保 zIndex 是字符串
        }, 500);
      }, (index + 1) * 200 + 2100);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="cover cover-left"></div>
      <div className="cover cover-right"></div>

      <div className="book">
        {/* profile page */}
        <div className="book-page page-left">
          <div className="profile-page">
            <img src={photo} alt={name} />
            <h1>{name}</h1>
            <h3>{title}</h3>

            <div className="social-media">
              {socialMedia.map((media) => (
                <a href={media.link} key={media.platform}>
                  <i className={media.icon}></i>
                </a>
              ))}
            </div>

            <p>
              嗨，我是 {name}，一名 {title}。我热爱编程和设计，致力于创造出色的用户体验。我的专业技能包括前端开发、用户界面设计和项目管理。我相信通过不断学习和实践，可以不断提升自己的能力，为团队和客户创造更大的价值。
            </p>

            <div className="btn-box">
              <a href="#" className="btn">QQ: 776488326</a>
              <a href="#" className="btn contact-me">WX: 15135256460</a>
            </div>
          </div>
        </div>

        {/* page 1 & 2 */}
        <div className="book-page page-right turn" id="turn-1">
          {/* page 1 (work experience) */}
          <div className="page-front">
            <h1 className="title">工作经验</h1>
            <div className="workeduc-box">
              {workExperience.map((work) => (
                <div className="workeduc-content" key={work.year}>
                  <span className="year"><i className="bx bxs-calendar"></i>{work.year}</span>
                  <h3>{work.position}</h3>
                  <p>{work.description}</p>
                </div>
              ))}
            </div>
            <span className="number-page">1</span>
            <span className="nextprev-btn flex items-center" data-page="turn-1">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" /> {/* 右箭头 */}
              </svg>
            </span>
          </div>

          {/* page 2 (education) */}
          <div className="page-back">
            <h1 className="title">教育经历</h1>
            <div className="workeduc-box">
              {education.map((edu) => (
                <div className="workeduc-content" key={edu.year}>
                  <span className="year"><i className="bx bxs-calendar"></i>{edu.year}</span>
                  <h3>{edu.degree}</h3>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
            <span className="number-page">2</span>
            <span className="nextprev-btn back" data-page="turn-1">
            <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6l-6 6 6 6" /> {/* 左箭头 */}
              </svg>
            </span>
          </div>
        </div>

        {/* page 3 & 4 */}
        <div className="book-page page-right turn" id="turn-2">
          {/* page 3 (my services) */}
          <div className="page-front">
            <h1 className="title">项目经历</h1>
            <div className="services-box">
              {services.map((service) => (
                <div className="services-content" key={service.title}>
                  <i className={service.icon}></i>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#" className="btn">Read More</a>
                </div>
              ))}
            </div>
            <span className="number-page">3</span>
            <span className="nextprev-btn" data-page="turn-2">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" /> {/* 右箭头 */}
              </svg>
            </span>
          </div>

          {/* page 4 (my skills) */}
          <div className="page-back">
            <h1 className="title">我的技能</h1>
            <div className="skills-box">
              {skills.map((skill) => (
                <div className="skills-content" key={skill.category}>
                  <h3>{skill.category}</h3>
                  <div className="content">
                    {skill.items.map((item) => (
                      <span key={item.name}><i className={item.icon}></i>{item.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <span className="number-page">4</span>
            <span className="nextprev-btn back" data-page="turn-2">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6l-6 6 6 6" /> {/* 左箭头 */}
              </svg>
              </svg>
            </span>
          </div>
        </div>

        {/* page 5 & 6 */}
        <div className="book-page page-right turn" id="turn-3">
          {/* page 5 (latest project or my portfolio) */}
          <div className="page-front">
            <h1 className="title">最近项目</h1>
            <div className="portfolio-box">
              <div className="img-box">
                <img src={latestProject.image} alt={latestProject.name} />
              </div>
              <div className="info-box">
                <div className="info-title">
                  <h3>{latestProject.name}</h3>
                  <a href={latestProject.livePreview}>Live Preview <i className="bx bx-link-external"></i></a>
                </div>
                <p>Tech Used: {latestProject.techUsed}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dignissimos. Earum suscipit eos sit
                  odit sapiente minus delectus vitae illum!</p>
              </div>
              <div className="btn-box">
                <a href={latestProject.sourceCode} className="btn">Source Code</a>
                <a href="#" className="btn">More Projects</a>
              </div>
            </div>
            <span className="number-page">5</span>
            <span className="nextprev-btn" data-page="turn-3">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l6 6-6 6" /> {/* 右箭头 */}
              </svg>
            </span>
          </div>

          {/* page 6 (contact me) */}
          <div className="page-back">
            <h1 className="title">联系我</h1>
            <div className="contact-box">
              <form action="#">
                <input type="text" className="field" placeholder="Full Name" required />
                <input type="email" className="field" placeholder="Email Address" required />
                <textarea className="field" placeholder="Your Message" required></textarea>
                <input type="submit" className="btn" value="Send Message" />
              </form>
            </div>
            <span className="number-page">6</span>
            <span className="nextprev-btn back" data-page="turn-3">
            <svg className="w-4 h-4 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6l-6 6 6 6" /> {/* 左箭头 */}
              </svg>
            </span>
            <a href="#" className="back-profile">
              <p>Profile</p>
              <i className="bx bxs-user"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalResume; 