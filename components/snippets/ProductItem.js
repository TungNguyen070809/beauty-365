import Link from 'next/link';
import { moneyFormat } from '../../utils';
const ProductItem = ({ product }) => (
    <div className="pdLoopItem">
        <div className="itemLoop clearfix">
            <div className="pdLoopImg elementFixHeight">
                <Link href={ `/san-pham/${product.handle}` }>
                    <a title={ product.title }>
                        <img src={ product.featured_image } className="imgLoopItem" alt={ product.title } />
                    </a>
                </Link>
            </div>
            <div className="pdLoopDetail text-center clearfix">
                <h3 className="pdLoopName">
                    <Link href={ `/san-pham/${product.handle}` }>
                        <a className="productName" title={ product.title }>{ product.title }</a>
                    </Link>
                </h3>
                <p className="pdPrice">
                    { product.compare_at_price > product.price ? <> <span>{moneyFormat(product.price)}</span><del className="pdComparePrice">{ moneyFormat(product.compare_at_price) }</del> </> : <><span>${ moneyFormat(product.price) }</span></> }
                </p>
            </div>
        </div>
    </div>
);
  
export default ProductItem;