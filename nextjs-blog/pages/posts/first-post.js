import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                {/* 
                1.基于Link的渲染是客户端渲染，不会请求全部页面，而是部分渲染，速度要快很多，而基于a标签的跳转会请求并重新渲染整个页面
                2.nextjs自动执行代码分割，即使有上百个页面也会保证首屏加载速度。
                3.nextjs自动执行页面预抓取，对当前页面上的Link标签的href的内容进行预抓取，保证跳转速度。
                4.整个过程不需要任何路由组件
                */}
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )

}