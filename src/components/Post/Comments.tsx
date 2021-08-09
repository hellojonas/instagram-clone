import React from 'react';
import { HeartIcon } from '../icons';
import styles from './Comments.module.css';

export interface ICommentsProps {
  username: string;
  comment: string;
  userPic: string;
  time: string;
  expanded?: boolean;
  likes?: number;
}

export const ExpandedComment = ({
  username,
  comment,
  userPic,
  time,
  likes,
}: ICommentsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={userPic} alt={username} className={styles.image} />
      </div>

      <div className={styles.commentWrapper}>
        <div className={styles.comment}>
          <div className={styles.commentText}>
            <span className={styles.username}>{username}</span>
            {comment}
          </div>
          <div className={styles.like}>
            <HeartIcon></HeartIcon>
          </div>
        </div>

        <div className={styles.commentBottom}>
          <div className={styles.time}>{time}</div>
          <div className={styles.commentActions}>
            <span>{likes} like</span>
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SimpleComment = ({ username, comment }: ICommentsProps) => {
  return (
    <div className={styles.simpleCommentWrapper}>
      <div className={styles.simpleComment}>
        <span className={styles.simpleCommentUser}>{username}</span>
        {comment}
      </div>
      <div className={styles.simpleCommentLike}>
        <HeartIcon />
      </div>
    </div>
  );
};

const Comments: React.FC<ICommentsProps> = props => {
  return props.expanded ? (
    <ExpandedComment {...props} />
  ) : (
    <SimpleComment {...props} />
  );
};

export default Comments;
