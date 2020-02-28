import React from 'react';
import PropTypes from 'prop-types';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Comment.module.scss';

const Comment = ({ data }) => {
  const handleReply = () => {};

  const handleVote = () => {};

  const handleOpposite = () => {};

  return (
    <div className={styles.root}>
      <img src={data.avatar} alt="user avatar" className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.title}>{data.title}</span>
          <span className={styles['publish-date']}>
            &nbsp;&#183;&nbsp;{data.publishDate}
          </span>
        </div>
        <p className={styles.comment}>{data.comment}</p>
        <div className={styles.footer}>
          <span
            role="button"
            className={styles.reply}
            onClick={handleReply}
            onKeyPress={handleReply}
            tabIndex={0}
          >
            REPLY
          </span>
          <span className={styles['reply-cnt']}>
            <strong>{data.replies}</strong> REPLIES
          </span>
          <span
            role="button"
            className={styles.vote}
            onClick={handleVote}
            onKeyPress={handleVote}
            tabIndex={0}
          >
            <FontAwesomeIcon className={styles.icon} icon={faChevronUp} />
            {` ${data.vote}`}
          </span>
          <span
            role="button"
            className={styles.opposite}
            onClick={handleOpposite}
            onKeyPress={handleOpposite}
            tabIndex={0}
          >
            <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
            {` ${data.opposite}`}
          </span>
        </div>
      </div>
    </div>
  );
};

Comment.defaultProps = {
  data: null
};

Comment.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    publishDateText: PropTypes.string,
    comment: PropTypes.string,
    replies: PropTypes.number,
    vote: PropTypes.number,
    opposite: PropTypes.number
  })
};

export default Comment;
