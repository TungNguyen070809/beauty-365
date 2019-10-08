import Link from 'next/link';
import moment from 'moment';
const ArticleItem = ({ article }) => {
    return (
        <div className="single_blog_post_box">
            <div className="blog_post_photo imageHover">
                <Link href={ `/bai-viet/${article.handle}` }>
                    <a title={article.title}>
                        <img className="insImageload" src={article.image.src} alt={article.title} />
                    </a>
                </Link>
            </div>
            <div className="blog_post_txt">
                <div className="blog_post_heading">
                    <h2>
                        <Link href={ `/bai-viet/${article.handle}` }>
                            <a title={article.title}>{article.title}</a>
                        </Link>
                    </h2>
                    <p>Đăng bởi: {article.author}</p>
                </div>
                <div className="blog_post_content">
                    <p>{ article.body_html.replace(/(<([^>]+)>)/ig, "").substring(0, 50) + '...' }</p>
                    <ul className="list">
                        <li><i className="fa fa-comments-o" aria-hidden="true"></i> { article.comments_count } Bình luận</li>
                        <li><i className="fa fa-calendar" aria-hidden="true"></i> { moment(article.published_at).format("MM/DD/YYYY") }</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ArticleItem;