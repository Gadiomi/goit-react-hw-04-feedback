import shortid from 'shortid';
import css from './FeedbackOptions.module.css';

const feedbackOptions = ({ options, feedbackLeft }) => {
  return (
    <>
      <div className={css.button_conteiner}>
        {options.map(label => {
          return (
            <button
              className={css.Feedback_button}
              key={shortid.generate()}
              onClick={() => feedbackLeft(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default feedbackOptions;
