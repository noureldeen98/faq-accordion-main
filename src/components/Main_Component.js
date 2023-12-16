import React from 'react'
import styles from './mainComponentStyles.module.css'
import {FAQ_Component} from './faq_Component/FAQ_Component'
export const Main_Component =()=>{
    return(
        <React.Fragment>
            <div className={styles.mainComponent}>
               <div className={styles.subDivBackgroundImage}>
                 <FAQ_Component/>
               </div>

            </div>
        </React.Fragment>
    )
}