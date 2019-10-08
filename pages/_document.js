import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx)
   return { ...initialProps }
 }

 render() {
   return (
     <html>
       <Head>
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=0' name='viewport' />
          <meta name="keywords" content="Mỹ phẩm làm đẹp 365, chuyên cung cấp các loại mỹ phẩm chính hãng. Hiệu quả ngay sau lần sử dụng đầu tiên."></meta>
          <link rel="stylesheet" href="/static/font-awesome.min.css" />
          <link rel="stylesheet" href="/static/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/style.css" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
   )
 }
}