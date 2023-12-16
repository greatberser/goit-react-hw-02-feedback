import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrOptions = Object.keys(options);
  return (
    <div className={`${css.container}`}>
      {arrOptions.map(option => {
        return (
          <button
            key={option}
            data-state={option}
            className={`${css.button}`}
            onClick={evt => {
              onLeaveFeedback(evt);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};