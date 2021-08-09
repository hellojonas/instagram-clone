import React, { FormEvent, useState } from 'react';
import { TextButton } from '../Button/Buttons';
import {
  CommentIcon,
  EmojiIcon,
  HeartIcon,
  MoreOptionsIcon,
  SaveIcon,
  ShareIcon,
} from '../icons';
import Comments, { ICommentsProps } from './Comments';
import styles from './Post.module.css';
import PostExpanded from './PostExpanded';

export interface IPostProps {
  username: string;
  userPic: string;
  postMedia: string;
  likes?: number;
  description?: string;
  time: string;
  comments?: ICommentsProps[];
}

export const PostHeader = ({
  username,
  userPic,
}: {
  username: string;
  userPic: string;
}) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.userWrapper}>
        <div className={styles.imageWrapper}>
          <img src={userPic} alt={username} className={styles.image} />
        </div>
        <div className={styles.username}>{username}</div>
      </div>
      <div className={styles.moreOptions}>
        <MoreOptionsIcon />
      </div>
    </div>
  );
};

export const Stats = ({
  likes,
  time,
  expanded,
}: {
  likes?: number;
  expanded?: boolean;
  time?: string;
}) => {
  const classes = expanded
    ? [styles.stats, styles.statsExpanded].join(' ')
    : styles.stats;
  return (
    <div className={classes}>
      <div className={styles.controls}>
        <div className={styles.controlsLeft}>
          <div className={styles.statsIcon}>
            <HeartIcon />
          </div>
          <div className={styles.statsIcon}>
            <CommentIcon />
          </div>
          <div className={styles.statsIcon}>
            <ShareIcon />
          </div>
        </div>

        <div className={styles.controlsRight}>
          <div className={styles.statsIcon}>
            <SaveIcon />
          </div>
        </div>
      </div>
      <div className={styles.postLikes}>{likes} likes</div>
      {expanded && <div className={styles.statsTimeExpanded}>{time}</div>}
    </div>
  );
};

export const Description = ({
  username,
  description,
}: {
  username?: string;
  description?: string;
}) => {
  return (
    <div className={styles.description}>
      <span className={styles.descUsername}>{username}</span>
      {description}
    </div>
  );
};

export interface INewComment {
  inputHandler?: (e?: FormEvent<HTMLInputElement>) => void;
}

export const NewComment = (props: INewComment) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.addComment}>
      <div className={styles.emojis}>
        <EmojiIcon />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Add a comment..."
          className={styles.input}
          onInput={e => {
            setValue((e.target as HTMLInputElement).value);
            props.inputHandler && props.inputHandler(e);
          }}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <TextButton disabled={value === ''}>Post</TextButton>
      </div>
    </div>
  );
};

const Post: React.FC<IPostProps> = props => {
  const [expanded, setExpanded] = useState(false);

  const comments = props.comments?.map((c, idx) => (
    <Comments {...c} key={idx} />
  ));

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <PostHeader username="daygoboyjurs" userPic={props.userPic} />
      </div>

      <div className={styles.mediaWrapper}>
        <img src={props.postMedia} alt={'post'} className={styles.media} />
      </div>

      <Stats likes={props.likes} />

      <div className={styles.postStats}>
        <Description
          username={props.username}
          description={props.description}
        />
      </div>

      <div className={styles.commentsWrapper}>
        <div className={styles.commentsToggler}>
          <span onClick={() => setExpanded(true)}>View all 2 comments</span>
        </div>

        <div className={styles.comments}>{comments}</div>
      </div>

      <div className={styles.postDate}>7 Hours ago</div>

      <NewComment />

      {expanded && (
        <div className={styles.overflow} onClick={e => setExpanded(false)}>
          <div className={styles.expanded} onClick={e => e.stopPropagation()}>
            <PostExpanded {...props} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
