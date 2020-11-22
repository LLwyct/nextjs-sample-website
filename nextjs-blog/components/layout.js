import styles from './layout.module.css';

export default function Layout ({children}) {
    // css modules写法
    // 要注意的是styled-jsx、css modules、sass都是nextjs内建支持的
    return <div className={styles.container}>{children}</div>;
}