import css from './Notification.module.css'

export const Notification = ({ countTotalFeedback, text, children }) => {
    return (
      <>
        {!countTotalFeedback ? (
          <>
            <p className={`${css.text}`}>{`${text}`}</p>
          </>
        ) : (
          <>{children}</>
        )}
      </>
    );
  };