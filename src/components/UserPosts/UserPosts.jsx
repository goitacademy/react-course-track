import styles from './UserPosts.module.css';

export default function UserPosts({ posts }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>User Posts</h3>
            {posts.map((post) => (
                <div key={post.id} className={styles.post}>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.body}>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
