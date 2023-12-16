import React, { useState } from "react";
import styles from "./faqMainDiv.module.css";

export const FAQ_Component = () => {
  const [faqArr, setFaqArr] = useState([
    {
      id: "1",
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers imporve their frontend coding skills with projects in HTML, CSS, and JavaScript. it's suitable for all levels and ideal for portfolio building.",
      plusIcon: true,
    },
    {
      id: "2",
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      plusIcon: true,
    },
    {
      id: "3",
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!",
      plusIcon: true,
    },
    {
      id: "4",
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      plusIcon: true,
    },
  ]);

  const handleShowPlusMinusIcon = (event) => {
    console.log(event.target.id);
    let clonedArray = faqArr;
    let newFaqArr = clonedArray.map((item) => {
      if (item.id === event.target.id) {
        item.plusIcon = item.plusIcon === false ? true : false;
      }
      return item;
    });
    setFaqArr(newFaqArr);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.FAQMainDiv}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginLeft: "25px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                fill="none"
                viewBox="0 0 40 41"
              >
                <path
                  fill="#AD28EB"
                  d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
                />
              </svg>
            </div>
            <h1>FAQ</h1>
          </div>
          <div className={styles.divOfQuestions}>
            {faqArr.map((item, index) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  margin: "20px",
                  borderRadius: "15px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    key={item.id}
                    id={item.id}
                    className={styles.question}
                    onClick={(item) => handleShowPlusMinusIcon(item)}
                  >
                    {item.question}
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.plusMinusIconStyles}
                  >
                    {item.plusIcon === false ? (
                      <svg
                        onClick={(item) => handleShowPlusMinusIcon(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="31"
                        fill="none"
                        viewBox="0 0 30 31"
                      >
                        <path
                          key={item.id}
                          id={item.id}
                          fill="#301534"
                          d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                        />
                      </svg>
                    ) : (
                      <div onClick={(item) => handleShowPlusMinusIcon(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="31"
                          fill="none"
                          viewBox="0 0 30 31"
                        >
                          <path
                            key={item.id}
                            id={item.id}
                            fill="#AD28EB"
                            d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {item.plusIcon === false ? (
                  <>
                  <p style={{ padding: "10px", display: "flex" }}>
                    {item.answer}
                  </p>
                  <hr style={{border:"1px solid lightGrey",width:"100%"}}/>
                  </>
                ) : (
                  <>
                  <></>
                  <hr style={{border:"1px solid lightGrey",width:"100%"}}/>
                  </>
                )}
              </div>
            ))}
        <div style={{margin:"20px"}}>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a target="blank" href="https://www.linkedin.com/in/nour-eldeen-nasser-562434160/">Nour-Eldeen</a>.
  </div>
          </div>
      
        </div>
      </div>

    </React.Fragment>
  );
};
