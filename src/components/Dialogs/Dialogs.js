import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Dialogs</div>
            <div className={s.content}>
                <div className={s.usersList}>
                    <div className={s.userItem}>Andraw</div>
                    <div className={s.userItem}>Dmitry</div>
                    <div className={s.userItem}>Sasha</div>
                    <div className={s.userItem}>Sveta</div>
                    <div className={s.userItem}>Valera</div>
                    <div className={s.userItem}>Victor</div>
                </div>

                <div className={s.dialog}>
                    <div className={s.dialogItem}>Hello</div>
                    <div className={s.dialogItem}>yooo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
