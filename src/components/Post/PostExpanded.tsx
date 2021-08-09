import React from 'react';
import styles from './PostExpanded.module.css';
import { Description, IPostProps, NewComment, PostHeader, Stats } from './Post';
import Comments from './Comments';

const PostExpanded: React.FC<IPostProps> = props => {
  const comments = props.comments?.map((c, idx) => (
    <Comments {...c} key={idx} expanded />
  ));
  return (
    <div className={styles.post}>
      <div className={styles.mediaWapper}>
        <img src={props.postMedia} alt="post" className={styles.media} />
      </div>
      <div className={styles.expanded}>
        <div className={styles.header}>
          <PostHeader username={props.username} userPic={props.userPic} />
        </div>

        <div className={styles.commentWrapper}>
          <div className={styles.description}>
            <Description
              username={props.username}
              description={props.description}
            />
          </div>
          <div className={styles.comments}>{comments}</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.stats}>
            <Stats likes={props.likes} expanded time={props.time} />
          </div>
          <div className={styles.addComment}>
            <NewComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostExpanded;
