// 为了载入全局css，我们在pages下创建此文件
// 它是一个顶级组件，被所有的页面共享，例如，你可以在页面跳转时用它来维护全局状态。
// 由于它被所有页面共享，因此可以在这里引入全局css
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}