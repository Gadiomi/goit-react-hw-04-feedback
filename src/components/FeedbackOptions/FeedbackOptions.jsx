import shortid from 'shortid';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, FeedbackLeft }) => {
  return (
    <>
      <div className={css.button_conteiner}>
        {options.map(label => {
          return (
            <button
              className={css.Feedback_button}
              key={shortid.generate()}
              onClick={() => FeedbackLeft(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackOptions;
